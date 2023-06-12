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
    "https://640cf0df1a18a5db836e754a.mockapi.io/api/products"
  );
  const products = results.json();
  return products;
}

export type CartItems = { [productID: string]: number };