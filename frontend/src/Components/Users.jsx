import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";
import { deleteAction, getUser } from "../Redux/Users/users.actions";
import TableBody from "./TableBody";
import axios from "axios";
import { useState } from "react";

function Users() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state?.user?.data);
  console.log({ data });

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8080/user/${_id}`).then((res) => {
      alert(`User Deleted Successfully`);
      dispatch(getUser());
    });
  };

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>All User details</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Age</Th>
              <Th>Country</Th>
              <Th>Gender</Th>
              <Th>Update User</Th>
              <Th>Delete User</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((elem) => {
              return (
                <TableBody
                  handleDelete={handleDelete}
                  key={elem?._id}
                  {...elem}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Users;
