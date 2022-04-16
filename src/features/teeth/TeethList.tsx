import {
  IonButton,
  IonContent,
  IonFooter,
  IonRippleEffect,
  IonSpinner,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { NextButton } from "../../styles/App";

import {
  fetchPosts,
  itemUpdated,
  selectAllItems,
  TeethType,
} from "../teeth/teethSlice";

import { List, Wrapper } from "./Styles";

const Tooth = ({ post }: TeethType | any) => {
  return (
    <li
      className={`tooth-list__item tooth-list__item--${post.toothNumber} ${
        post.isSelected ? "is-selected" : ""
      } ${post.unionImplant ? "has-union" : ""} 
        ${post.position ? "unfavorable" : ""}
        ${post.implant !== "Undefined" ? "has-implant" : ""}`}
      key={post.id}
    >
      <Link
        className={`ion-activatable ripple-parent `}
        to={{
          pathname: `/edit/${post.id}`,
          state: { from: post.implant },
        }}
      >
        <span>{post.toothNumber}</span>
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

  const onRemoveAll = () => {
    posts.filter(
      (item: any) =>
        item.isSelected &&
        dispatch(
          itemUpdated({
            id: item.id,
            catalog: "",
            brand: "",
            specification: "",
            toothNumber: item.toothNumber,
            implant: "Undefined",
            smp: "",
            platform: "",
            unionImplant: false,
            position: false,
            isSelected: !item.isSelected,
          })
        )
    );
  };

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }

    const filterTeethNumberTopRange = posts.filter(
      (tooth: { id: number }) => tooth.id >= 1 && tooth.id <= 16
    );

    const hasUnionImplantTopLine = filterTeethNumberTopRange.filter(
      (union: { unionImplant: { unionImplant: boolean } }) =>
        union.unionImplant ?? union
    );

    const filterTeethNumberBottomRange = posts.filter(
      (tooth: { id: number }) => tooth.id >= 17
    );

    const hasUnionImplantBottomLine = filterTeethNumberBottomRange.filter(
      (union: { unionImplant: { unionImplant: boolean } }) =>
        union.unionImplant ?? union
    );

    const itemSelected = posts.filter(
      (item: { isSelected: boolean }) => item.isSelected
    );

    if (itemSelected.length > 0) {
      setSelection(true);
    }

    if (hasUnionImplantTopLine.length > 1) {
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
      posts.map((post: any) => <Tooth key={post.id} post={post} />);
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
      <IonContent>
        <Wrapper>
          <IonButton
            className="button-remove"
            expand="block"
            shape="round"
            type="button"
            onClick={onRemoveAll}
          >
            Remover todas as marcações
          </IonButton>
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
        <NextButton className={`${selection ? "" : "disabled"}`}>
          <Link
            className={`ion-activatable ripple-parent `}
            to={{
              pathname: `/list`,
            }}
          >
            PROSSEGUIR
          </Link>
        </NextButton>
      </IonFooter>
    </>
  );
};
