import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar toggleDrawer={toggleDrawer} open={open} />
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
