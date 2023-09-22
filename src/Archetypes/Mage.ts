import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _mageCount = 0;
  private _type_: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._mageCount += 1;
    this._type_ = 'mana';
  }

  override get energyType(): EnergyType {
    return this._type_;
  }

  static override createdArchetypeInstances() {
    return Mage._mageCount;
  }
}

export default Mage;