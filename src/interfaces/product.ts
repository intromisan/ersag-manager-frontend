export interface IProduct {
  id: string;
  name: string;
  code: string;
  volume: number;
  volumeUnit: VolumeUnit;
  price: number;
  withDevice?: boolean;
  image?: string;
}

export enum VolumeUnit {
  ML = 1,
  L,
  GR,
  KG
}
