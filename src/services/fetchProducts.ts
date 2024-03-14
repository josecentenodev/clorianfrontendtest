import { events } from "../db/data";

interface Product {
  id: number;
  name: string;
  description: string;
  validityDate: string;
  cost: number;
  imageUrl: string;
  altImg: string;
}

const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
      resolve(events);
  });
};

export default fetchProducts;
