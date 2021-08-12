import { makeStyles } from "@material-ui/core";
import { IUser } from "../../../types/users";
import { UserCard } from "../../Cards";

const useStyles = makeStyles({
  root: {
    width: "100%",
    boxSizing: "border-box",
  },
});

interface IUsersProps {
  users: { data: IUser[] } | undefined;
}

export const UsersScreen: React.FC<IUsersProps> = ({ users }) => {
  const classes = useStyles();
  console.log("users in screen :>> ", users);
  const cards =
    users && users.data.map((user, idx) => <UserCard key={idx} {...user} />);
  return <div className={classes.root}>{cards}</div>;
};
