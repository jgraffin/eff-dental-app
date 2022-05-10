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
import List from "./components/List";
import Cart from "./features/cart/Cart";
import Products from "./features/products/Products";

setupIonicReact();

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
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Redirect to="/" />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
