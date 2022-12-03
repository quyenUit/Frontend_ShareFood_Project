import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="_id" />
        <TextField source="name" />
        <TextField source="type" />
        <TextField source="mail" />
        <TextField source="amount" />
        <DateField source="timeStart" />
        <DateField source="timeEnd" />
      </Datagrid>
    </List>
  );
};

export default PostList;
