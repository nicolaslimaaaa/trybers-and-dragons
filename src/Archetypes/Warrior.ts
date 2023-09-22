import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _warriorCount = 0;
  private _type_: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._warriorCount += 1;
    this._type_ = 'stamina';
  }

  override get energyType(): EnergyType {
    return this._type_;
  }

  static override createdArchetypeInstances() {
    return Warrior._warriorCount;
  }
}

export default Warrior;