# 基于vue开发Adobe插件
/CSXS 主要在该目录下建一个 mainifest.xml 的配置文件

/client 主要包含前端界面资源，包括 Adobe CSInterface.js 等第三方库

/jsx 主要包含 ExtendScript 后台运行文件

/js 主要包含前端的渲染以及交互脚本

::: danger
在html进行跳转(端口为vue项目启动端口即可)
:::

::: warning
本着不重复造轮子的原则，在这里我会以kuaizi团队开发的cep依赖为主

[kuaizi--cep](https://github.com/Kuaizi-co/cep)
:::

### 通过软链映射进行热更新
```js
fs.symlinkSync()
```

### 初始模板渲染
![alt](/cep.jpg)



#####  引入该依赖

```js
npm install @kuaizi/vue-cli-plugin-cep
```

引入后运行时会创建软链(即快捷方式)
mainfest.xml可以自动生成，也可以自己配置相关信息
以下为参考配置
```js
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<ExtensionManifest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ExtensionBundleId="com.xxx" ExtensionBundleName="xxx" ExtensionBundleVersion="1.0.0" Version="4.0">
	<ExtensionList>
		<Extension Id="com.xxx" Version="1.0"/>
	</ExtensionList>
	<ExecutionEnvironment>
		<HostList>
			<Host Name="ILST" Version="17.0" />
			<Host Name="PHSP" Version="14.0"/>
			<Host Name="PHXS" Version="14.0"/>
			<Host Name="PPRO" Version="7.0" />
		</HostList>
		<LocaleList>
			<Locale Code="All"/>
		</LocaleList>
		<RequiredRuntimeList>
			<RequiredRuntime Name="CSXS" Version="4.0"/>
		</RequiredRuntimeList>
	</ExecutionEnvironment>
	<DispatchInfoList>
		<Extension Id="com.xxx">
			<DispatchInfo>
				<Resources>
					<MainPath>./index.html</MainPath>	
						<ScriptPath>./jsx/main.jsx</ScriptPath>
                    <CEFCommandLine>
                        <Parameter>--enable-nodejs</Parameter>
                        <Parameter>--mixed-context</Parameter>
                        <Parameter>--allow-file-access</Parameter>
                        <Parameter>--allow-file-access-from-files</Parameter>
                    </CEFCommandLine>
				</Resources>
				<Lifecycle>
					<AutoVisible>true</AutoVisible>
				</Lifecycle>
				<UI>
					<Type>Panel</Type>
					<Menu>xxx</Menu>
					<Geometry>
						<Size>
                            <Height>550</Height>
                            <Width>550</Width>
                        </Size>
                        <MinSize>
                            <Height>550</Height>
                            <Width>550</Width>
                        </MinSize>
					</Geometry>
				</UI>
			</DispatchInfo>
		</Extension>
	</DispatchInfoList>
</ExtensionManifest>
```
### 打包安装有机会再进行更新

此处占位

### ELES？
:sun_with_face:事实上UXP可能更为友好，这里不再赘述

:sun_with_face:[jsx操作CEP的API可能正是你需要的](https://ppro-scripting.docsforadobe.dev/sequence/sequence.html#sequence)

:sun_with_face:感谢大家的分享以及相关依赖的开发:star2::star2::star2::star2: