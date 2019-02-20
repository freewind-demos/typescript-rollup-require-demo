TypeScript Rollup "require" Demo
================================

当代码中使用了`require`的时候，依然可以使用`esm`的模块规范打包，生成的代码中会继续使用`require`.

最后在前端使用的时候，还是需要如webpack再bundle一下。

```
npm install
npm run demo
```

将生成`bundle.js`和`bundle.mjs`两个文件，分别使用了两个模块规范。
