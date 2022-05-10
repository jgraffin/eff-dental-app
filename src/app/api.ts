export interface Product {
  id: string;
  familia: string;
  componentes: Array<{
    id: string;
    nome: string;
    slug: string;
    imagem: string;
    cimentado: false;
    tipoConexao: string;
    caracteristicas: Array<{
      id: string;
      tipoConexao: string;
      opcoes: Array<{
        label: string;
        sku: string;
      }>;
    }>;
    adicionais?: Array<{
      tipoConexao: string;
      imagem?: string;
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
export type CheckoutResponse = { success: boolean; error?: string };
