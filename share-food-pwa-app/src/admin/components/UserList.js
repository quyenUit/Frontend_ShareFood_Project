import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="_id" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address" />
      <TextField source="phone" />
    </Datagrid>
  </List>
);
