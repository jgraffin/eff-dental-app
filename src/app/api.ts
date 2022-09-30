export interface Product {
  id: string;
  family: string;
  componentes: Array<{
    id: string;
    name: string;
    slug: string;
    image: string;
    cimentado: false;
    connection: string;
    caracteristicas: Array<{
      id: string;
      connection: string;
      opcoes: Array<{
        label: string;
        sku: string;
      }>;
    }>;
    adicionais?: Array<{
      connection: string;
      image?: string;
      sku: string;
    }>;
  }>;
}

export async function getProducts(): Promise<Product[]> {
  const results = await fetch(
    "https://620c58aab5736325938c1678.mockapi.io/api/v1/products"
  );
  const products = results.json();
  return products;
}

export type CartItems = { [productID: string]: number };