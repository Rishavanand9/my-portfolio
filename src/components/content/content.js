import React from "react";
import { Typography, Grid, IconButton } from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

import { connect } from "react-redux";
import { setClickedTitle } from "../../redux/actions";
import {
  INTRO,
  NAME,
  PHONE_NO,
  PRIMARY_EMAIL_ID,
  ADDRESS,
  ABOUT_ME,
  LINKEDIN,
  GITHUB,
} from "../../utils/constants";

const handleLinkout = (type) => {
  switch (type) {
    case "call":
      window.location.href = `tel:${PHONE_NO}}`;
      break;
    case "email":
      window.location.href = `mailto:${PRIMARY_EMAIL_ID}}`;
      break;
    case "git":
      window.open(GITHUB, "_blank");
      break;
    case "linkedIn":
      window.open(LINKEDIN, "_blank");
      break;
    default:
      break;
  }
};

const renderAboutMe = () => {
  return (
    <Grid>
      <Typography variant="h1">{NAME}</Typography>
      <br />
      <Typography variant="subtitle">
        {ADDRESS} &bull; {PHONE_NO} &bull; {PRIMARY_EMAIL_ID}
      </Typography>
      <br />
      <br />
      <Typography>{INTRO}</Typography>
      <br />
      <Typography>{ABOUT_ME.line2}</Typography>
      <br />
      <br />
      <Grid container spacing={4}>
        <Grid item>
          <IconButton
            size="lg"
            color="primary"
            onClick={() => handleLinkout("call")}
          >
            <CallOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size="lg"
            color="primary"
            onClick={() => handleLinkout("email")}
          >
            <MailOutlineOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size="lg"
            color="primary"
            onClick={() => handleLinkout("git")}
          >
            <CodeOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size="lg"
            color="primary"
            onClick={() => handleLinkout("linkedIn")}
          >
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/windows/32/000000/linkedin-2.png"
              alt="linkedin-2"
            />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Content = ({ clickedTitle }) => {
  switch (clickedTitle) {
    case "about":
      return renderAboutMe();
    default:
      return <></>;
  }
};

const mapStateToProps = (state) => {
  return {
    clickedTitle: state.clickedTitle,
  };
};

const mapDispatchToProps = {
  setClickedTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
