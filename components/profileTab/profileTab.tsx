import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { CustomTabPanel } from "./customTab";
import { IAddress } from "@/constants/types";
import { AddressComponent } from "../UserAddress/userAddress";
import ProfileForm from "../Form/profileForm";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [myAddrress, setMyAddrress] = useState<IAddress[]>([]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered={true}
        >
          <Tab label="Profile Details" {...a11yProps(0)} />
          <Tab label="My Addrress" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProfileForm address={setMyAddrress} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h1 className="text-2xl font-bold mb-4">User Addresses</h1>
        {myAddrress.map((address: IAddress, index: number) => (
          <AddressComponent key={index} address={address} />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
