import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  override fight(): number {
    do {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    } while (
      this._player2.lifePoints > 0 && this._player1.lifePoints > 0
    );

    return super.fight();
  }
}

export default PVP;