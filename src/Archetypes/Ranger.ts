import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _rangerCount = 0;
  private _type_: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._rangerCount += 1;
    this._type_ = 'stamina';
  }

  override get energyType(): EnergyType {
    return this._type_;
  }

  static override createdArchetypeInstances() {
    return Ranger._rangerCount;
  }
}

export default Ranger;