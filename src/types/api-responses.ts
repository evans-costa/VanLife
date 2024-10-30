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

export interface LoginApiResponse {
  message: string;
  user?: {
    id: string;
    email: string;
    name: string;
    password: undefined;
  };
}

export interface LoginApiRequest {
  email: string;
  password: string;
}
