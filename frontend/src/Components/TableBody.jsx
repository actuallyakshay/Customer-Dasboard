import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { MdDelete } from "react-icons/md";
import UpdateUser from "./UpdateUserModal";

function TableBody({ name, email, _id, age, gender, city, handleDelete }) {
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{age}</Td>
      <Td>{gender}</Td>
      <Td>{city}</Td>
      <Td>
        <Button>
          <UpdateUser id={_id} />
        </Button>
      </Td>
      <Td>
        <Button onClick={() => handleDelete(_id)}>
          {" "}
          <MdDelete fontSize={"20px"} />
        </Button>
      </Td>
    </Tr>
  );
}

export default TableBody;
