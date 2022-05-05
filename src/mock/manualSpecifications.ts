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
    imagem: string;
    torque?: string;
    cimentado: boolean;
    tipo: string;
    caracteristicas: Array<{
      id: string;
      tipo?: string;
      opcoes: Array<{
        value?: string;
        sku: string;
      }>;
    }>;
    quantidade?: number;
    adicionais?: Array<{
      tipo: string;
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
    id: "1",
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
    id: "2",
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

const Smp: ISmp[] = [
  {
    id: "0",
    familia: "A3.1",
    componentes: [
      {
        id: "0",
        nome: "Munhão Provisório",
        imagem: "munhao-provisorio-a31",
        cimentado: false,
        tipo: "rotacionalAntiRotacional",
        caracteristicas: [
          {
            id: "0",
            tipo: "Anti Rotacional",
            opcoes: [
              {
                sku: "405.05A.1h0.8mm",
              },
              {
                sku: "405.05A.2h1.5mm",
              },
              {
                sku: "405.05A.3h2.5mm",
              },
              {
                sku: "405.05A.4h3.5mm",
              },
            ],
          },
          {
            id: "1",
            tipo: "Rotacional",
            opcoes: [
              {
                sku: "405.05B.1h0.8mm",
              },
              {
                sku: "405.05B.2h1.5mm",
              },
              {
                sku: "405.05B.3h2.5mm",
              },
              {
                sku: "405.05B.4h3.5mm",
              },
            ],
          },
        ],
        quantidade: 0,
        adicionais: [
          {
            tipo: "h.0.80/1.50/2.50mm",
            imagem: "",
            sku: "2103.22A",
          },
          {
            tipo: "h.3.50/4.50mm",
            sku: "2103.22A.1",
          },
        ],
      },
      {
        id: "1",
        nome: "Cicatrizador",
        imagem: "cicatrizador",
        torque: "",
        cimentado: false,
        tipo: "",
        caracteristicas: [
          {
            id: "0",
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
        quantidade: 0,
      },
      {
        id: "2",
        nome: "blah blah HUE",
        imagem: "blah",
        torque: "",
        cimentado: false,
        tipo: "rotacionalAntiRotacional",
        caracteristicas: [
          {
            id: "0",
            tipo: "Rotacional",
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
            tipo: "Anti Rotacional",
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
        quantidade: 0,
      },
    ],
  },
  {
    id: "1",
    familia: "K3.1",
    componentes: [
      {
        id: "0",
        nome: "Tapa Implante",
        imagem: "tapa-implante",
        cimentado: false,
        tipo: "",
        caracteristicas: [
          {
            id: "0",
            opcoes: [
              {
                sku: "155.15",
              },
            ],
          },
        ],
        quantidade: 0,
      },
      {
        id: "1",
        nome: "Cicatrizador",
        imagem: "cicatrizador",
        torque: "",
        cimentado: false,
        tipo: "",
        caracteristicas: [
          {
            id: "0",
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
        quantidade: 0,
      },
      {
        id: "2",
        nome: "blah blah",
        imagem: "blah",
        torque: "",
        cimentado: false,
        tipo: "rotacionalAntiRotacional",
        caracteristicas: [
          {
            id: "0",
            tipo: "Rotacional",
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
            tipo: "Anti Rotacional",
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
        quantidade: 0,
      },
    ],
  },
];

export { Catalogos, Smp };
