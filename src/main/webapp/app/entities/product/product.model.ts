export interface IProduct {
  id: number;
  name?: string | null;
  description?: string | null;
  rating?: number | null;
  url?: string | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
