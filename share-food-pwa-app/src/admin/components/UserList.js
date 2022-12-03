import { List, Datagrid, TextField, EmailField } from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="_id" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address" />
      <TextField source="phone" />
    </Datagrid>
  </List>
);
