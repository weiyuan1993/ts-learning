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

1. basic
2. interface / type
3. class
4. import / export
5. generic


### basic
```javascript
const x = 1;
const y = "2";
function plus(a, b) {
  return a + b;
}
console.log(plus(x, y)); // 12
```
上面程式會輸出 12 (因為 string 優先，1 被轉換為字串了)
此時使用 TypeScript 可避免此問題

```javascript
const x: any = 1;
const y: string = "2";

function tsPlus(a: number, b: number): number {
  return a + b;
}
console.log(tsPlus(x, y)); // 編輯器會直接報錯
```
基本型別定義：
```javascript
// boolean
const isDone: boolean = false;
// number
const min = 60 as number;
// string
const nameString: string = "lala";
// Array
const idList: number[] = [1, 2, 3];
const list: Array<number> = [1, 2, 3];
list.push(5);
list.push("5"); // 編譯器會報錯
```
物件型別定義：
```javascript
// object type
const sampleObject: {
  value1: number;
  value2: string;
  value3?: any; // ? 為可有可無的參數
  callBack: () => void;
} = {
  value1: 1,
  value2: "a",
  callBack: () => { }
}
```
enum:
可以指定變數只能是枚舉內的屬性

```javascript
// enum
enum PlayMode {
  // 不指定值的話預設是從 0,1,2 編號開始
  InRead = "inread",
  InPage = "instream",
  InCover = "incover"
}
var playMode: PlayMode = PlayMode.InRead;
playMode = "inpage"; // 編輯器會報錯
console.log(PlayMode.InRead);
```

any:
```javascript
var iAmString:string = 'string is me';
var notSure: any = 4;
notSure = "string";
// 懶人招
(<any>iAmString) = 5;
```

function:
```javascript
function getPrice(price: number): number {
  return (price *= 8);
}
var price1 = 1;
var price2 = "2";
getPrice(price1);
getPrice(price2);// 編輯器會報錯
getPrice(price1, price2);// 編輯器會報錯
// 選擇性參數
function createName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  }
  return firstName;
}
```

### interface / type
```javascript
interface IPlayer {
  play(): void;
  pause(): void;
}
interface IPlayerParam {
  playMode: string;
  playerType: string;
}
// interface 可以擴充
interface MPlayer extends IPlayer {
  duration: number;
  banner: HTMLImageElement;
}
```
### class
```javascript
class Player {
  // property
  private playMode: string;
  private playerType: string;
  // 建構式
  constructor(_playMode: string, _playerType: string) {
    this.playMode = _playMode;
    this.playerType = _playerType;
  }
  // static function 不需 new 出來即可使用
  public static isSupportHTML5(): boolean {
    return true;
  }

  public play() { }
  public pause() { }
  public replay() { }
}
if(Player.isSupportHTML5()){
  const player = new Player("inread","DF");
}
```
### modules
運用 `namespace` 可將變數儲存在共同的命名空間，防止命名衝突，透過 `export` 關鍵字將變數 export 出去

```javascript
namespace Guoshi {
  const internalConst = {};
  export const VALUE = 0.5;
  export class Main {
    init() {
      console.log("init");
    }
  }
}
```
引入的方式：
```javascript
// 這行用來參考到用到的檔案
/// <reference path="./namespace.ts" />
const main = new Guoshi.Main();
namespace Guoshi {
    const main = new Main();
    main.init();
}
```

import / export: 外部模組的運用 (需透過模組打包工具)

```javascript
// 外部模組的運用
export const VALUE = 0.5;
export class Main {
    init() {
        console.log("init");
    }
}
export function ajax() {
    console.log("ajax call")
}
```
引入的方式：
```javascript
import { Main, ajax } from "./export";
const main = new Main();
main.init();
ajax();
```

### generic