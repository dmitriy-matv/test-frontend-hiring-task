import { makeStyles } from "@material-ui/core";
import { IDevice } from "../../../types/devices";
import { DeviceCard } from "../../Cards";

const useStyles = makeStyles({
  root: {
    width: "100%",
    boxSizing: "border-box",
  },
});
interface IDevicesProps {
  devices: { data: IDevice[] } | undefined;
}
export const DeviceScreen: React.FC<IDevicesProps> = ({ devices }) => {
  const classes = useStyles();
  const cards =
    devices &&
    devices.data.map((device, idx) => {
      return <DeviceCard key={idx} {...device} />;
    });
  return <div className={classes.root}>{cards}</div>;
};
