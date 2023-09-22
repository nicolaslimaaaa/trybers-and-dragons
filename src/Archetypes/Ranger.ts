import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _rangerCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._rangerCount += 1;
    this._energyType = 'stamina';
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances() {
    return Ranger._rangerCount;
  }
}

export default Ranger;