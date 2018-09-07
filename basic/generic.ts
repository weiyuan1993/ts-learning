// 泛型 Generic 讓函式的 type 更彈性

function logAndReturn<T>(thing: T): T {
  console.log(thing);
  return thing;
}

let stringLog = logAndReturn<string>("string log");

let numberLog = logAndReturn<number>(500);

type Phone = {
  vendor: string;
  number: number
}
let myPhone: Phone = { vendor: "Apple", number: 0987654321 };
let logMyPhone: Phone = logAndReturn<Phone>(myPhone);


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
