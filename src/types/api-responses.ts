export interface VansApiResponse {
  vans: Van[];
}

export interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}
