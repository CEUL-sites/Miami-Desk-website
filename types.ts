
export interface Property {
  id: string;
  title: string;
  location: 'Miami' | 'Madrid' | 'LATAM';
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
}

export interface Review {
  id: number;
  author: string;
  role: string;
  content: string;
  location: string;
}

export enum Market {
  MIAMI = 'Miami',
  SPAIN = 'Spain',
  LATAM = 'LATAM'
}
