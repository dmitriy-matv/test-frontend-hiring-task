import {
  makeStyles,
  Theme,
  createStyles,
  Paper,
  Box,
  Typography,
  Switch,
  Avatar,
} from "@material-ui/core";
import React, { useState } from "react";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { IDevice } from "../../../types/devices";
import { useEffect } from "react";

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
      flexGrow: 1,
    },
    description: {},
    switch: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
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
    iconContainer: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export const DeviceCard: React.FC<IDevice> = ({ ...props }) => {
  const classes = useStyles();

  const [locked, setLocked] = useState<boolean>(false);

  useEffect(() => {
    setLocked(props.attributes.state === "locked");
  }, []);
  const lockedComponent = (
    <Box className={classes.iconContainer}>
      <LockIcon style={{ color: "red" }} />
      <Typography style={{ color: "red" }}>Locked</Typography>
    </Box>
  );
  const unlockedComponent = (
    <Box className={classes.iconContainer}>
      <LockOpenIcon style={{ color: "green" }} />
      <Typography style={{ color: "green" }}>Unlocked</Typography>
    </Box>
  );
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
              {props.attributes.model_number}
            </Typography>
          </Box>
          <Box className={classes.switch}>
            <Switch
              checked={locked}
              onChange={() => {
                setLocked((prev) => !prev);
              }}
              name="lock-status"
              inputProps={{ "aria-label": "lock checkbox" }}
            />
            {locked ? lockedComponent : unlockedComponent}
          </Box>
        </Box>
      </Paper>
    </div>
  );
};
