import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _mageCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._mageCount += 1;
    this._energyType = 'mana';
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances() {
    return Mage._mageCount;
  }
}

export default Mage;