import Race from './Race';

class Elf extends Race {
  private static _elfCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._elfCount += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Elf._elfCount;
  }
}

export default Elf;