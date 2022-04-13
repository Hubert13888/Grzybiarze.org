import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserRequest from "../ajax/UserRequest";
import { useParams } from "react-router-dom";
import Moment from "react-moment";

import "/style/Profile.scss";

const Profile = () => {
  const [loaded, setLoaded] = useState("loading");
  const [userProfile, setUserProfile] = useState({
    id: 0,
    username: "",
    posts: [
      {
        id: 0,
        author: 0,
        author_name: 0,
        parent_post: 0,
        parent_post_name: "",
        date: "",
        content: ""
      }
    ],
    last_login: ""
  });
  let { id } = useParams();
  const fetchData = async () => {
    const userData = await UserRequest(id);
    if (userData) {
      setLoaded("true");
      setUserProfile(userData);
    } else {
      setLoaded("false");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  switch (loaded) {
    case "loading":
      return (
        <>
          <h1>Ładowanie danych</h1>
        </>
      );
    case "false":
      return (
        <>
          <h1>Nie można załadować danych (Błąd serwera)</h1>
        </>
      );
    case "true":
      return (
        <>
          <div className="profileBlock">
            <div className="personalsBlock">
              <div className="firstColumn">
                <div
                  className="avatar"
                  style={{
                    backgroundImage: `url("/assets/pictures/0c3b3adb1a7530892e55ef36d3be6cb8.png")`
                  }}
                ></div>
                <div className="username">{userProfile.username}</div>
                <p className="last_login">
                  Ostatnie logowanie:{" "}
                  {userProfile.last_login ? (
                    <Moment format="DD.MM.yyyyr. hh:mm:ss">
                      {userProfile.last_login}
                    </Moment>
                  ) : (
                    "nigdy"
                  )}
                </p>
              </div>

              {/* <div className="secondColumn">
                <div className="personalInfo">
                  <h1>O mnie</h1>
                  <p>
                    Założyciel i dyrektor rozgłośni radiowej Radio Maryja oraz
                    Telewizji Trwam, współzałożyciel i prezes zarządu Fundacji
                    Lux Veritatis oraz założyciel i były rektor Wyższej Szkoły
                    Kultury Społecznej i Medialnej w Toruniu, w której jest
                    przewodniczącym Rady Naukowej i wykładowcą
                  </p>
                </div>
                <div className="accountInfo">
                  <h1>Informacje o koncie</h1>
                  <ul>
                    <li>
                      <b>Wiek:</b> 75
                    </li>
                    <li>
                      <b>Płeć:</b> Mężczyzna
                    </li>
                    <li>
                      <b>Ulubiony grzyb:</b> Borowik szatański
                    </li>
                    <li>
                      <b>Data dołączenia:</b> 12 marca 2021
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="postsBlock">
              <div className="h1_wrapper">
                <h1>Ostatnie posty</h1>
              </div>
              {userProfile.posts.map((post) => {
                return (
                  <>
                    <div className="lastPostsList">
                      <div className="lastPost">
                        <div className="postHead">
                          <div className="postLink">
                            <Link to={`/topic/${post.parent_post}`}>
                              {post.parent_post_name}
                            </Link>
                          </div>
                          <div className="postDate">
                            <Moment format="DD.MM.yyyy hh:mm">
                              {post.date}
                            </Moment>
                          </div>
                        </div>
                        <div className="postContent">{post.content}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      );
  }
};

export default Profile;
