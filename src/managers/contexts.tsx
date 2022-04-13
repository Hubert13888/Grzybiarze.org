import { createContext } from "react";

const UserAuthContext = createContext([
  {
    loggedIn: "load"
  },
  (state: any) => {}
]);

const TopicListContext = createContext([{}, (state: any) => {}]);

const TopicContext = createContext([{}, (state: any) => {}]);

const Last10PostsContext = createContext([{}, (state: any) => {}]);

const CategoryListContext = createContext([
  {
    forum: [
      {
        categoryId: 1,
        categoryName: "Regulamin",
        description:
          "Wszystkie tematy odnośnie regulaminu, proponowane zmiany i wyjaśnienia.",
        lastPostDate: "21.03.2020"
      },
      {
        categoryId: 2,
        categoryName: "Administracja",
        description:
          "Wszystko odnośnie administracji i moderacji, wszelkie zażalenia kierować tutaj.",
        lastPostDate: "13.04.2021"
      },
      {
        categoryId: 3,
        categoryName: "O forum",
        description: "Metadyskusja na temat forum, co zmienić, co dodać.",
        lastPostDate: "26.12.2020"
      }
    ],
    grzybiarstwo: [
      {
        categoryId: 4,
        categoryName: "Miejsca na grzybobranie",
        description: "Wszystko o tym gdzie warto pójść na grzybobranie.",
        lastPostDate: "26.12.2020"
      },
      {
        categoryId: 5,
        categoryName: "Grzyby",
        description: "Chcesz się pochwalić swoim grzybem? Napisz tutaj.",
        lastPostDate: "02.02.2021"
      }
    ],
    offtop: [
      {
        categoryId: 6,
        categoryName: "O życiu",
        description:
          "Rozmowy o różnych rzeczach, niekoniecznie o grzybiarstwie.",
        lastPostDate: "02.02.2021"
      },
      {
        categoryId: 7,
        categoryName: "Forumowe zabawy",
        description: "Zabawy na forum.",
        lastPostDate: "02.02.2021"
      }
    ]
  },
  (state: any) => {}
]);

export {
  UserAuthContext,
  TopicListContext,
  TopicContext,
  Last10PostsContext,
  CategoryListContext
};
