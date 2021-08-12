import {
  makeStyles,
  Theme,
  AppBar,
  Container,
  Tabs,
  Tab,
} from "@material-ui/core";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsContainer: {
    justifyContent: "space-around",
  },
}));

export interface INavbarProps {
  tabNumber: number;
  changeHandler: (event: React.ChangeEvent<{}>, value: any) => void;
}
export const Navigation: React.FC<INavbarProps> = ({
  tabNumber,
  changeHandler,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="sm">
          <Tabs
            value={tabNumber}
            onChange={changeHandler}
            aria-label="access navigation"
          >
            <Tab label="Devices" {...a11yProps(0)} />
            <Tab label="Users" {...a11yProps(1)} />
          </Tabs>
        </Container>
      </AppBar>
    </div>
  );
};
