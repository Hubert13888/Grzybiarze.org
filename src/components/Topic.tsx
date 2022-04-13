import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { TopicContext, UserAuthContext } from "../managers/contexts";
import AddPostRequest from "../ajax/AddPostRequest";
import TopicRequest from "../ajax/TopicRequest";

import "/style/Topic.scss";

const Topic = () => {
  let { id } = useParams();
  const [topic, setTopic] = useContext(TopicContext);
  const [userAuth, setUserAuth] = useContext(UserAuthContext);
  useEffect(() => {
    const fetchData = async () => {
      setTopic(await TopicRequest(id));
    };
    fetchData();
  }, []);
  return (
    <>
      <h2 className="currentTopicName">{topic.title}</h2>
      <p className="currentTopicGoBack">
        <Link to={"/topicList/" + topic.category_id}>Wróć</Link>
      </p>
      <div className="postsList">
        {topic.posts.map((post) => {
          const { author, author_name, date, content } = post;
          var formated_date = new Date(date);
          return (
            <div key={post.id} className="post">
              <div className="postHead">
                <div className="postAuthor">
                  <Link to={"/user/" + author}>{author_name}</Link>
                </div>
                <div className="postDate">{formated_date.toLocaleString()}</div>
              </div>
              <div className="postContent">{content}</div>
            </div>
          );
        })}
      </div>
      <div
        className="addNewPostContainer"
        onSubmit={(e) => {
          e.preventDefault();
          let text = document.getElementById("newPostText").textContent;

          if (text === "") {
            return;
          }

          let res = AddPostRequest(id, text);
          document.getElementById("newPostText").innerHTML = "";
          if (res) {
            //useEffect(() => {
            setTimeout(() => {
              const fetchData = async () => {
                setTopic(await TopicRequest(id));
              };
              fetchData();
            }, 1000);
            //}, []);
          } else {
          }
        }}
      >
        {userAuth.loggedIn === "true" && (
          <form>
            <p
              id="newPostText"
              className="newPostText"
              contentEditable="true"
              placeholder="Treść posta"
            ></p>
            <button>Wyślij</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Topic;
