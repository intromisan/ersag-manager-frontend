import { VolumeUnit } from '../interfaces/product';

// Number mask 100,000,000
export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getUnitVolume = (unitVariable: VolumeUnit) => {
  switch (unitVariable) {
    case 1:
      return 'мл';
    case 2:
      return 'л';
    case 3:
      return 'гр';
    case 4:
      return 'кг';

    default:
      throw new Error('Unknown unit');
  }
};
