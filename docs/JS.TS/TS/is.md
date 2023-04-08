## ts is

```ts
  _isElement(obj: any): obj is Element {
    return !!(obj && obj.nodeType == 1);
  }
```
今天刚看到这个ts is 不同于as 当 _isElement 返回true时 obj 被定义为Element类型

```ts
const foo = (val: unknown) => isString(val) ? val.toUpperCase() : val

const foo = (val: unknown) => isString(val) ? (val as string).toUpperCase() : val

const isString = (val: unknown): val is string => getType(val) === 'string'
```
如上我们可以通过is关键字告诉编译器该值的类型

```ts
const getType = (val: unknown) => Object.prototype.toString.call(val).slice(8, -1).toLowerCase()

const isArray = <T>(val: unknown): val is T[] => getType(val) === 'array'
// 这里我们通过泛型说明如果 isArray 返回了 true ，意味着 val 是由 string 构成的数组
const foo = (val: unknown) => isArray<string>(val) ? val.map(item => item.toLowerCase()) : val
```