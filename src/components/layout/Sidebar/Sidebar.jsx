import { Link } from "react-router-dom";
import {
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import SubmenuPopup from "../SubmenuPopup/SubmenuPopup";
import { ExpandLess, ExpandMore, Menu as MenuIcon } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AnimationOutlinedIcon from "@mui/icons-material/AnimationOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

const menuItems = [
  {
    id: 1,
    name: "Strona główna",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    id: 2,
    name: "Zamówienia",
    icon: <ShoppingCartOutlinedIcon />,
    path: "",
    subItems: [
      { id: 21, name: "Lista zamówień", path: "/orders" },
      { id: 22, name: "Faktury", path: "/invoises" },
    ],
  },
  {
    id: 3,
    name: "Produkty",
    icon: <AnimationOutlinedIcon />,
    path: "/products",
  },
  {
    id: 4,
    name: "Magazyn",
    icon: <StoreOutlinedIcon />,
    path: "",
    subItems: [
      { id: 41, name: "Wydania", path: "/store/outing" },
      { id: 42, name: "Przyjęcia", path: "/store/inputing" },
    ],
  },
];

const drawerWidth = 240;
// const closedWidth = 56;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function Sidebar({ open, toggleDrawer }) {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredSubItems, setHoveredSubItems] = useState([]);

  const handleToggleSubmenu = (id) => {
    setOpenSubmenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMouseEnter = (event, subItems) => {
    if (!open && subItems) {
      setAnchorEl(event.currentTarget);
      setHoveredSubItems(subItems);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setHoveredSubItems([]);
  };

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={() => {
              toggleDrawer();
              setOpenSubmenus({});
            }}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <div key={item.id}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => item.subItems && handleToggleSubmenu(item.id)}
                  component={item.subItems ? undefined : Link}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleClose}
                  to={item.subItems ? undefined : item.path}
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    maxHeight: 40,
                    pr: open ? 1 : 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      justifyContent: "center",
                      mr: open ? 2 : 0,
                      minWidth: 0,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {open && <ListItemText primary={item.name} />}
                  {item.subItems &&
                    open &&
                    (openSubmenus[item.id] ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              </ListItem>

              {/* Випадаюче підменю */}
              {item.subItems && open && (
                <Collapse
                  in={openSubmenus[item.id]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItemButton
                        key={subItem.id}
                        sx={{ pl: 4 }}
                        component={Link}
                        to={subItem.path}
                      >
                        <ListItemText primary={subItem.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Drawer>

      {/* Контекстне меню для закритого Sidebar */}
      <SubmenuPopup
        anchorEl={anchorEl}
        handleClose={handleClose}
        subItems={hoveredSubItems}
      />
    </>
  );
}
