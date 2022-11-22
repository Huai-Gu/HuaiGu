# canvas框架实现的基本操作以及源码解析(konvajs)

新建Stage类
```js
var stage = new Konva.Stage({
  container: 'container',   // id of container <div> *包裹舞台的DIV元素的ID
  width: 500,
  height: 500
});
```
源码对比
```js
    /**
     * 创建SceneCanvas层和HitCanvas层
     * 
     */ 
    this.bufferCanvas = new SceneCanvas({
      width: this.width(),
      height: this.height(),
    });
    this.bufferHitCanvas = new HitCanvas({
      pixelRatio: 1,
      width: this.width(),
      height: this.height(),
    });
```