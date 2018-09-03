interface IPlayer {
  play(): void;
  pause(): void;
}

interface IPlayerParam {
  playMode: string;
  playerType: string;
}

interface MPlayer extends IPlayer {
  duration: number;
  banner: HTMLImageElement;
}
