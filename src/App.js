import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";

import AppBar from "./components/appBar/appBar";
import Content from "./components/content/content";

const AppBarGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const AppBarGridMobile = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "70px",
  width: '100vw',
  position: 'fixed',
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  padding: "10px",
}));

const ContentGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100vh",
  display: "flex",
  justifyContent: "left",
  padding: "10px",
  alignItems: "center",
}));

const ContentGridMobile = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginTop: '70px',
  minHeight: "100vh",
  display: "flex",
  justifyContent: "left",
  padding: "10px",
  alignItems: "center",
}));


function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container>
      {isMobile ? (
        <AppBarGridMobile item xs={12} sm={12}>
          <AppBar />
        </AppBarGridMobile>
      ) : (
        <AppBarGrid item xl={4} lg={4} md={3}>
          <AppBar />
        </AppBarGrid>
      )}
        {isMobile ? (
        <ContentGridMobile item xl={8} lg={8} md={9} xs={12} sm={12}>
        <Content />
      </ContentGridMobile>
      ) : (
        <ContentGrid item xl={8} lg={8} md={9} xs={12} sm={12}>
        <Content />
      </ContentGrid>
      )}
     
    </Grid>
  );
}

export default App;
