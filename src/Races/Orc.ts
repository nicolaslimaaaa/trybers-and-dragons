import Race from './Race';

class Orc extends Race {
  private static _orcCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._orcCount += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Orc._orcCount;
  }
}

export default Orc;