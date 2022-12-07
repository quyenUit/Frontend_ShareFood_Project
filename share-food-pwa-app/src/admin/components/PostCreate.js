import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  TimeInput,
  NumberInput,
} from "react-admin";

const PostCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput source="Tên món ăn" />
        <SelectInput source="Loại thực phẩm" />
        <TimeInput source="Thời gian cho" />
        <NumberInput source="Số lượng cho" />
        <TextInput multiline source="Ghi chú" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
