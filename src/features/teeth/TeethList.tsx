import { IonContent, IonSpinner } from "@ionic/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";

import { fetchPosts, selectAllItems, TeethType } from "../teeth/teethSlice";

const Tooth = ({ post }: TeethType | any) => {
  return (
    <li className="tooth-list__item" key={post.id}>
      <Link
        to={{
          pathname: `/edit/${post.id}`,
        }}
      >
        {post.toothNumber}
      </Link>
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
    <>
      {postStatus !== "loading" ? (
        <IonContent>
          <ul className="tooth-list">{content}</ul>
        </IonContent>
      ) : (
        <IonSpinner className="loading" name="crescent" color="primary" />
      )}
    </>
  );
};
