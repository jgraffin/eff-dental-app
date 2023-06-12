import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  IonContent,
  IonFooter,
  IonHeader,
  IonRippleEffect,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { fetchPosts, selectAllItems, TeethType } from "../teeth/teethSlice";
import { List, NextButton } from "../../styles/App";
import { LogoWrapper } from "../products/Styles";
import { RootState } from "../../app/store";
import { Wrapper } from "./Styles";
import Logo from "../../images/logo.png";

export const Tooth = ({ post }: TeethType | any) => {
  return (
    <li
      className={`tooth-list__item tooth-list__item--${post?.teethNumber} 
				${post?.selected ? "is-selected" : ""} 
				${post?.unionType === "unitario" ? "unitario" : "multiplo"} 
				${post?.position === "favoravel" ? "favoravel" : "desfavoravel"}
				${post?.selected && post?.implant ? "has-implant" : ""}`}
      key={post?.id}
    >
      <Link
        className={`ion-activatable ripple-parent `}
        to={{
          pathname: `/edit/${post?.id}`,
        }}
      >
        <span>{post?.teethNumber}</span>
        <IonRippleEffect color="dark" type="bounded"></IonRippleEffect>
      </Link>
    </li>
  );
};

export const TeethList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllItems);
  const postStatus = useSelector((state: RootState) => state.teeth.status);
  const error = useSelector((state: RootState) => state.teeth.error);

  const [hasUnionTopLine, setHasUnionTopLine] = useState(false);
  const [hasUnionBottomLine, setHasUnionBottomLine] = useState(false);
  const [selection, setSelection] = useState(false);
  const [itemSelectedList, setItemSelectedList] = useState(true);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }

    const filterTeethNumberTopRange = posts.filter(
      (val: { id: number }) => val.id >= 0 && val.id <= 16
    );

    const hasUnionImplantTopLine = filterTeethNumberTopRange.filter(
      (val: TeethType) => val.unionType ?? val
    );

    const hasMultiple = hasUnionImplantTopLine.filter(
      (item: TeethType) => item.unionType === "multiplo"
    );

    const filterTeethNumberBottomRange = posts.filter(
      (val: { id: number }) => val.id >= 17
    );

    const hasUnionImplantBottomLine = filterTeethNumberBottomRange.filter(
      (item: TeethType) => item.unionType === "multiplo"
    );

    const itemSelected = posts.filter((val: TeethType) => val.selected);

    let itemSelectedLength = itemSelected.length > 0;

    setItemSelectedList(itemSelectedLength);

    if (itemSelected.length > 0) {
      setSelection(true);
    }

    if (hasMultiple.length > 1) {
      setHasUnionTopLine(true);
    } else {
      setHasUnionTopLine(false);
    }

    if (hasUnionImplantBottomLine.length > 1) {
      setHasUnionBottomLine(true);
    } else {
      setHasUnionBottomLine(false);
    }
  }, [postStatus, dispatch, posts]);

  let content;

  if (postStatus === "loading") {
    <IonSpinner className="loading" name="crescent" color="primary" />;
  } else if (postStatus === "succeeded") {
    content =
      posts.length &&
      posts.map((post: TeethType) => <Tooth key={post?.id} post={post} />);
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
      <IonHeader className="ion-no-border home-header">
        <IonToolbar>
          <LogoWrapper>
            <img src={Logo} alt="Eff Dental" />
          </LogoWrapper>
        </IonToolbar>
        <IonToolbar>
          <IonTitle>
            Marque abaixo a região
            <br />
            do implante
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <Wrapper>
          <List
            className={`${hasUnionTopLine ? "has-union-top-items" : ""} ${
              hasUnionBottomLine ? "has-union-bottom-items" : ""
            }`}
          >
            <ul className="tooth-list">{content}</ul>
          </List>
        </Wrapper>
      </IonContent>
      <IonFooter className="ion-no-border">
        <NextButton
          className={`${selection && itemSelectedList ? "" : "disabled"}`}
        >
          <Link
            className={`ion-activatable ripple-parent `}
            to={{
              pathname: `/products`,
            }}
          >
            CONTINUAR
          </Link>
        </NextButton>
      </IonFooter>
    </>
  );
};
