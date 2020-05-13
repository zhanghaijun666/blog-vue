## css包
npm install bootstrap # 响应式编程框架
npm install fontawesome # 图标字体库
bootstrap官网:http://v3.bootcss.com/
fontawesome官网:http://fontawesome.dashgame.com/

## 安装mock
前后端分离，前端通过mock开发，无需等待后端接口开发好了再开发
npm install mockjs


```
3.4 安装异步编程框架axios
axios用来与后端接口做ajax交互请求用的
npm install axios

axios-mock-adapter用来配合mock开发,mockjs可监听api请求是否可用，如不可用则返回mock测试数据
npm install axios-mock-adapter

3.5 vue中支持jsx语法
用elementui就需要安装下面这些包
npm install babel-helper-vue-jsx-merge-props
npm install babel-plugin-syntax-jsx
npm install babel-plugin-transform-vue-jsx
然后在.babelrc文件中的plugins加上”transform-vue-jsx”
```