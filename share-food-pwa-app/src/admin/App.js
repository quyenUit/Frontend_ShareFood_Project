import * as React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostList from "./components/PostList";

// change the URL to your Strapi API
const dataProvider = restProvider("http://localhost:3001");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="post" list={PostList} />
  </Admin>
);

export default App;
