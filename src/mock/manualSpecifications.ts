export interface Icatalogue {
	id: string;
	name: string;
	opcoes: Array<{
		id: string;
		brand: string;
		manual: Array<{
			id: string;
			specification: string;
			implant: string;
			platform: string;
			family: string;
		}>;
	}>;
}

export interface ISmp {
	id?: string;
	family?: string;
	componentes: Array<{
		id: string;
		name: string;
		slug: string;
		image: string;
		torque?: string;
		cimentado: boolean;
		connection: string;
		caracteristicas: Array<{
			id: string;
			connection?: string;
			opcoes: Array<{
				id?: string;
				value?: string;
				label?: string;
				sku?: string;
			}>;
		}>;
		adicionais?: Array<{
			connection: string;
			image?: string;
			sku: string;
		}>;
	}>;
}

const catalogues: Icatalogue[] = [
	{
		id: "0",
		name: "coneMorse",
		opcoes: [
			{
				id: "NEODENT",
				brand: "NEODENT",
				manual: [
					{
						id: "0",
						specification: "CM",
						implant: "3.5/3.75/4.0/4.3/5.0",
						platform: "3.5/3.75/4.0/4.3/5.0",
						family: "A3.1",
					}
				],
			},
		],
	}
];

export { catalogues };
