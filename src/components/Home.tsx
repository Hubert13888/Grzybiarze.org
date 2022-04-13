import React, { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  UserAuthContext,
  CategoryListContext,
  Last10PostsContext
} from "../managers/contexts";
import "/style/Home.scss";

const Home = () => {
  const [userAuth, setUserAuth] = useContext(UserAuthContext);
  const [categoryList, setCategoryList] = useContext(CategoryListContext);
  const [last10Posts, setLast10Posts] = useContext(Last10PostsContext);
  return (
    <>
      <div className="home">
        <div className="title_art">
          <div className="title_art_text">
            <h1>Grzybiarze.org</h1>
            <p>
              Jesteśmy społecznością skupiającą osoby będące entuzjastami
              grzybiarstwa w internecie. Naszą jest łączenie Polskich Grzybiarzy
              oraz szerzenie hobby jakim jest grzybiarstwo. Możesz dołączyć bez
              względu na to czy grzybiarstwo dla ciebie to źródło zarobku czy
              zajęcie rekreacyjne.
            </p>
          </div>
        </div>
        <div className="home_content">
          <div className="content_info">
            <div className="posts">
              <h1>
                <span>Najnowsze wpisy</span>
              </h1>
              {last10Posts.map((post) => {
                const {
                  parent_post,
                  parent_post_name,
                  author,
                  author_name,
                  date,
                  content
                } = post;
                var formated_date = new Date(date);
                return (
                  <>
                    <div className="post">
                      <h2 className="post_title">
                        <Link to={"/topic/" + parent_post}>
                          {parent_post_name}
                        </Link>
                      </h2>
                      <p className="post_text">{content}</p>
                      <h4 className="post_title">
                        <Link to={"/user/" + author}>{author_name}</Link>
                      </h4>
                    </div>
                  </>
                );
              })}
              {/*<div className="post">
                <h2 className="post_title">Lorem Ipsum</h2>
                <p className="post_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam distinctio omnis quae veritatis dolorum aut! Est
                  possimus cum, molestiae ab reprehenderit fuga rem, esse
                  exercitationem enim reiciendis repellat voluptatum quas!
                  Reiciendis porro magnam et molestias sed. Error, delectus.
                  Hic, iste a? Id, aut sit optio nesciunt ullam itaque facere
                  deserunt assumenda eveniet dolore eos
                </p>
              </div>
              <div className="post">
                <h2 className="post_title">Dolor Sit</h2>
                <p className="post_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam distinctio omnis quae veritatis dolorum aut! Est
                  possimus cum, molestiae ab reprehenderit fuga rem, esse
                  exercitationem enim reiciendis repellat voluptatum quas!
                  Reiciendis porro magnam et molestias sed. Error, delectus.
                  Hic, iste a? Id, aut sit optio nesciunt ullam itaque facere
                  deserunt assumenda eveniet dolore eos
                </p>
              </div>
              <div className="post">
                <h2 className="post_title">Amet consectetur</h2>
                <p className="post_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam distinctio omnis quae veritatis dolorum aut! Est
                  possimus cum, molestiae ab reprehenderit fuga rem, esse
                  exercitationem enim reiciendis repellat voluptatum quas!
                  Reiciendis porro magnam et molestias sed. Error, delectus.
                  Hic, iste a? Id, aut sit optio nesciunt ullam itaque facere
                  deserunt assumenda eveniet dolore eos
                </p>
              </div>*/}
              {/* <button>Więcej wpisów</button> */}
            </div>
            <div className="categories">
              <div className="circled_info_part odd" id="infopart1">
                <div className="content_circle"></div>
                <h1>Forum</h1>
                <div className="subcategories">
                  {categoryList.forum.map((subcategory) => {
                    const {
                      id,
                      category_name,
                      description,
                      last_post_date
                    } = subcategory;
                    var formated_date = "";
                    if (last_post_date != null) {
                      formated_date = new Date(last_post_date).toLocaleString();
                    }
                    return (
                      <div className="subcategory">
                        <div className="name">
                          <Link to={"/topicList/" + id}>{category_name}</Link>
                        </div>
                        <div className="description">{description}</div>
                        <div className="lastPost">{formated_date}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="circled_info_part even" id="infopart2">
                <div className="content_circle"></div>
                <h1>Grzybiarstwo</h1>
                <div className="subcategories">
                  {categoryList.grzybiarstwo.map((subcategory) => {
                    const {
                      id,
                      category_name,
                      description,
                      last_post_date
                    } = subcategory;
                    var formated_date = "";
                    if (last_post_date != null) {
                      formated_date = new Date(last_post_date).toLocaleString();
                    }
                    return (
                      <div className="subcategory">
                        <div className="name">
                          <Link to={"/topicList/" + id}>{category_name}</Link>
                        </div>
                        <div className="description">{description}</div>
                        <div className="lastPost">{formated_date}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="circled_info_part odd" id="infopart3">
                <div className="content_circle"></div>
                <h1>Offtop</h1>
                <div className="subcategories">
                  {categoryList.offtop.map((subcategory) => {
                    const {
                      id,
                      category_name,
                      description,
                      last_post_date
                    } = subcategory;
                    var formated_date = "";
                    if (last_post_date != null) {
                      formated_date = new Date(last_post_date).toLocaleString();
                    }
                    return (
                      <div className="subcategory">
                        <div className="name">
                          <Link to={"/topicList/" + id}>{category_name}</Link>
                        </div>
                        <div className="description">{description}</div>
                        <div className="lastPost">{formated_date}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
