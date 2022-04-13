import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { TopicListContext, UserAuthContext } from "../managers/contexts";
import classNames from "classnames";
import AddTopicRequest from "../ajax/AddTopicRequest";
import TopicListRequest from "../ajax/TopicListRequest";

import "/style/TopicList.scss";

const TopicList = () => {
  let { categoryId } = useParams();
  const [topics, setTopics] = useContext(TopicListContext);
  const [showMenu, setShowMenu] = useState(false);
  const [userAuth, setUserAuth] = useContext(UserAuthContext);
  useEffect(() => {
    const fetchData = async () => {
      setTopics(await TopicListRequest(categoryId));
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>{topics.category_name}</h1>
      <div className="topicList">
        {topics.map((post) => {
          const { id, title, author_id, author_name, date } = post;
          var formated_date = new Date(date);
          return (
            <>
              <div className="topic">
                <div className="topicName">
                  <Link to={"/topic/" + id}>{title}</Link>
                </div>
                <div className="topicDate">
                  {formated_date.toLocaleString()}
                </div>
                <div className="topicAuthor">
                  <Link to={"/user/" + author_id}>{author_name}</Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {userAuth.loggedIn === "true" && (
        <>
          <button
            className="showAddMenu"
            onClick={(e) => {
              e.preventDefault();
              setShowMenu(!showMenu);
            }}
          >
            {showMenu ? "-" : "+"}
          </button>
          <div
            className={classNames({
              addTopicMenu: true,
              showMenu
            })}
          >
            <h1>Dodaj nowy temat</h1>
            <div
              className="topiclistForm"
              onSubmit={(e) => {
                e.preventDefault();
                let name = document.getElementById("newTopicName").value;
                let text = document.getElementById("newTopicContent")
                  .textContent;

                if (name === "") {
                  return;
                }
                if (text === "") {
                  return;
                }

                let res = AddTopicRequest(categoryId, name, text);
                document.getElementById("newTopicName").value = "";
                document.getElementById("newTopicContent").innerHTML = "";
                if (res) {
                  //const fetchData = async () => {
                  //setTopics(await TopicListRequest(categoryId));
                  //};
                  //fetchData();
                  //useEffect(() => {
                  setShowMenu(false);
                  setTimeout(() => {
                    const fetchData = async () => {
                      setTopics(await TopicListRequest(categoryId));
                    };
                    fetchData();
                  }, 1000);
                  //}, []);
                } else {
                }
              }}
            >
              <form>
                <p>Nazwa tematu</p>
                <input
                  id="newTopicName"
                  className="topicListName"
                  type="text"
                />
                <p>Treść</p>
                <div
                  id="newTopicContent"
                  className="topicListDesc"
                  contentEditable
                ></div>
                <button>Dodaj nowy temat</button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TopicList;
