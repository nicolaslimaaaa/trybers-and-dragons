import Race from './Race';

class Orc extends Race {
  private static _orcCount = 0;

  constructor(name: string, dexterity: number, private _maxLifePoints = 74) {
    super(name, dexterity);
  }

  override get maxLifePoints() {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    Orc._orcCount += 1;

    return Orc._orcCount; 
  }
}

export default Orc;