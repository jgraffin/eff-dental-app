import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import {
	InputChangeEventDetail,
	IonList,
	IonItem,
	IonLabel,
	IonSelect,
	IonSelectOption,
	IonButton,
	IonAlert,
} from "@ionic/react";

import { RootState } from "../app/store";
import { Modal, ModalClose } from "../styles/App";
import { TeethType, itemUpdated } from "../features/teeth/teethSlice";
import ToothScheme from "./ToothScheme";
import { catalogues } from "../mock/manualSpecifications";

const Edit = ({ match }: { match: { id: number } } | any) => {
	const { id } = match.params;
	const data = useSelector((state: RootState) =>
		state.teeth.items.find((val: TeethType) => val.id === id)
	);

	const [catalogue, setCatalogue] = useState(data?.catalogue);
	const [brand, setBrand] = useState(data?.brand);
	const [specification, setSpecification] = useState(data?.specification);
	const [implant, setImplant] = useState(data?.implant);
	const [platform, setPlatform] = useState(data?.platform);
	const [family, setFamily] = useState(data?.family);
	const [unionType, setUnionType] = useState(data?.unionType);
	const [position, setPosition] = useState(data?.position);
	const [showAlert, setShowAlert] = useState(false);
	const [teethNumber] = useState(data?.teethNumber);
	const [selected] = useState(data?.selected);

	const implantRef = useRef<any>(null);
	const platformRef = useRef<any>(null);
	const familyRef = useRef<any>(null);

	const dispatch = useDispatch();
	const history = useHistory();

	const onCatalogChanged = (event: CustomEvent<InputChangeEventDetail>) => {
		const field = event.target as HTMLInputElement;
		setCatalogue(field.value);
	};

	const onBrandChanged = (event: CustomEvent<InputChangeEventDetail>) => {
		const field = event.target as HTMLInputElement;
		setBrand(field.value);
	};

	const onPositionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
		const field = event.target as HTMLInputElement;
		setPosition(field.value);
	};

	const onUnionChanged = (event: CustomEvent<InputChangeEventDetail>) => {
		const field = event.target as HTMLInputElement;
		setUnionType(field.value);
	};

	const onSpecificationChanged = (
		event: CustomEvent<InputChangeEventDetail>
	) => {
		const field = event.target as HTMLSelectElement;
		setSpecification(field.value);

		if (implantRef.current && platformRef.current && familyRef.current) {
			setImplant(implantRef.current.innerText);
			setPlatform(platformRef.current.innerText);
			setFamily(familyRef.current.innerText);
		}
	};

	const onSaveEdit = () => {
		if (
			catalogue &&
			brand &&
			specification &&
			implant &&
			platform &&
			family
		) {
			dispatch(
				itemUpdated({
					id: id,
					catalogue,
					teethNumber,
					brand,
					specification,
					implant,
					family,
					platform,
					unionType,
					position,
					selected: true,
				})
			);
			history.push(`/`);
		} else {
			setShowAlert(true);
		}
	};

	const onRemove = () => {
		dispatch(
			itemUpdated({
				...data,
				catalogue: "",
				brand: "",
				specification: "",
				implant: "Undefined",
				family: "",
				platform: "",
				unionType: "unitario",
				position: "favoravel",
				selected: false,
			})
		);
		history.push(`/`);
	};

	useEffect(() => {
		setCatalogue(catalogue);
		setBrand(brand);
		console.log(implantRef.current);
	}, [catalogue, brand, unionType]);

	return (
		<>
			<IonAlert
				isOpen={showAlert}
				onDidDismiss={() => setShowAlert(false)}
				header="Ops!"
				message="Por favor, preencha os campos obrigatórios."
				buttons={['OK']}
				cssClass='alert-form'
			/>

			{data !== undefined ? (
				<Modal>
					<div className="container">
						<ModalClose>
							<Link
								to={{
									pathname: `/`,
								}}
							></Link>
						</ModalClose>

						<div className="container__columns">
							{!selected ? (
								<h1>Configurações</h1>
							) : (
								<h1>Editar Configurações</h1>
							)}

							<ToothScheme
								teethNumber={teethNumber}
								implant={implant}
								position={position === "favoravel" ? "favoravel" : "desfavoravel"}
								selected={selected}
								unionType={unionType}
							/>

							<IonList>
								<IonItem>
									<IonLabel position="floating">Catálogos</IonLabel>
									<IonSelect
										value={catalogue}
										placeholder="Selecione"
										onIonChange={onCatalogChanged}
										cancelText="Cancelar"
									>
										<IonSelectOption value="coneMorse">
											Cone Morse
										</IonSelectOption>
									</IonSelect>
								</IonItem>

								{catalogues.map(
									(item) =>
										item.name === catalogue && (
											<IonItem key={item.id}>
												<IonLabel position="floating">
													Marca do Implante
												</IonLabel>
												<IonSelect
													value={brand}
													placeholder="Selecione"
													onIonChange={onBrandChanged}
													cancelText="Cancelar"
												>
													{item.opcoes.map((item) => (
														<IonSelectOption key={item.id} value={item.brand}>
															{item.brand}
														</IonSelectOption>
													))}
												</IonSelect>
											</IonItem>
										)
								)}

								{catalogues.map(
									(item) =>
										item.name === catalogue &&
										item.opcoes.map(
											(item) =>
												item.brand === brand && (
													<IonItem key={item.id}>
														<IonLabel position="floating">
															Especificação
														</IonLabel>
														<IonSelect
															value={specification}
															placeholder="Selecione"
															onIonChange={onSpecificationChanged}
															cancelText="Cancelar"
														>
															{catalogues.map(
																(item) =>
																	item.name === catalogue &&
																	item.opcoes
																		.filter(
																			(val) => val.brand === brand ?? true
																		)
																		.map((item) =>
																			item.manual.map((item) =>
																				item.specification !== "Undefined" ? (
																					<IonSelectOption
																						key={item.id}
																						value={item.specification}
																					>
																						{item.specification}
																					</IonSelectOption>
																				) : (
																					<IonSelectOption
																						key={item.id}
																						value={item.specification}
																					>
																						Não Possui
																					</IonSelectOption>
																				)
																			)
																		)
															)}
														</IonSelect>
													</IonItem>
												)
										)
								)}

								{catalogues.map(
									(item) =>
										item.name === catalogue &&
										item.opcoes.map(
											(item) =>
												item.brand === brand &&
												item.manual.map(
													(item) =>
														item.specification === specification &&
														catalogues.map(
															(item) =>
																item.name === catalogue &&
																item.opcoes.map(
																	(item) =>
																		item.brand === brand &&
																		item.manual
																			.filter(
																				(val) =>
																					val.specification === specification ??
																					true
																			)
																			.map((item) =>
																				item.implant !== "Undefined" ? (
																					<h2 key={item.id}>
																						<strong>Implante</strong>
																						<span ref={implantRef}>{item.implant}</span>
																					</h2>
																				) : (
																					<h2 key={item.id}>
																						<strong>Implante</strong>
																						Não Possui
																					</h2>
																				)
																			)
																)
														)
												)
										)
								)}

								{catalogues.map(
									(item) =>
										item.name === catalogue &&
										item.opcoes.map(
											(item) =>
												item.brand === brand &&
												item.manual.map(
													(item) =>
														item.specification === specification &&
														catalogues.map(
															(item) =>
																item.name === catalogue &&
																item.opcoes.map(
																	(item) =>
																		item.brand === brand &&
																		item.manual
																			.filter(
																				(val) =>
																					val.specification === specification ??
																					true
																			)
																			.map((item) => (
																				<h2 key={item.id}>
																					<strong>platform</strong>
																					<span ref={platformRef}>{item.platform}</span>
																				</h2>
																			))
																)
														)
												)
										)
								)}

								{catalogue && brand && specification && implant && platform && (
									<>
										<IonItem>
											<IonLabel position="floating">Posição</IonLabel>
											<IonSelect
												value={position}
												onIonChange={onPositionChanged}
												cancelText="Cancelar"
											>
												<IonSelectOption value="favoravel">
													Favorável
												</IonSelectOption>
												<IonSelectOption value="desfavoravel">
													Desfavorável
												</IonSelectOption>
											</IonSelect>
										</IonItem>

										<IonItem>
											<IonLabel position="floating">Seleção</IonLabel>
											<IonSelect
												value={unionType}
												onIonChange={onUnionChanged}
												cancelText="Cancelar"
											>
												<IonSelectOption value="unitario">
													Unitário
												</IonSelectOption>
												<IonSelectOption value="multiplo">
													Múltiplo
												</IonSelectOption>
											</IonSelect>
										</IonItem>
									</>
								)}

								{catalogues.map(
									(item) =>
										item.name === catalogue &&
										item.opcoes.map(
											(item) =>
												item.brand === brand &&
												item.manual.map(
													(item) =>
														item.specification === specification &&
														catalogues.map(
															(item) =>
																item.name === catalogue &&
																item.opcoes.map(
																	(item) =>
																		item.brand === brand &&
																		item.manual
																			.filter(
																				(val) =>
																					val.specification === specification ??
																					true
																			)
																			.map((item) => (
																				<h2 className="family-name" key={item.id} ref={familyRef}>
																					<span>{item.family}</span>
																				</h2>
																			))
																)
														)
												)
										)
								)}
							</IonList>
						</div>

						{!selected ? (
							<IonButton
								className="button-add ion-no-shadow"
								color="dark"
								expand="block"
								size="large"
								shape="round"
								type="button"
								onClick={onSaveEdit}
							>
								<strong>Adicionar</strong>
							</IonButton>
						) : (
							<div className="container__buttons">
								<IonButton
									className="button-save"
									expand="block"
									shape="round"
									color="dark"
									type="button"
									onClick={onSaveEdit}
								>
									Salvar
								</IonButton>
								<IonButton
									className="button-remove"
									expand="block"
									shape="round"
									type="button"
									onClick={onRemove}
								>
									Remover
								</IonButton>
							</div>
						)}
					</div>
				</Modal>
			) : null}
		</>
	);
};

export default Edit;