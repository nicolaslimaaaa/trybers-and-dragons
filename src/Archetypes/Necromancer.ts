import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _necromancerCount = 0;
  private _type_: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._necromancerCount += 1;
    this._type_ = 'mana';
  }

  override get energyType(): EnergyType {
    return this._type_;
  }

  static override createdArchetypeInstances() {
    return Necromancer._necromancerCount;
  }
}

export default Necromancer;