import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar, Typography, styled } from "@mui/material";
import { AppBar as MuiAppBar } from "@mui/material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  marginLeft: open ? drawerWidth : 0, // Виправлено
  width: `calc(100% - ${open ? drawerWidth : 0}px)`, // Виправлено
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.standard, // Об'єднано перехід
  }),
}));

export default function Navbar({ open, toggleDrawer }) {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ marginRight: 5, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
