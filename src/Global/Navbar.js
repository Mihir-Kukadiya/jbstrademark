import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    sessionStorage.clear();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#4B77BE",
        boxShadow: "none",
        zIndex: 1200,
        height: "64px",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "64px !important",
            height: "64px",
            "@media (max-width:600px)": {
              minHeight: "64px !important",
            },
            display: "flex",
            alignItems: "center",
            px: 2,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                TURANT TM
              </Typography>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ height: 29, width: 29, mr: 1 }}
                    alt="User"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    TEST{" "}
                    <KeyboardArrowDownIcon sx={{ fontSize: 17, ml: 0.5 }} />
                  </Typography>
                </IconButton>
              </Tooltip>
            </Box>

            {/* SETTINGS MENU */}
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  navigate("/MyProfile");
                }}
              >
                <PermIdentityOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography>My Profile</Typography>
              </MenuItem>

              <Divider />

              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  navigate("/LockScreen");
                }}
              >
                <LockOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography>Lock Screen</Typography>
              </MenuItem>

              <MenuItem onClick={handleLogout}>
                <LogoutOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography>Log Out</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
