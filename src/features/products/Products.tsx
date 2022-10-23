import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
	IonCol,
	IonContent,
	IonGrid,
	IonRow,
	IonSelect,
	IonSelectOption,
} from "@ionic/react";

import { AllProducts, FamilySpecification } from "./Styles";
import { getMemoizedNumItems } from "../cart/CartSlice";
import { getProducts } from "../../app/api";
import { receivedProducts } from "./ProductsSlice";
import { selectAllItems, TeethType } from "../teeth/teethSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { WrapperComponents } from "../../styles/App";

import Produtos from "../../components/Produtos";
import Header from "../../components/Header";

const Products = () => {
	const numItems = useAppSelector<string>(getMemoizedNumItems);
	const products = useAppSelector((state) => state.products.products);
	const dispatch = useAppDispatch();
	const store = useSelector(selectAllItems);

	const [fixture, setfixture] = useState("cimentado");
	const title = "Lista de componentes disponíveis";

	const onScrewToggle = () =>
		fixture === "cimentado"
			? setfixture("parafusado")
			: setfixture("cimentado");

	useEffect(() => {
		getProducts().then((products) => {
			dispatch(receivedProducts(products));
			return true;
		});
	}, []);

	let filterProducts = (data: any, products: any) => {
		return data
			.filter((item: any) => {
				for (let obj in products) {
					if (products[obj] !== item[obj]) {
						return false;
					}
				}
				return true;
			}, products)
			.map((product: any) => (
				<Produtos
					key={product.id}
					connection={product.connection}
					id={product.id}
					name={product.name}
					image={product.image}
					label={product.label}
					position={product.position}
					family={product.family}
					accessorie={product.accessorie}
				/>
			));
	};

	return (
		<>
			<Header totalItems={Number(numItems)} titleHeader={title}></Header>

			<IonContent>
				<WrapperComponents>
					<IonGrid>
						<IonRow className="table-head">
							<IonCol className="ion-no-padding" size="2">
								Nº
							</IonCol>
							<IonCol className="ion-no-padding" size="8">
								Família
								<div className="filter-button">
									<IonSelect
										value={fixture}
										placeholder={fixture}
										onIonChange={onScrewToggle}
										interface="action-sheet"
										cancelText="CANCELAR"
									>
										<IonSelectOption value="cimentado">
											Cimentado
										</IonSelectOption>
										<IonSelectOption value="parafusado">
											Parafusado
										</IonSelectOption>
									</IonSelect>
								</div>
							</IonCol>
						</IonRow>
						{store.map(
							(item: TeethType) =>
								item.selected && (
									<IonRow className="table-row" key={item.id}>
										<IonCol className="ion-no-padding" size="2">
											<div className="table-row__tooth">
												<h2>{item.teethNumber}</h2>
											</div>
										</IonCol>

										<IonCol className="ion-no-padding" size="8">
											<input type="checkbox" className="input-toggle" />
											<div className="table-row__item" id={item.id}>
												<FamilySpecification>
													<h2>{item?.family}</h2>
													<span className="table-row__union-type">
														{item?.position === "favoravel"
															? "Favorável"
															: "Desfavorável"}
													</span>
													<span className="table-row__union-type">
														{item?.unionType === "multiplo"
															? "Múltiplo"
															: "Unitário"}
													</span>
												</FamilySpecification>
												<AllProducts>
													{filterProducts(Object.values(products), {
														position: item.position,
														fixture: fixture,
														unionType: item?.unionType,
														family: item?.family,
													})}
												</AllProducts>
											</div>
										</IonCol>
									</IonRow>
								)
						)}
					</IonGrid>
				</WrapperComponents>
			</IonContent>
		</>
	);
};

export default Products;
