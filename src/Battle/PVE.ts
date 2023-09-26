import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: SimpleFighter[];

  constructor(character: Fighter, monsters: SimpleFighter[]) {
    super(character);
    this._player = character;
    this._monsters = monsters;
  }

  fight(): number {
    do {
      this._player.attack(this._monsters[0]);
      this._monsters[0].attack(this._player);
    } while (
      this._player.lifePoints > 0 && this._monsters[0].lifePoints > 0
    );

    return super.fight();
  }
}
export default PVE;