/**
 * 脚本自动生成侧边栏
 */
const dayJs = require('dayjs')
const path = require('path')
const fs = require('fs')

const sidebar = []
const docs_path = path.resolve(__dirname, './docs')

function gen_sidebar_config(dir_path, ref, parent_ref, parent_router_path) {
    try {
        const file_or_dir_list = fs.readdirSync(dir_path)
        if (file_or_dir_list) {
            for (let index = 0; index < file_or_dir_list.length; index++) {
                const file_or_dir_name = file_or_dir_list[index];
                const current_path = path.join(dir_path, file_or_dir_name)
                const current_stat = fs.statSync(current_path)
                // 忽略.vitepress
                if (/^\./.test(file_or_dir_name)) {
                    continue
                }
                // 文件
                if (current_stat.isFile()) {
                    // 忽略index.md
                    if (!parent_router_path && file_or_dir_name === "index.md") {
                        continue
                    }
                    const current_router_path = parent_router_path ? `${parent_router_path}${file_or_dir_name}` : `/${file_or_dir_name}`
                    if (/^\README/.test(file_or_dir_name)) {
                        parent_ref.path = parent_router_path
                        continue
                    }
                    //去除.md的后缀
                    const file = {
                        text: file_or_dir_name.slice(0,file_or_dir_name.length-3),
                        link: current_router_path
                    }
                    ref.push(file)
                    continue
                }
                // 文件夹
                if (current_stat.isDirectory()) {
                    //忽略public
                    if (file_or_dir_name === "public"||file_or_dir_name === "node_modules") {
                        continue
                    }
                    const current_router_path = parent_router_path ? `${parent_router_path}${file_or_dir_name}/` : `/${file_or_dir_name}/`
                    // 创建分组
                    const group = {
                        text: file_or_dir_name,
                        items: []
                    }
                    ref.push(group)
                    gen_sidebar_config(current_path, ref[ref.length - 1].items, ref[ref.length - 1], current_router_path)
                }
            }
        }
    } catch (error) {
        console.error('💣 ERROR:: gen_sidebar_config error', error)
    }
}

gen_sidebar_config(docs_path, sidebar)

const sidebar_json = JSON.stringify(sidebar)
fs.writeFile('./docs/.vitepress/sidebar.config.json', sidebar_json, (err) => {
    if (err) {
        console.log('💣 ERROR:: node fs.writeFile', err)
        throw err
    }
    console.log('🎉🎉🎉 sidebar 配置已生成 🎉🎉🎉')
})