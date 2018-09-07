class Player {
  // property
  private playMode: string;
  private playerType: string;
  // 建構式
  constructor(_playMode: string, _playerType: string) {
    this.playMode = _playMode;
    this.playerType = _playerType;
  }
  // static function
  public static isSupportHTML5(): boolean {
    return true;
  }

  public play() { }
  public pause() { }
  public replay() { }
}
const myPlayer = new Player("inread", "DF");





class Player2 implements IPlayer {
  // property
  private playMode: string;
  private playerType: string;
  constructor(playerParam: IPlayerParam) {
    this.playMode = playerParam.playMode;
    this.playerType = playerParam.playerType;
  }
  // static function
  public static getPlayerState() { }

  public play() { }

}

class MobilePlayer extends Player implements MPlayer {
  public duration: number;
  public banner: HTMLImageElement | any;
  constructor() {
    super("mobile-inread", "INSTANT");
    this.duration = 30;
    this.setBanner();
  }
  private setBanner() {
    this.banner = new Image();
  }
}
