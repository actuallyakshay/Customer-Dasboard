import React, { ReactNode } from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsShieldLockFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Flex
        position={"sticky"}
        top="0"
        zIndex={5}
        bgColor="transparent"
        justifyContent="space-evenly"
        py="3"
      >
        <Box>
          <Link to='/user'>
          <Heading color="#ff3e6c" as="i" size="md" fontWeight={"500"}>
            Customer Dashboard
          </Heading>
          </Link>
        </Box>
        <Link to="/">
          <Heading as="ins" color="#ff3e6c" size="md" fontWeight={"500"}>
            Home
          </Heading>
        </Link>
        <Link to="/user">
          <Heading as="ins" color="#ff3e6c" size="md" fontWeight={"500"}>
            Users
          </Heading>
        </Link>
        <HStack display={["none", "none", "flex"]}>
          <BsShieldLockFill color="green" fontSize={"30px"} />
          <Text fontWeight={"500"} color="blackAlpha.600">
            1 0 0 % {"  "} S E C U R E
          </Text>
        </HStack>
      </Flex>
      <Divider />
      <br />
      <br />
    </>
  );
}
