import DashboardIcon from "@mui/icons-material/Dashboard";

export const menuItems = [
  {
    id: 1,
    name: "Strona główna",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    id: 2,
    name: "Zamówienia",
    icon: "",
    path: "",
    subItems: [
      {
        id: 21,
        name: "Lista zamówień",
        path: "/orders",
      },
      {
        id: 22,
        name: "Faktury",
        path: "/invoises",
      },
    ],
  },
  {
    id: 3,
    name: "Produkty",
    icon: "",
    path: "/products",
  },
  {
    id: 4,
    name: "Magazyn",
    icon: "",
    path: "/store",
    subItems: [
      { id: 41, name: "Wydania", icon: "", path: "/store/outing" },
      { id: 42, name: "Przyjęcia", icon: "", path: "/store/inputing" },
    ],
  },
];
