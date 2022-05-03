export type CatalogType = {
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
};

export type SmpType = {
  id: string;
  familia: string;
  componentes: Array<{
    id: string;
    nome: string;
    imagem: string;
    torque?: string;
    cimentado: boolean;
    caracteristicas: Array<{
      id: string;
      tipo: string;
      opcoes: Array<{
        sku: string;
      }>;
    }>;
    parafuso?: {
      sku: string;
    };
  }>;
};

const Catalogos: CatalogType[] = [
  {
    id: "1",
    name: "Cone Morse",
    opcoes: [
      {
        id: "Nobel Biocare",
        marca: "Nobel Biocare®",
        manual: [
          {
            id: "0",
            especificacao: "Undefined",
            implante: "3.0",
            plataforma: "3.0",
            familia: "K3.1",
          },
          {
            id: "1",
            especificacao: "NP",
            implante: "3.5",
            plataforma: "3.5",
            familia: "K3.2",
          },
          {
            id: "2",
            especificacao: "RP",
            implante: "4.3/5.0",
            plataforma: "3.9",
            familia: "K3.3",
          },
        ],
      },
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
          {
            id: "2",
            especificacao: "Pilar GM e Micro",
            implante: "Undefined",
            plataforma: "3.5",
            familia: "PGM/MPGM",
          },
          {
            id: "3",
            especificacao: "Pilar GT",
            implante: "Undefined",
            plataforma: "4.8",
            familia: "MPGT",
          },
        ],
      },
      {
        id: "STR",
        marca: "STR",
        manual: [
          {
            id: "0",
            especificacao: "RN",
            implante: "3.3/4.1/4.8",
            plataforma: "4.8",
            familia: "J3.1",
          },
          {
            id: "1",
            especificacao: "WN",
            implante: "4.8",
            plataforma: "6.5",
            familia: "J3.2",
          },
          {
            id: "2",
            especificacao: "Pilar Synocta ®",
            implante: "Undefined",
            plataforma: "4.1/4.8/6.5",
            familia: "SYRN/SYWN",
          },
          {
            id: "3",
            especificacao: "SC",
            implante: "2.9",
            plataforma: "2.9",
            familia: "J3.5",
          },
          {
            id: "4",
            especificacao: "NC",
            implante: "3.3",
            plataforma: "3.3",
            familia: "J3.3",
          },
          {
            id: "5",
            especificacao: "RC",
            implante: "4.1/4.8",
            plataforma: "4.1",
            familia: "J3.4",
          },
          {
            id: "6",
            especificacao: "X RB",
            implante: "3.5",
            plataforma: "3.5/3.75/4.0/4.5",
            familia: "J3.6",
          },
          {
            id: "7",
            especificacao: "X WB",
            implante: "4.5",
            plataforma: "3.5/3.75/4.0/4.5/5.0/5.5/6.5",
            familia: "J3.7",
          },
          {
            id: "8",
            especificacao: "Pilar SRA",
            implante: "Undefined",
            plataforma: "3.5/4.5/4.6",
            familia: "MB/SRA",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Hexagono Externo",
    opcoes: [
      {
        id: "fddsf",
        marca: "hueah ehaue",
        manual: [
          {
            id: "0",
            especificacao: "Undefined",
            implante: "3.0",
            plataforma: "3.0",
            familia: "K3.1",
          },
          {
            id: "1",
            especificacao: "NP",
            implante: "3.5",
            plataforma: "3.5",
            familia: "K3.2",
          },
          {
            id: "2",
            especificacao: "RP",
            implante: "4.3/5.0",
            plataforma: "3.9",
            familia: "K3.3",
          },
        ],
      },
      {
        id: "NEOs",
        marca: "DSD SADAS",
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
          {
            id: "2",
            especificacao: "Pilar GM e Micro",
            implante: "Undefined",
            plataforma: "3.5",
            familia: "PGM/MPGM",
          },
          {
            id: "3",
            especificacao: "Pilar GT",
            implante: "Undefined",
            plataforma: "4.8",
            familia: "MPGT",
          },
        ],
      },
      {
        id: "STRs",
        marca: "STR",
        manual: [
          {
            id: "0",
            especificacao: "RN",
            implante: "3.3/4.1/4.8",
            plataforma: "4.8",
            familia: "J3.1",
          },
          {
            id: "1",
            especificacao: "WN",
            implante: "4.8",
            plataforma: "6.5",
            familia: "J3.2",
          },
          {
            id: "2",
            especificacao: "Pilar Synocta ®",
            implante: "Undefined",
            plataforma: "4.1/4.8/6.5",
            familia: "SYRN/SYWN",
          },
          {
            id: "3",
            especificacao: "SC",
            implante: "2.9",
            plataforma: "2.9",
            familia: "J3.5",
          },
          {
            id: "4",
            especificacao: "NC",
            implante: "3.3",
            plataforma: "3.3",
            familia: "J3.3",
          },
          {
            id: "5",
            especificacao: "RC",
            implante: "4.1/4.8",
            plataforma: "4.1",
            familia: "J3.4",
          },
          {
            id: "6",
            especificacao: "X RB",
            implante: "3.5",
            plataforma: "3.5/3.75/4.0/4.5",
            familia: "J3.6",
          },
          {
            id: "7",
            especificacao: "X WB",
            implante: "4.5",
            plataforma: "3.5/3.75/4.0/4.5/5.0/5.5/6.5",
            familia: "J3.7",
          },
          {
            id: "8",
            especificacao: "Pilar SRA",
            implante: "Undefined",
            plataforma: "3.5/4.5/4.6",
            familia: "MB/SRA",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Hexagono Interno",
    opcoes: [
      {
        id: "Nobel Biocare ds",
        marca: "Nobel Biocare®",
        manual: [
          {
            id: "0",
            especificacao: "Undefined",
            implante: "3.0",
            plataforma: "3.0",
            familia: "K3.1",
          },
          {
            id: "1",
            especificacao: "NP",
            implante: "3.5",
            plataforma: "3.5",
            familia: "K3.2",
          },
          {
            id: "2",
            especificacao: "RP",
            implante: "4.3/5.0",
            plataforma: "3.9",
            familia: "K3.3",
          },
        ],
      },
      {
        id: "NEOs",
        marca: "DSD SADAS",
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
          {
            id: "2",
            especificacao: "Pilar GM e Micro",
            implante: "Undefined",
            plataforma: "3.5",
            familia: "PGM/MPGM",
          },
          {
            id: "3",
            especificacao: "Pilar GT",
            implante: "Undefined",
            plataforma: "4.8",
            familia: "MPGT",
          },
        ],
      },
      {
        id: "STRs",
        marca: "STR",
        manual: [
          {
            id: "0",
            especificacao: "RN",
            implante: "3.3/4.1/4.8",
            plataforma: "4.8",
            familia: "J3.1",
          },
          {
            id: "1",
            especificacao: "WN",
            implante: "4.8",
            plataforma: "6.5",
            familia: "J3.2",
          },
          {
            id: "2",
            especificacao: "Pilar Synocta ®",
            implante: "Undefined",
            plataforma: "4.1/4.8/6.5",
            familia: "SYRN/SYWN",
          },
          {
            id: "3",
            especificacao: "SC",
            implante: "2.9",
            plataforma: "2.9",
            familia: "J3.5",
          },
          {
            id: "4",
            especificacao: "NC",
            implante: "3.3",
            plataforma: "3.3",
            familia: "J3.3",
          },
          {
            id: "5",
            especificacao: "RC",
            implante: "4.1/4.8",
            plataforma: "4.1",
            familia: "J3.4",
          },
          {
            id: "6",
            especificacao: "X RB",
            implante: "3.5",
            plataforma: "3.5/3.75/4.0/4.5",
            familia: "J3.6",
          },
          {
            id: "7",
            especificacao: "X WB",
            implante: "4.5",
            plataforma: "3.5/3.75/4.0/4.5/5.0/5.5/6.5",
            familia: "J3.7",
          },
          {
            id: "8",
            especificacao: "Pilar SRA",
            implante: "Undefined",
            plataforma: "3.5/4.5/4.6",
            familia: "MB/SRA",
          },
        ],
      },
    ],
  },
];

const SistemaMultiplataforma: SmpType[] = [
  {
    id: "0",
    familia: "K3.1",
    componentes: [
      {
        id: "0",
        nome: "Tapa Implante",
        imagem: "tapa-implante",
        cimentado: true,
        caracteristicas: [
          {
            id: "0",
            tipo: "SKU",
            opcoes: [
              {
                sku: "155.15",
              },
            ],
          },
        ],
      },
      {
        id: "1",
        nome: "Cicatrizador",
        imagem: "cicatrizador",
        cimentado: false,
        caracteristicas: [
          {
            id: "0",
            tipo: "SKU",
            opcoes: [
              {
                sku: "105.15A 3.0mm",
              },
              {
                sku: "105.15B 5.0mm",
              },
              {
                sku: "105.15C 7.0mm",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        nome: "Transfer M.a P/Implante",
        imagem: "transfer-moldeira-aberta",
        cimentado: false,
        caracteristicas: [
          {
            id: "0",
            tipo: "SKU",
            opcoes: [
              {
                sku: "205.15A.CJ",
              },
            ],
          },
        ],
      },
      {
        id: "3",
        nome: "Transfer M.f P/Implante",
        imagem: "transfer-moldeira-fechada",
        cimentado: false,
        caracteristicas: [
          {
            id: "0",
            tipo: "SKU",
            opcoes: [
              {
                sku: "205.15B.CJ",
              },
            ],
          },
        ],
      },
      {
        id: "4",
        nome: "Análogo do Implante",
        imagem: "analogo-do-implante",
        cimentado: false,
        caracteristicas: [
          {
            id: "0",
            tipo: "SKU",
            opcoes: [
              {
                sku: "305.15",
              },
            ],
          },
        ],
      },
      {
        id: "5",
        nome: "Munhão Provisório",
        imagem: "munhao-provisorio",
        torque: "",
        cimentado: false,
        caracteristicas: [
          {
            id: "0",
            tipo: "Anti Rotacional",
            opcoes: [
              {
                sku: "405.15A",
              },
            ],
          },
          {
            id: "1",
            tipo: "Rotacional",
            opcoes: [
              {
                sku: "405.15B",
              },
            ],
          },
        ],
        parafuso: {
          sku: "2101.06C",
        },
      },
    ],
  },
  {
    id: "1",
    familia: "K3.2",
    componentes: [
      {
        id: "0",
        nome: "Tapa Implante",
        imagem: "tapa-implante",
        cimentado: true,
        caracteristicas: [
          {
            id: "0",
            tipo: "SKU",
            opcoes: [
              {
                sku: "155.06",
              },
            ],
          },
        ],
      },
      {
        id: "1",
        nome: "Cicatrizador",
        imagem: "cicatrizador",
        torque: "",
        cimentado: false,
        caracteristicas: [
          {
            id: "0",
            tipo: "Perfil Reto Ø3.50mm",
            opcoes: [
              {
                sku: "105.06A 3.0mm",
              },
              {
                sku: "105.06B 5.0mm",
              },
              {
                sku: "105.06C 7.0mm",
              },
            ],
          },
          {
            id: "1",
            tipo: "Perfil Divergente Ø5.0mm",
            opcoes: [
              {
                sku: "105.06.6A 3.0mm",
              },
              {
                sku: "105.06.6B 5.0mm",
              },
              {
                sku: "105.06.6C 7.0mm",
              },
            ],
          },
        ],
      },
    ],
  },
];

export { Catalogos, SistemaMultiplataforma };
