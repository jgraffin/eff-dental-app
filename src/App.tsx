/* eslint-disable no-restricted-globals */
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonSpinner, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { TeethList } from "./features/teeth/TeethList";
import Edit from "./components/Edit";

setupIonicReact();

// const List = () => {
//   let history = useHistory();
//   const dispatch = useDispatch();
//   const data = useSelector(selectAllItems);
//   const postStatus = useSelector((state: RootState) => state.teeth.status);
//   const error = useSelector((state: RootState) => state.teeth.error);

//   const [content, setContent] = useState<any>(null);
//   const [newSmp, setNewSmp] = useState("");

//   const [size, setSize] = useState<any>("");
//   const [quantity, setQuantity] = useState<any>("");

//   const onSizeChanged = (name: any, current: any) => {
//     console.log("onSizeChanged", name);
//     console.log("current", current);
//   };

//   const onQuantityChanged = (event: CustomEvent<InputChangeEventDetail>) => {
//     const field = event.target as HTMLInputElement;
//     setQuantity(field.value);
//     console.log(field.value);
//   };

//   // const onToothSelectComponents = (currentSmp: any) => {
//   //   console.log("onToothSelectComponents", currentSmp);

//   //   let content = SistemaMultiplataforma
//   //     .filter((item: any) => {
//   //       if (item.smp === currentSmp) {
//   //         return true;
//   //       }
//   //       return false;
//   //     })
//   //     .map((item: any) =>
//   //       item.components.map((item: any) => (
//   //         <div className="component-content__container" key={item.name}>
//   //           <h2>{item.name}</h2>
//   //           <img
//   //             src={`./assets/images/prosthesis/${item.image}.png`}
//   //             alt=""
//   //             width="40px"
//   //           />
//   //           <p>
//   //             <strong>{item.mode}</strong>
//   //           </p>
//   //           <p>{item.legend}</p>
//   //           <IonItem key={item.name}>
//   //             <IonSelect
//   //               value={size}
//   //               placeholder="Selecione"
//   //               onIonChange={() => onSizeChanged(item.name, item.target)}
//   //             >
//   //               <IonLabel position="floating">Tamanho</IonLabel>
//   //               {item.sizes.map((size: any) => (
//   //                 <IonSelectOption key={size.value} value={size.value}>
//   //                   {size.value}
//   //                 </IonSelectOption>
//   //               ))}
//   //             </IonSelect>
//   //           </IonItem>
//   //           <IonItem>
//   //             <IonLabel position="floating">Quantidade</IonLabel>
//   //             <IonInput
//   //               type="number"
//   //               onIonChange={onQuantityChanged}
//   //             ></IonInput>
//   //           </IonItem>
//   //         </div>
//   //       ))
//   //     );

//   //   setNewSmp(currentSmp);
//   //   setContent(content);
//   // };

//   useEffect(() => {
//     if (postStatus === "idle") {
//       dispatch(fetchPosts());
//     }
//   }, [postStatus, dispatch]);

//   return (
//     <IonContent>
//       <IonButton onClick={history.goBack}>VOLTAR</IonButton>
//       <WrapperComponents>
//         {postStatus === "loading" && (
//           <IonSpinner className="loading" name="crescent" color="primary" />
//         )}

//         <IonGrid>
//           <IonRow className="table-head">
//             <IonCol className="ion-no-padding" size="1">
//               Nº Dente
//             </IonCol>
//             <IonCol className="ion-no-padding" size="2">
//               Família
//             </IonCol>
//             <IonCol className="ion-no-padding">&nbsp;</IonCol>
//           </IonRow>
//           {postStatus === "succeeded" &&
//             data.map(
//               (item: any) =>
//                 item.isSelected && (
//                   <>
//                     <IonRow className="table-row" key={item.id}>
//                       <IonCol className="ion-no-padding" size="1">
//                         {item.toothNumber}
//                       </IonCol>
//                       <IonCol className="ion-no-padding" size="2">
//                         {item.smp}
//                       </IonCol>
//                       <IonCol className="ion-no-padding">
//                         <IonButton
//                           onClick={() => onToothSelectComponents(item.smp)}
//                         >
//                           Selecionar
//                         </IonButton>
//                       </IonCol>
//                     </IonRow>
//                     <IonRow className="table-row">
//                       <IonCol className="ion-no-padding">
//                         <div className="component-content">
//                           {item.smp === newSmp && content}
//                         </div>
//                       </IonCol>
//                     </IonRow>
//                   </>
//                 )
//             )}
//         </IonGrid>

//         {postStatus === "error" && error}
//       </WrapperComponents>
//     </IonContent>
//   );
// };

const App: React.FC = () => {
  const postStatus = useSelector((state: RootState) => state.teeth.status);

  return (
    <IonApp>
      <IonReactRouter>
        <>
          {postStatus !== "loading" ? (
            <Route exact path="/" component={TeethList} />
          ) : (
            <IonSpinner className="loading" name="crescent" color="primary" />
          )}
        </>
        <Route exact path="/edit/:id" component={Edit} />
        {/* <Route exact path="/list" component={List} /> */}
        <Redirect to="/" />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
