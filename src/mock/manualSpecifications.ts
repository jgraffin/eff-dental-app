export interface ICatalogo {
  id: string;
  name: string;
  opcoes: Array<{
    id: string;
    marca: string;
    manual: Array<{
      id: string;
      especificacao: string;
      implante: string;
      plataforma: string;
      familia: string;
    }>;
  }>;
}

export interface ISmp {
  id?: string;
  familia?: string;
  componentes: Array<{
    id: string;
    nome: string;
    slug: string;
    imagem: string;
    torque?: string;
    cimentado: boolean;
    tipoConexao: string;
    caracteristicas: Array<{
      id: string;
      tipoConexao?: string;
      opcoes: Array<{
        id?: string;
        value?: string;
        label?: string;
        sku?: string;
      }>;
    }>;
    adicionais?: Array<{
      tipoConexao: string;
      imagem?: string;
      sku: string;
    }>;
  }>;
}

const Catalogos: ICatalogo[] = [
  {
    id: "0",
    name: "Cone Morse",
    opcoes: [
      // {
      //   id: "Nobel Biocare",
      //   marca: "Nobel Biocare®",
      //   manual: [
      //     {
      //       id: "0",
      //       especificacao: "NP",
      //       implante: "3.5",
      //       plataforma: "3.5",
      //       familia: "K3.2",
      //     },
      //   ],
      // },
      {
        id: "NEO",
        marca: "NEO",
        manual: [
          {
            id: "0",
            especificacao: "CM",
            implante: "3.5/3.75/4.0/4.3/5.0",
            plataforma: "3.5/3.75/4.0/4.3/5.0",
            familia: "A3.1",
          },
          {
            id: "1",
            especificacao: "EGM",
            implante: "3.5/3.75/4.0/4.3/5.0",
            plataforma: "3.0",
            familia: "A3.2",
          },
        ],
      },
    ],
  }
  // {
  //   id: "1",
  //   name: "Hexagono Externo",
  //   opcoes: [
  //     {
  //       id: "NEO",
  //       marca: "NEO",
  //       manual: [
  //         {
  //           id: "0",
  //           especificacao: "Undefined",
  //           implante: "3.3/3.5",
  //           plataforma: "3.3",
  //           familia: "A1.1",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "2",
  //   name: "Hexagono Interno",
  //   opcoes: [
  //     {
  //       id: "Nobel Biocare",
  //       marca: "Nobel Biocare®",
  //       manual: [
  //         {
  //           id: "0",
  //           especificacao: "NP",
  //           implante: "3.5",
  //           plataforma: "3.5",
  //           familia: "K2.1",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export { Catalogos };
