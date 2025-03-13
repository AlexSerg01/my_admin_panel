import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function SubmenuPopup({ anchorEl, handleClose, subItems = [] }) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
    >
      {subItems.map(({ id, path, name }) => (
        <MenuItem key={id} onClick={handleClose} component={Link} to={path}>
          {name}
        </MenuItem>
      ))}
    </Menu>
  );
}
