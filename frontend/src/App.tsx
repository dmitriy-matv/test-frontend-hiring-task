import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { DeviceScreen, Navigation, UsersScreen } from "./components";
import { TabPanel } from "./components/Screens/TabPanel/TabPanel";
import { ApiService } from "./services/apiService";
import { IDevice } from "./types/devices";
import { IUser } from "./types/users";

function App() {
  const service = new ApiService();
  const [tabIndex, setTabIndex] = useState(0);

  const [users, setUsers] = useState<{ data: IUser[] }>();
  const [devices, setDevices] = useState<{ data: IDevice[] }>();
  useEffect(() => {
    fetchUsers();
    fetchDevices();
  }, []);
  const fetchDevices = async () => {
    const devices = await service.getDevices<{ data: IDevice[] }>();
    setDevices(devices);
  };
  const fetchUsers = async () => {
    const users = await service.getUsers<{ data: IUser[] }>();
    setUsers(users);
  };
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Navigation tabNumber={tabIndex} changeHandler={handleTabChange} />
      <Container maxWidth="sm">
        <TabPanel value={tabIndex} index={0}>
          <DeviceScreen devices={devices} />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <UsersScreen users={users} />
        </TabPanel>
      </Container>
    </>
  );
}

export default App;
