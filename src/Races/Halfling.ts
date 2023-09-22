import Race from './Race';

class Halfling extends Race {
  private static _halflingfCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingfCount += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Halfling._halflingfCount;
  }
}

export default Halfling;