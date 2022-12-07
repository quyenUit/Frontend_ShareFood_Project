import * as React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import { UserList } from "./components/UserList";

// change the URL to your Strapi API
const dataProvider = restProvider("http://localhost:3001");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="post" list={PostList} create={PostCreate} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
