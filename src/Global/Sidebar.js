import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, useLocation } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Navbar from "../Global/Navbar";
import useMediaQuery from "@mui/material/useMediaQuery";   // ✅ ADDED

const drawerWidth = 240;

// Sidebar Open CSS
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// Sidebar Closed CSS
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `56px`, // collapsed width
});

// Drawer styles
const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: drawerWidth,
  whiteSpace: "nowrap",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// Menu Items
const menuItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlinedIcon />,
    subItems: ["Crm Dashboard", "Finance Dashboard"],
  },

  {
    text: "CRM",
    icon: <PeopleAltOutlinedIcon />,
    subItems: [
      "Account/Register",
      "TradeMark",
      "Hearing",
      "Send Email",
      "Task",
      "Inquiry",
    ],
  },

  {
    text: "Finance",
    icon: <WalletOutlinedIcon />,
    subItems: [
      {
        label: "Sale Invoice",
        icon: <AddCircleOutlineIcon sx={{ fontSize: 18 }} />,
      },
      {
        label: "Quotation",
        icon: <AddCircleOutlineIcon sx={{ fontSize: 18 }} />,
      },
      {
        label: "Receipt",
        icon: <AddCircleOutlineIcon sx={{ fontSize: 18 }} />,
      },
    ],
  },

  { text: "Master", icon: <FileCopyOutlinedIcon />, subItems: ["Branch"] },

  {
    text: "Settings",
    icon: <SettingsOutlinedIcon />,
    subItems: ["Whatsapp", "Entry Logs", "BackUp Database"],
  },
];

const Sidebar = ({ onWidthChange }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const [open, setOpen] = React.useState(() => {
    const saved = localStorage.getItem("sidebarOpen");
    return saved !== null ? JSON.parse(saved) : false;
  });

  // ⭐ AUTO CLOSE SIDEBAR ON SMALL SCREEN
  React.useEffect(() => {
    if (isSmallScreen) {
      setOpen(false); // CLOSE sidebar automatically
    }
  }, [isSmallScreen]);

  const closeOthersAndOpenCurrent = (parentText) => {
    setSubmenuOpen((prev) => {
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      newState[parentText] = true; 
      return newState;
    });
  };

  const [submenuOpen, setSubmenuOpen] = React.useState(() => {
    const saved = localStorage.getItem("submenuOpen");
    return saved ? JSON.parse(saved) : {};
  });

  const [hoverMenu, setHoverMenu] = React.useState(null);
  const [hoverPos, setHoverPos] = React.useState(0);

  const isActiveRoute = (sub) => {
    const currentPath = location.pathname;

    if (sub === "Crm Dashboard" && currentPath === "/") return true;
    if (sub === "Finance Dashboard" && currentPath === "/FinanceDashboard") return true;
    if (sub === "Account/Register" && currentPath === "/CRMAcc") return true;
    if (sub === "Hearing" && currentPath === "/CRMHearing") return true;
    if (sub === "Task" && currentPath === "/CRMTask") return true;
    if (sub === "TradeMark" && currentPath === "/CRMTrademark") return true;
    if (sub === "Inquiry" && currentPath === "/CRMInquiry") return true;
    if (sub === "Send Email" && currentPath === "/CRMSendEmail") return true;

    if (sub.label === "Sale Invoice" && currentPath === "/FinanceSaleInvoice") return true;
    if (sub.label === "Quotation" && currentPath === "/FinanceQuotation") return true;
    if (sub.label === "Receipt" && currentPath === "/FinanceReceipt") return true;

    if (sub === "Branch" && currentPath === "/MasterBranch") return true;
    if (sub === "Whatsapp" && currentPath === "/SettingsWhatsapp") return true;
    if (sub === "Entry Logs" && currentPath === "/SettingsEntryLogs") return true;
    if (sub === "BackUp Database" && currentPath === "/BackUpDatabase") return true;

    return false;
  };

  React.useEffect(() => {
    onWidthChange && onWidthChange(open ? 240 : 56);
    localStorage.setItem("sidebarOpen", JSON.stringify(open));
  }, [open]);

  React.useEffect(() => {
    localStorage.setItem("submenuOpen", JSON.stringify(submenuOpen));
  }, [submenuOpen]);

  const toggleDrawer = () => setOpen((prev) => !prev);

  const toggleSubmenu = (text) => {
    setSubmenuOpen((prev) => ({ ...prev, [text]: !prev[text] }));
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer
          variant="permanent"
          open={open}
          sx={{ "& .MuiDrawer-paper": { marginTop: "64px" } }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Divider />

          <List>
            {menuItems.map((item) => (
              <React.Fragment key={item.text}>
                <ListItem disablePadding sx={{ position: "relative" }}>
                  <ListItemButton
                    onClick={() => open && toggleSubmenu(item.text)}
                    onMouseEnter={(e) => {
                      if (!open) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setHoverPos(rect.top);
                        setHoverMenu(item);
                      }
                    }}
                    onMouseLeave={() => !open && setHoverMenu(null)}
                    sx={[
                      { minHeight: 48, px: 2.5 },
                      open ? { justifyContent: "initial" } : { justifyContent: "center" },
                    ]}
                  >
                    <ListItemIcon sx={[{ minWidth: 0 }, open ? { mr: 3 } : {}]}>
                      {item.icon}
                    </ListItemIcon>

                    <ListItemText primary={item.text} sx={open ? { opacity: 1 } : { opacity: 0 }} />

                    {open &&
                      (submenuOpen[item.text] ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </ListItem>

                {/* SUBMENU WHEN OPEN */}
                {open && item.subItems.length > 0 && (
                  <Collapse in={submenuOpen[item.text]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subItems.map((sub) => (
                        <ListItemButton
                          key={sub.label || sub}
                          sx={{
                            pl: 7,
                            backgroundColor: isActiveRoute(sub) ? "#3598DC" : "transparent",
                            color: isActiveRoute(sub) ? "#fff" : "inherit",
                            "&:hover": {
                              backgroundColor: isActiveRoute(sub)
                                ? "#2980B9"
                                : "rgba(0, 0, 0, 0.04)",
                            },
                            "& .MuiListItemIcon-root": {
                              color: isActiveRoute(sub) ? "#fff" : "inherit",
                            },
                          }}
                          onClick={() => {
                            closeOthersAndOpenCurrent(item.text);

                            if (sub === "Crm Dashboard") handleNavigation("/");
                            if (sub === "Finance Dashboard") handleNavigation("/FinanceDashboard");
                            if (sub === "Account/Register") handleNavigation("/CRMAcc");
                            if (sub === "Hearing") handleNavigation("/CRMHearing");
                            if (sub === "Task") handleNavigation("/CRMTask");
                            if (sub === "TradeMark") handleNavigation("/CRMTrademark");
                            if (sub === "Inquiry") handleNavigation("/CRMInquiry");
                            if (sub === "Send Email") handleNavigation("/CRMSendEmail");

                            if (sub.label === "Sale Invoice") handleNavigation("/FinanceSaleInvoice");
                            if (sub.label === "Quotation") handleNavigation("/FinanceQuotation");
                            if (sub.label === "Receipt") handleNavigation("/FinanceReceipt");

                            if (sub === "Branch") handleNavigation("/MasterBranch");

                            if (sub === "Whatsapp") handleNavigation("/SettingsWhatsapp");
                            if (sub === "Entry Logs") handleNavigation("/SettingsEntryLogs");
                            if (sub === "BackUp Database") handleNavigation("/BackUpDatabase");
                          }}
                        >
                          {typeof sub !== "string" && (
                            <ListItemIcon sx={{ minWidth: 30 }}>{sub.icon}</ListItemIcon>
                          )}
                          <ListItemText primary={sub.label || sub} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>

          <Divider />
        </Drawer>

        {/* HOVER POPUP MENU WHEN COLLAPSED */}
        {!open && hoverMenu && (
          <Box
            sx={{
              position: "fixed",
              top: hoverPos,
              left: 56,
              bgcolor: "white",
              boxShadow: 3,
              borderRadius: "4px",
              zIndex: 2000,
              minWidth: 200,
              py: 1,
            }}
            onMouseEnter={() => setHoverMenu(hoverMenu)}
            onMouseLeave={() => setHoverMenu(null)}
          >
            <ListItemButton>
              <ListItemText primary={hoverMenu.text} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>

            {hoverMenu.subItems.map((sub) => (
              <ListItemButton
                key={sub.label || sub}
                sx={{
                  px: 2,
                  backgroundColor: isActiveRoute(sub) ? "#3598DC" : "transparent",
                  color: isActiveRoute(sub) ? "#fff" : "inherit",
                  "&:hover": {
                    backgroundColor: isActiveRoute(sub)
                      ? "#2980B9"
                      : "rgba(0, 0, 0, 0.04)",
                  },
                  "& .MuiListItemIcon-root": {
                    color: isActiveRoute(sub) ? "#fff" : "inherit",
                  },
                }}
                onClick={() => {
                  if (sub === "Crm Dashboard") handleNavigation("/");
                  if (sub === "Finance Dashboard") handleNavigation("/FinanceDashboard");
                  if (sub === "Account/Register") handleNavigation("/CRMAcc");
                  if (sub === "Hearing") handleNavigation("/CRMHearing");
                  if (sub === "Task") handleNavigation("/CRMTask");
                  if (sub === "TradeMark") handleNavigation("/CRMTrademark");
                  if (sub === "Inquiry") handleNavigation("/CRMInquiry");
                  if (sub === "Send Email") handleNavigation("/CRMSendEmail");

                  if (typeof sub !== "string") {
                    if (sub.label === "Sale Invoice") handleNavigation("/FinanceSaleInvoice");
                    if (sub.label === "Quotation") handleNavigation("/FinanceQuotation");
                    if (sub.label === "Receipt") handleNavigation("/FinanceReceipt");
                  }

                  if (sub === "Branch") handleNavigation("/MasterBranch");

                  if (sub === "Whatsapp") handleNavigation("/SettingsWhatsapp");
                  if (sub === "Entry Logs") handleNavigation("/SettingsEntryLogs");
                  if (sub === "BackUp Database") handleNavigation("/BackUpDatabase");
                }}
              >
                {typeof sub !== "string" && (
                  <ListItemIcon sx={{ minWidth: 30 }}>{sub.icon}</ListItemIcon>
                )}
                <ListItemText primary={sub.label || sub} />
              </ListItemButton>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Sidebar;
