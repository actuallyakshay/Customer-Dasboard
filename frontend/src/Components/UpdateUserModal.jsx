import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  VStack,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getUser } from "../Redux/Users/users.actions";

export default function UpdateUser({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [updatedForm, setForm] = useState({
    updatedname: "",
    updatedemail: "",
    updatedage: "",
    updatedgender: "",
    updatedcity: "",
  });

  const handleChange = (e) => {
    setForm({ ...updatedForm, [e.target.name]: e.target.value });
  };

  const handleupdate = (id, form) => {
    axios.patch(`http://localhost:8080/user/${id}`, form).then((res) => {
      alert(`user with this id ${id} updated Successfully`);
      dispatch(getUser());
    });
  };

  return (
    <>
      <Button ml="-4" leftIcon={<AiFillEdit />} onClick={onOpen}>
        update user
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Input
                value={updatedForm.updatedname}
                onChange={(e) => handleChange(e)}
                name="updatedname"
                type="text"
                placeholder="Enter name"
              />
              <Input
                name="updatedemail"
                type="email"
                placeholder="Enter email"
                onChange={(e) => handleChange(e)}
              />
              <Input
                value={updatedForm.updatedage}
                name="updatedage"
                type="number"
                placeholder="Enter age"
                onChange={(e) => handleChange(e)}
              />
              <Input
                value={updatedForm.updatedcity}
                name="updatedcity"
                type="text"
                placeholder="Enter city"
                onChange={(e) => handleChange(e)}
              />
              <Select
                onChange={(e) => handleChange(e)}
                value={updatedForm.updatedgender}
                placeholder="Select Gender"
                name="updatedgender"
              >
                <option
                  onChange={(e) => handleChange(e)}
                  name="updatedgender"
                  value="Male"
                >
                  Male
                </option>
                <option
                  onChange={(e) => handleChange(e)}
                  name="updatedgender"
                  value="Female"
                >
                  Female
                </option>
                <option
                  onChange={(e) => handleChange(e)}
                  name="updatedgender"
                  value="Others"
                >
                  Others
                </option>
              </Select>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => handleupdate(id, updatedForm)}
              colorScheme="blue"
              w="full"
            >
              Update user
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
