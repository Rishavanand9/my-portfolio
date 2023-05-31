import React from "react";
import { Avatar, Typography } from "@mui/material";
import { styled } from "@mui/system";

const NavItem = styled(Typography)(({ theme }) => ({
  margin: 10,
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

function AppBar() {
  return (
    <div>
      <Avatar alt="Rishav Anand" src="../../assets/rishav.JPG" sizes="100" style={{margin: 20}}/>
      <NavItem variant="h6">About</NavItem>
      <NavItem variant="h6">Experience</NavItem>
      <NavItem variant="h6">Education</NavItem>
      <NavItem variant="h6">Skills</NavItem>
      <NavItem variant="h6">Interests</NavItem>
      <NavItem variant="h6">CV</NavItem>
      <NavItem variant="h6">Download Resume</NavItem>
    </div>
  );
}
export default AppBar;
