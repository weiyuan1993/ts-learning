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
    "module": "commonjs",
    "lib": ["es2015", "dom"],
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

## 入門

可先到 [TypeScript Playground](http://www.typescriptlang.org/play/) 遊玩

1. basic type
2. interface / type
3. class
4. import / export
5. generic
6. window 物件與第三方函式庫
7. 與框架搭配
### 1.basic

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

**基本型別定義**：

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

**物件型別定義**：

```javascript
// object type
const sampleObject: {
  value1: number,
  value2: string,
  value3?: any, // ? 為可有可無的參數
  callBack: () => void
} = {
  value1: 1,
  value2: "a",
  callBack: () => {}
};
```

**enum 枚舉**:
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

**any**:

```javascript
var iAmString:string = 'string is me';
var notSure: any = 4;
notSure = "string";
// 懶人招，不建議使用
(<any>iAmString) = 5;
```

**function**:

```javascript
function getPrice(price: number): number {
  return (price *= 8);
}
var price1 = 1;
var price2 = "2";
getPrice(price1);
getPrice(price2); // 編輯器會報錯
getPrice(price1, price2); // 編輯器會報錯
// 選擇性參數
function createName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  }
  return firstName;
}
```

### 2.interface / type

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
type xmlParam = {
    src:string;
    data:{
        value:number;
        status:string;
    }
}
```
兩種應用差別不大，但通常 `interface` 會用來定義 class 的規格，`type` 用來定義參數內容，視使用情況而定

### 3.class

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
**class 使用 interface**
```javascript
class Player2 implements IPlayer {}
```
使用 `implements` 來實踐 interface，此時 Player2 一定要有 IPlayer 裡定義的規格否則 TS 會報錯

**class extends 繼承/擴充**
```javascript
class MobilePlayer extends Player implements MPlayer {
  public duration: number;
  public banner: HTMLImageElement | any;
  constructor() {
    // super 呼叫父類別的建構式，一定要放於建構式第一行
    super("mobile-inread", "INSTANT");
    this.duration = 30;
    this.setBanner();
  }
  private setBanner() {
    this.banner = new Image();
  }
}
const m = new MobilePlayer();
m.replay()
```
可以看到 MobilePlayer 裡面只有一個 `method` 卻可以使用 `replay()` 而不會報錯，是因為 `MobilePlayer` 繼承了 `Player`，所以可以使用其 method。

由於 javascript 的 `class` 並不是真正的以類別為基礎(class-based)的物件導向，其實是一種用 `prototype` 原形鏈的包裝過語法糖，只是原形鏈繼承寫法比較複雜，因此在 ES5 的寫法還是透過 `prototype` 來做擴充，ES6 後使用 class 比較直覺精簡，但其實骨子裡還是透過原形鏈的概念
```javascript
MobilePlayer.prototype.setBanner = function () {
    this.banner = new Image();
};
```
[參考1](https://tw.saowen.com/a/81fe8cc9057c27d2f0ae5cc969dec3e6738cdeed5c743452d1eb1fc8ef4a2e71)
[參考2](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
### 4.modules

內部模組運用:

`namespace` 可將變數儲存在共同的命名空間，防止命名衝突，透過 `export` 關鍵字將變數 export 出去

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
tsconfig.json 可以設定 `outFile` 來讓各檔案輸出成單一檔案。(並不是透過模組化，而是透過命名空間)

**import / export**: 外部模組的運用 (需透過模組打包工具如 webpack or browserify)

webpack 設定可參考 source code 裡的 `webpack.config.js`
```javascript
// 外部模組的運用
export const VALUE = 0.5;
export class Main {
  init() {
    console.log("init");
  }
}
export function ajax() {
  console.log("ajax call");
}
```

引入的方式：

```javascript
import { Main, ajax } from "./export";
const main = new Main();
main.init();
ajax();
```

### 5.Generic

泛型可讓型別定義更加彈性，當構建一些函式需要被共用時可以採用。

**Generic function**:

```javascript
function logAndReturn<T>(thing: T): T {
  console.log(thing);
  return thing;
}
// 在使用時才指定當前要使用的型別
let stringLog = logAndReturn<string>("string log");
let numberLog = logAndReturn<number>(500);
type Phone = {
  vendor: string,
  number: number
};
let myPhone: Phone = { vendor: "Apple", number: 0987654321 };
let logMyPhone: Phone = logAndReturn<Phone>(myPhone);
```
**Generic object**:
```javascript

// 使用 <T> 可以實作不同種的 Game
interface Games<T> {
  games: Array<T>;
  addGame: (newGame: T) => void;
  getAll: () => Array<T>;
}

type GameForChild = {
  name: string;
  price: number
}

let myChildGameStore: Games<GameForChild> = {
  games: [],
  addGame(game) {
    this.games.push(game);
  },
  getAll() {
    return this.games;
  }
};
let allGames = myChildGameStore.getAll();


// myAdultGame
type GameForAdult = {
  productName: string;
  age: number;
  type: string;
}
let myAdultGameStore: Games<GameForAdult> = {
  games: [],
  addGame(game) {
    this.games.push(game);
  },
  getAll() {
    return this.games;
  }
};

```
myChildGameStore, myAdultGameStore 都是實踐 `interface Games<T>`，所以裡面都必須要有 games, addGame(), getAll(), 但是因為使用了 generic ，所以這三個屬性裡的值可以彈性使用 GameForChild 或 GameForAdult (宣告時必須指定)。

同理，應用在 `class` 也是一樣道理。


### 6.window 物件與第三方函式庫
**window 物件定義**
```javascript
// window 沒有的物件
interface Window {
    ONEAD: string
}
window.ONEAD = '';
```
因為 TS 只會知道既定 window 底下有的物件與函式，如果有其他 script 在 window 下產生變數， TS 不會知道，必須宣告型別才不會報錯。

**周圍變數宣告**：
```javascript
// 宣告已存在 window 裡的 第三方 lib，TS 未定義會報錯
$("#ONEAD");
jQuery("Guoshi");
```
使用第三方套件時，因為沒有型別定義，所以 TS 會報錯，可以透過安裝 `@types`

```bash
npm install @types/jquery --save-dev 
```
或者是自己寫定義檔 `.d.ts`

```javascript
//jquery.d.ts
declare var $: (selector: string) => {};
declare var jQuery: (selector: string) => {};
```

### 與框架搭配
可參考 Microsoft 對兩大框架的 starter 包
* [TypeScript-Vue-Starter](https://github.com/Microsoft/TypeScript-Vue-Starter)
* [TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter)