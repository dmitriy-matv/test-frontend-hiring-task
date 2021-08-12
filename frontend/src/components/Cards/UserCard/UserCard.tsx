import {
  makeStyles,
  Theme,
  createStyles,
  Paper,
  Box,
  Typography,
  Avatar,
} from "@material-ui/core";
import React from "react";
import { IUser } from "../../../types/users";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      marginBottom: "5px",
      boxSizing: "border-box",
    },
    card: {
      width: "100%",
      display: "flex",
      padding: 10,
      alignItems: "center",
      boxSizing: "border-box",
    },
    controls: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flexGrow: 1,
    },
    description: {},
    status: {
      alignSelf: "flex-end",
      padding: "2px 25px",
      borderRadius: 50,
      backgroundColor: "red",
      color: "white",
      fontWeight: 600,
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      marginRight: 10,
    },
    title: {
      fontWeight: 600,
    },
    subtitle: {
      fontWeight: 400,
      color: "#a1a1a1",
    },
    period: {
      fontWeight: 600,
      color: "#707070",
      fontSize: 12,
    },
  })
);

export const UserCard: React.FC<IUser> = ({ ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={2} className={classes.card}>
        <Avatar
          alt="Avatar"
          src="https://i.pravatar.cc/700"
          className={classes.large}
        />
        <Box className={classes.controls}>
          <Box className={classes.description}>
            <Typography className={classes.title}>
              {props.attributes.name}
            </Typography>
            <Typography className={classes.subtitle}>
              {props.attributes.email}
            </Typography>
            <Typography className={classes.period}>{`${moment(
              props.attributes.starts_at
            ).format("YYYY/MM/DD")} - ${moment(props.attributes.ends_at).format(
              "YYYY/MM/DD"
            )}`}</Typography>
          </Box>
          <Box className={classes.status}>
            {props.attributes.status.toUpperCase()}
          </Box>
        </Box>
      </Paper>
    </div>
  );
};
