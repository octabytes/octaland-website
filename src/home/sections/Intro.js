import React from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { makeStyles, darken } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    padding: "5rem 0px !important",
    overflow: "visible !important",
    background:
      "url(./assets/images/home-bg.jpg) center center/cover no-repeat",
    "& h1, h2, h3, h4, h5, h6": {
      color: "#fff",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "100px 0 !important",
      textAlign: "center",
      "& .list": {
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      },
    },
  },
  title: {
    textShadow: "0 4px 4px rgba(0, 0, 0, 0.22)",
  },
  whiteButton: {
    background: "#fff !important",
    "&:hover": {
      background: `${darken("#ffffff", 0.1)} !important`,
    },
  },
  product: {
    position: "relative",
    top: "100px",
    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
      boxShadow:
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
    },
    [theme.breakpoints.down("md")]: {
      left: 0,
      top: 0,
    },
  },
  productLink: {
    position: "absolute",
    top: "-100px",
    left: "-30px",
    textAlign: "center",
    display: "block",
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    background: "#ffffff",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "37px 20px",
    boxSizing: "border-box",
    overflow: "hidden",
    boxShadow: "0 14px 32px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",

    "&:hover": { boxShadow: "0 19px 32px rgba(0, 0, 0, 0.4)" },

    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },
}));

const Intro = () => {
  const classes = useStyles();

  return (
    <section
      className={clsx("text-white")}
      style={{ paddingTop: "5rem" }}
      id="intro1"
    >
      <div className={classes.introWrapper}>
        <div className="container">
          <Grid container spacing={3} justify="center">
            <Grid item md={6}>
              <h1 className={clsx("mb-6 text-48", classes.title)}>
                Manage Properties in Better Way
              </h1>
              <div className="text-22 mb-10">
                Not sure if it's worth $19.97? Try it free!
              </div>

              <div className="mb-10 list">
                <div className="flex items-center mb-4">
                  <Icon color="secondary" className="mr-2">
                    check
                  </Icon>
                  Add unlimited properties
                </div>
                <div className="flex items-center mb-4">
                  <Icon color="secondary" className="mr-2">
                    check
                  </Icon>
                  Upload unlimited photos/files no storage limit.
                </div>
                <div className="flex items-center mb-4">
                  <Icon color="secondary" className="mr-2">
                    check
                  </Icon>
                  Easily find properties in MAP
                </div>
                <div className="flex items-center mb-4">
                  <Icon color="secondary" className="mr-2">
                    check
                  </Icon>
                  GPS system to find place location from Photo
                </div>
                <div className="flex items-center mb-4">
                  <Icon color="secondary" className="mr-2">
                    check
                  </Icon>
                  Set reminders for your import tasks
                </div>
                <div className="flex items-center mb-4">
                  <Icon color="secondary" className="mr-2">
                    check
                  </Icon>
                  Create free sub accounts with Vendor System
                </div>
              </div>

              <div>
                <Fab
                  variant="extended"
                  size="large"
                  color="primary"
                  href="https://www.youtube.com/watch?v=p6-nawU2IHI&list=PLY5nMiRWs-1pvxAZlUm4Uq2aT6S_YHWpa&index=1"
                  aria-label="Intro Video"
                  className="px-6 text-18 m-2"
                >
                  <Icon className="mr-4">movie</Icon>
                  Watch Video
                </Fab>

                <Fab
                  variant="extended"
                  size="large"
                  aria-label="Sign Up"
                  href="https://dashboard.areoland.com/sign-up"
                  className={clsx("px-6 text-18 m-2", classes.whiteButton)}
                >
                  <Icon className="mr-4">alarm_on</Icon>
                  14 days free trial
                </Fab>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className={classes.product}>
                <a
                  href="https://dashboard.areoland.com/sign-up"
                  className={classes.productLink}
                >
                  <div className="text-32 font-bold">$19.97</div>
                  <span className="text-14">per month</span> <br />
                  <span className="text-14">Get started now for free</span>
                </a>
                <img
                  src="./assets/images/areoland.png"
                  alt="AreoLand Dashboard"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Intro;
