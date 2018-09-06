# ts-learning

## 環境建立

```bash
npm install -g typescript
```

## tsconfig 常用到的設定：

```bash
tsc --init
```

```json
{
  "compilerOptions": {
    "target": "es5", // 指定將轉譯的 ECMA 版本
    "module":"commonjs", //模組化系統
    "lib":["es2015","dom"],
    /* 要引入的 lib，這邊設定是因為 target 為 es5 時沒有 es6 promise 等 API，如果有使用到，須引入 lib TS 才不會報錯，若 target 為 es6 時不用設定 */
    "strict": true, // 嚴格模式
    "outDir": "./build" // 輸出路徑
  }
}
```

指定 tsconfig.json 路徑

```bash
tsc -p tsconfig.json
```

## 搭配 webpack, gulp or grunt 打包

- webpack:ts-loader
- gulp:gulp-typescript
- grunt:grunt-ts
