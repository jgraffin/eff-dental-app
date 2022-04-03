import { IonContent, IonRippleEffect, IonSpinner } from "@ionic/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";

import { fetchPosts, selectAllItems, TeethType } from "../teeth/teethSlice";

import { List, Wrapper } from "./Styles";

const Tooth = ({ post }: TeethType | any) => {
  return (
    <li
      className={`tooth-list__item tooth-list__item--${post.toothNumber} ${
        post.isSelected ? "is-selected" : ""
      } ${post.unionImplant ? "has-union" : ""}`}
      key={post.id}
    >
      <Link
        className={`ion-activatable ripple-parent `}
        to={{
          pathname: `/edit/${post.id}`,
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

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }

    const hasUnionImplantTopLine = posts.filter(
      (union: { unionImplant: { unionImplant: boolean } }) =>
        union.unionImplant ?? union
    );

    const filterTeethNumberRange = posts.filter(
      (tooth: { toothNumber: number }) => tooth.toothNumber >= 17
    );

    const hasUnionImplantBottomLine = filterTeethNumberRange.filter(
      (union: { unionImplant: { unionImplant: boolean } }) =>
        union.unionImplant ?? union
    );

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
  );
};
