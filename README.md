# ts-learning

## 環境建立

```bash
npm install -g typescript
```
## 編譯
```bash
tsc
tsc -watch
```
## tsconfig：

```bash
tsc --init
```

```json
{
  "compilerOptions": {
    "target": "es5",
    "module":"commonjs",
    "lib":["es2015","dom"],
    "strict": true,
    "outDir": "./build"
  }
}
```

指定 tsconfig.json 路徑

```bash
tsc -p tsconfig.json
```

## 搭配 webpack, gulp or grunt 打包

- webpack: `ts-loader`
- gulp: `gulp-typescript`
- grunt: `grunt-ts`


## 安裝第三方函式庫定義檔
```bash
npm install --save @types/lodash
```
預設會自動查找定義檔來加入編譯，也可自行指定
```json
"compilerOptions": {
  "typeRoots" : [ "./node_modules/@types"]
}
```

## 入門

可先到 [TypeScript Playground](http://www.typescriptlang.org/play/) 遊玩

1. 基本變數加上型別
2. interface / type
3. class
4. import / export
5. generic