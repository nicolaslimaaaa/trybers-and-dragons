import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _necromancerCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._necromancerCount += 1;
    this._energyType = 'mana';
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances() {
    return Necromancer._necromancerCount;
  }
}

export default Necromancer;