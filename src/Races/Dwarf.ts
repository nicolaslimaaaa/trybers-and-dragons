import Race from './Race';

class Dwarf extends Race {
  private static _dwarfCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._dwarfCount += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Dwarf._dwarfCount;
  }
}

export default Dwarf;