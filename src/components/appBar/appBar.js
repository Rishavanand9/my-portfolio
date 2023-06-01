import React from "react";
import { Avatar, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { connect } from "react-redux";
import { setClickedTitle } from "../../redux/actions";

const NavItem = styled(Typography)(({ theme }) => ({
  margin: 10,
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

function AppBar({ clickedTitle, setClickedTitle }) {
  const handleClick = (title) => {
    switch (title) {
      case "cv":
        break;
      case "resume":
        break;
      default:
        setClickedTitle(title);
        break;
    }
  };

  return (
    <div>
      <Avatar
        alt="Rishav Anand"
        src="../../assets/rishav.JPG"
        sizes="100"
        style={{ margin: 20 }}
      />
      <NavItem variant="h6" onClick={() => handleClick("about")}>
        About
      </NavItem>
      <NavItem variant="h6" onClick={() => handleClick("experience")}>
        Experience
      </NavItem>
      <NavItem variant="h6" onClick={() => handleClick("education")}>
        Education
      </NavItem>
      <NavItem variant="h6" onClick={() => handleClick("skills")}>
        Skills
      </NavItem>
      <NavItem variant="h6" onClick={() => handleClick("interests")}>
        Interests
      </NavItem>
      <NavItem variant="h6" onClick={() => handleClick("cv")}>
        Download CV
      </NavItem>
      <NavItem variant="h6" onClick={() => handleClick("resume")}>
        Download Resume
      </NavItem>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    clickedTitle: state.clickedTitle,
  };
};

const mapDispatchToProps = {
  setClickedTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
