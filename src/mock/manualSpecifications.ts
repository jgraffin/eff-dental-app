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
  familia: string;
  componentes: Array<{
    nome: string;
    imagem: string;
    perfil: string;
    torque: string;
    caracteristicas: Array<{
      perfil: string;
      tipoRotacao: string;
      tamanho: string;
    }>;
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
    familia: "K3.2",
    componentes: [
      {
        nome: "Tapa Implante",
        imagem: "tapa-implante",
        perfil: "",
        torque: "",
        caracteristicas: [
          {
            perfil: "",
            tipoRotacao: "",
            tamanho: "EFF 105 . 06A cinta 3.0mm",
          },
        ],
      },
      {
        nome: "Cicatrizador",
        imagem: "cicatrizador",
        perfil: "Reto/Divergente",
        torque: "Torque 20Ncm",
        caracteristicas: [
          {
            perfil: "Reto Ø3.50mm",
            tipoRotacao: "",
            tamanho: "EFF 105 . 06A cinta 3.0mm",
          },
          {
            perfil: "Reto Ø3.50mm",
            tipoRotacao: "",
            tamanho: "EFF 105 . 06B cinta 5.0mm",
          },
          {
            perfil: "Reto Ø3.50mm",
            tipoRotacao: "",
            tamanho: "EFF 105 . 06C cinta 7.0mm",
          },
          {
            perfil: "Divergente Ø5.0mm",
            tipoRotacao: "",
            tamanho: "EFF 105 . 06 . 6A cinta 3.0mm",
          },
          {
            perfil: "Divergente Ø5.0mm",
            tipoRotacao: "",
            tamanho: "EFF 105 . 06 . 6B cinta 5.0mm",
          },
          {
            perfil: "Divergente Ø5.0mm",
            tipoRotacao: "",
            tamanho: "EFF 105 . 06 . 6C cinta 7.0mm",
          },
        ],
      },
      {
        nome: "Transfer Moldeira Aberta",
        imagem: "",
        perfil: "",
        torque: "",
        caracteristicas: [
          {
            perfil: "",
            tipoRotacao: "Anti Rotacional",
            tamanho: "EFF 205 . 06A . CJ",
          },
          {
            perfil: "",
            tipoRotacao: "Rotacional",
            tamanho: "EFF 205 . 06A . 1 . CJ",
          },
        ],
      },
      {
        nome: "Transfer Moldeira Fechada",
        imagem: "",
        perfil: "",
        torque: "",
        caracteristicas: [
          {
            perfil: "",
            tipoRotacao: "Anti Rotacional",
            tamanho: "EFF 205 . 06B . CJ",
          },
        ],
      },
      {
        nome: "Análogo do Implante",
        imagem: "",
        perfil: "",
        torque: "",
        caracteristicas: [
          {
            perfil: "",
            tipoRotacao: "",
            tamanho: "EFF 205 . 06B . CJ",
          },
        ],
      },
    ],
  },
];

export { Catalogos, SistemaMultiplataforma };
