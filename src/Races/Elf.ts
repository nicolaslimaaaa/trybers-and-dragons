import Race from './Race';

class Elf extends Race {
  private static _elfCount = 0;

  constructor(name: string, dexterity: number, private _maxLifePoints = 99) {
    super(name, dexterity);
  }

  override get maxLifePoints() {
    return this._maxLifePoints;
  }
  
  static override createdRacesInstances(): number {
    Elf._elfCount += 1;

    return Elf._elfCount;
  }
}

export default Elf;