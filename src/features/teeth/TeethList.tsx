import { IonContent, IonRippleEffect, IonSpinner } from "@ionic/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";

import { fetchPosts, selectAllItems, TeethType } from "../teeth/teethSlice";

import { List } from "./Styles";

const Tooth = ({ post }: TeethType | any) => {
  return (
    <li
      className={`ion-activatable ripple-parent tooth-list__item tooth-list__item--${post.toothNumber}`}
      key={post.id}
    >
      <Link
        to={{
          pathname: `/edit/${post.id}`,
        }}
      >
        {post.toothNumber}
      </Link>
      <IonRippleEffect color="dark"></IonRippleEffect>
    </li>
  );
};

export const TeethList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllItems);
  const postStatus = useSelector((state: RootState) => state.teeth.status);
  const error = useSelector((state: RootState) => state.teeth.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

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
      <List>
        <ul className="tooth-list">{content}</ul>
      </List>
    </IonContent>
  );
};
