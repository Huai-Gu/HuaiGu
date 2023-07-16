# DOM和BOM

## JavaScript的结构

#### **JavaScript = ECMAscript + BOM + DOM**

 ECMAscript：JS的标准，规定了各个浏览器如何执行JS的语法。

DOM：用于操作XML、HTML文档的应用编程接口。给JS提供了访问和操作HTML元素的方法

BOM：浏览器对象模型，是控制浏览器行为的接口。

## DOM

### DOM树

HTML元素所构成的树

### DOM操作元素方法

#### 获取节点的DOM方法：

1. getElementById(id)：通过元素的id属性获取单个元素节点，返回**对象**
2. getElementsByTagName(tagName)：通过元素的标签名获取一组元素节点，返回**数组**
3. getElementsByClassName(className)：通过元素的类名获取一组元素节点，返回**数组**
4. getElementsByName(name_content)：通过元素的name属性值来获取元素，返回**数组**
5. querySelector(selector)：通过选择器获取匹配的第一个元素节点，**对象**
6. querySelectorAll(selector)：通过选择器获取匹配的所有元素节点，**数组**

#### 获取/设置元素的属性值的DOM方法：

1. getAttribute(name)：获取元素的指定属性值。
2. setAttribute(name, value)：设置元素的指定属性值。
3. removeAttribute(name)：移除元素的指定属性。

#### 创建节点(Node)的DOM方法：

1. createElement(tagName)：创建指定标签名的元素节点。
2. createTextNode(text)：创建包含指定文本内容的文本节点。
3. createDocumentFragment()：创建一个空的文档片段节点，可以用来存储和操作一组节点。

#### 增添节点的DOM方法：

1. appendChild(node)：将一个节点添加到父节点的子节点列表末尾。
2. insertBefore(newNode, referenceNode)：在父节点的子节点列表中，在指定参考节点之前插入新节点。

#### 删除节点的DOM方法：

1. removeChild(node)：从父节点的子节点列表中移除指定节点。
2. parentNode.removeChild(node)：通过父节点移除指定节点。

#### DOM常见的一些属性：

1. innerHTML：元素的HTML内容。
2. textContent：元素及其后代节点的文本内容。
3. className：元素的类名。
4. id：元素的唯一标识符。
5. style：元素的行内样式。
6. parentNode：元素的父节点。
7. childNodes：元素的子节点列表。
8. previousSibling：元素的前一个同级节点。
9. nextSibling：元素的后一个同级节点。

## BOM

### 定义

浏览器对象模型，核心对象window，包含DOM。把浏览器作为对象来看待，顶级对象就是window，由一系列相关对象构成，并为每个对象提供方法和属性。

document,location,navigation,screen,history

### window对象常见事件

| 属性/方法                                        | 含义                               |
| ------------------------------------------------ | ---------------------------------- |
| opener                                           | 当前窗口的父窗口                   |
| length                                           | 窗口中的框架数                     |
| document                                         | 窗口中当前显示的文档对象           |
| alert(string)                                    | 创建一个警告对话框，显示一条信息   |
| close()                                          | 关闭窗口                           |
| confirm()                                        | 创建一个需要用户确认的对话框       |
| open(url,name,[options])                         | 打开一个新窗口并返回新 window 对象 |
| prompt(text,defaultInput)                        | 创建一个对话框要求用户输入信息     |
| setInterval(expression,milliseconds)             | 经过指定时间间隔计算一个表达式     |
| setInterval(function,millis enconds,[arguments]) | 经过指定时间间隔后调用一个函数     |
| setTimeout(expression,milli seconds)             | 在定时器超过后计算一个表达式       |
| setTimeout(expression,milli seconds,[arguments]) | 在定时器超过时后计算一个函数       |

### location对象

**location用于获取或设置URL，能够解析URL，返回对象**

**window.location = location = document.location**

| 属性/方法	                        |内容                                     
| -------------------------------- | ---------------------------------- |
| host	                           | 主机名：端口号                      |   
| hostname                         | 主机名                             |   
| href	                           | 整个 URL                           | 
| pathname	                       | 路径名                             | 
| port	                           | 端口号                             |                      
| protocol	                       | 协议部分                           |
| search	                       | 查询字符串                         | 
| reload()	                       | 重载当前 URL                       |                
| repalce()	                       | 用新的 URL 替换当前页面             |               

### history对象

**与浏览器历史记录交互，包含用户访问过的URL**（窗口打开开始记）

| 属性/方法	                        |描述                                     
| -------------------------------- | ---------------------------------- |
| length                       | history 对象中的记录数                     |   
| back()	                   | 前往浏览器历史条目前一个 URL，类似后退                    |   
| forward()	                   | 前往浏览器历史条目下一个 URL，类似前进                    | 
| go(num)                      | 浏览器在 history 对象中向前或向后                    | 

### navigator对象

**BOM中识别客户端浏览器的一个window属性。**

| 属性	                        |说明                                    
| -------------------------------- | ---------------------------------- |
| appName	                   | 完整的浏览器名称和版本信息     |   
| platform	                   | 浏览器所在的系统平台                    |   
| plugins		               | 浏览器中安装的插件信息的数 组            | 
| userAgent	                   | 浏览器的用户代理字符串               | 
| userLanguage                 | 操作系统的默认语言               | 