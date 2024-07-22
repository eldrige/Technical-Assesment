import { StaticImageData } from 'next/image';

export type CasinoCard = {
  logo: string | StaticImageData;
  name: string;
  starsCount: number;
  betAmount: number;
  earnAmount: number;
  currencySymbol: string;
  bgColor: string;
};
