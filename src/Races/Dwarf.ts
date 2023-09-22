import Race from './Race';

class Dwarf extends Race {
  private static _dwarfCount = 0;

  constructor(name: string, dexterity: number, private _maxLifePoints = 80) {
    super(name, dexterity);
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    Dwarf._dwarfCount += 1;
    return Dwarf._dwarfCount;
  }
}

export default Dwarf;