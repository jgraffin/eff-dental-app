import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonFooter,
} from "@ionic/react";
import { sparkles } from 'ionicons/icons';

import { LogoWrapper } from "../products/Styles";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Succeeded: React.FC = () => {
  return (
	<IonPage>
	  <IonHeader className="ion-no-border home-header">
		<IonToolbar>
		  <LogoWrapper>
			<img src={Logo} alt="Eff Dental" />
		  </LogoWrapper>
		</IonToolbar>
	  </IonHeader>
	  <IonContent>
		<IonCard className="ion-margin" color="primary">
		  <IonCardHeader>
			<IonCardTitle>
				<IonIcon className="succeeded-icon" icon={sparkles} color="light"></IonIcon>
				<h1 className="succeeded-title">Pedido Enviado!</h1>
			</IonCardTitle>
		  </IonCardHeader>

		  <IonCardContent>
			<h2>Seu pedido foi enviado com sucesso!</h2>
			<p>Por favor, aguarde que logo entraremos em contato.</p>
		  </IonCardContent>
		</IonCard>
		</IonContent>
		<IonFooter className="ion-no-border">
			<Link
				className="button-goback"
				to={{
					pathname: `/`,
				}}
			>
				Voltar para home
			</Link>
	  	</IonFooter>
	</IonPage>
  );
};

export default Succeeded;
