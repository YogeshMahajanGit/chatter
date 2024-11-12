import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";

export default function TabsPage() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="lab API tabs example"
            sx={{}}
          >
            <Tab sx={{ width: "50%" }} label="Login" value="1" />
            <Tab sx={{ width: "50%" }} label="Sign up" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Login />
        </TabPanel>
        <TabPanel value="2">
          <SignUp />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
