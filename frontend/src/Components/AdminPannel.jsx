import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  PinInput,
  PinInputField,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsShieldLockFill } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import axios from "axios";

function AdminPannel() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
    gender: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = (form) => {
    axios.post(`http://localhost:8080/user`, form).then((res) => {
      if (res.data === "This user already exit in the database") {
        alert(`This user already exit in the database`);
      } else {
        alert("User Created Successfully");
      }
    });
  };

  return (
    <Box position={"realtive"}>
      <Box position={"absolute"} w="fit-content" opacity={0.3} zIndex={-1}>
        <Image
          m="auto"
          src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
          w="100%"
        />
      </Box>
      <Grid
        w="80%"
        m="auto"
        position="relative"
        gridTemplateColumns={"repeat(2,1fr)"}
      >
        <Flex h="full" display={["none", "none", "flex", "flex"]}>
          <Image
            src="https://i.ibb.co/NsqbWyn/undraw-step-to-the-sun-nxqq.png"
            w="70%"
            m="auto"
            alignContent={"end"}
            opacity=".96"
          />
        </Flex>
        <VStack alignItems="flex-start">
          <Flex
            flexDirection={"column"}
            w={["95%", "75%", "75%", "65%"]}
            gap="3"
            mx="auto"
            mt="10"
          >
            <FormControl isRequired>
              <FormLabel mb="0">Name</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  value={form.name}
                  onChange={(e) => handleChange(e)}
                  fontWeight={"600"}
                  letterSpacing="1px"
                  type="text"
                  outline="none"
                  flex="1"
                  border={"none"}
                  borderBottom={"1px solid #ff3e6c"}
                  w="full"
                  borderRadius={0}
                  focusBorderColor="none"
                  placeholder="Enter your name"
                  _hover={{ borderBottom: "1px solid #ff3e6c" }}
                  _placeholder={{
                    opacity: 0.4,
                    color: "gray",
                    letterSpacing: "0",
                    fontWeight: "400",
                  }}
                  onFocus={{ border: "0", borderBottom: "1px solid #ff3e6c" }}
                  name="name"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel mb="0">Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  value={form.email}
                  onChange={(e) => handleChange(e)}
                  fontWeight={"600"}
                  letterSpacing="1px"
                  type="email"
                  outline="none"
                  flex="1"
                  border={"none"}
                  borderBottom={"1px solid #ff3e6c"}
                  w="full"
                  borderRadius={0}
                  focusBorderColor="none"
                  placeholder="your-email@example.com"
                  _hover={{ borderBottom: "1px solid #ff3e6c" }}
                  _placeholder={{
                    opacity: 0.4,
                    color: "gray",
                    letterSpacing: "0",
                    fontWeight: "400",
                  }}
                  onFocus={{ border: "0", borderBottom: "1px solid #ff3e6c" }}
                  name="email"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel mb="0">Age</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  value={form.age}
                  onChange={(e) => handleChange(e)}
                  fontWeight={"600"}
                  letterSpacing="1px"
                  type="number"
                  outline="none"
                  flex="1"
                  border={"none"}
                  borderBottom={"1px solid #ff3e6c"}
                  w="full"
                  borderRadius={0}
                  focusBorderColor="none"
                  placeholder="Enter Age here (15 to 60)"
                  _hover={{ borderBottom: "1px solid #ff3e6c" }}
                  _placeholder={{
                    opacity: 0.4,
                    color: "gray",
                    letterSpacing: "0",
                    fontWeight: "400",
                  }}
                  onFocus={{ border: "0", borderBottom: "1px solid #ff3e6c" }}
                  name="age"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel mb="0">City</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  value={form.city}
                  onChange={(e) => handleChange(e)}
                  fontWeight={"600"}
                  letterSpacing="1px"
                  type="text"
                  outline="none"
                  flex="1"
                  border={"none"}
                  borderBottom={"1px solid #ff3e6c"}
                  w="full"
                  borderRadius={0}
                  focusBorderColor="none"
                  placeholder="Enter your name"
                  _hover={{ borderBottom: "1px solid #ff3e6c" }}
                  _placeholder={{
                    opacity: 0.4,
                    color: "gray",
                    letterSpacing: "0",
                    fontWeight: "400",
                  }}
                  onFocus={{ border: "0", borderBottom: "1px solid #ff3e6c" }}
                  name="city"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired></FormControl>
            <Select
              onChange={(e) => handleChange(e)}
              value={form.gender}
              placeholder="Gender"
              name="gender"
            >
              <option
                onChange={(e) => handleChange(e)}
                name="gender"
                value="Male"
              >
                Male
              </option>
              <option
                onChange={(e) => handleChange(e)}
                name="gender"
                value="Female"
              >
                Female
              </option>
              <option
                onChange={(e) => handleChange(e)}
                name="gender"
                value="Others"
              >
                Others
              </option>
            </Select>
            <Button
              bgColor="rgba(255, 49, 109, 0.7)"
              w="full"
              size="sm"
              py="4"
              _hover={{ bgColor: "rgba(255, 49, 109, 0.7)" }}
              letterSpacing={"1.3px"}
              fontWeight="500"
              fontSize="14px"
              color="white"
              leftIcon={<BiUserPlus fontSize={"20px"} />}
              onClick={() => handleClick(form)}
            >
              Add User
            </Button>
          </Flex>
        </VStack>
      </Grid>
    </Box>
  );
}

export default AdminPannel;
