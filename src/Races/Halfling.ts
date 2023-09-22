import Race from './Race';

class Halfling extends Race {
  private static _halfling = 0;

  constructor(name: string, dexterity: number, private _maxLifePoints = 60) {
    super(name, dexterity);
  }

  override get maxLifePoints() {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    Halfling._halfling += 1;

    return Halfling._halfling;
  }
}

export default Halfling;