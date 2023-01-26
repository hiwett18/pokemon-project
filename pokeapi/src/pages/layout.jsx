import { HStack, Box, Link } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box p="2">
      <HStack
        justify="end"
        borderBottom="thick"
        borderBottomColor="lightgray"
        width="100%"
      >
        <NavLink to="/">Home</NavLink>
      </HStack>
      <HStack justify="center">
        <NavLink to="/pokemon">
          {({ isActive }) => (
            <Box
              p="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.500"}
            >
              Pokemon Name List
            </Box>
          )}
        </NavLink>
        
        
      </HStack>
      <Outlet />
    </Box>
  );
}