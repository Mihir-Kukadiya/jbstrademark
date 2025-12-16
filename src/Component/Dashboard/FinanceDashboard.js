import { Box, Typography } from "@mui/material";
import Sidebar from "../../Global/Sidebar";
import Button from "@mui/material/Button";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { FaComments } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HiGift } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { AiOutlineFullscreen } from "react-icons/ai";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useMediaQuery from "@mui/material/useMediaQuery"; // ✅ ADDED

const FinanceDashboard = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState(240);
  const [selectedDate, setSelectedDate] = React.useState(dayjs());
  const [activeTab, setActiveTab] = React.useState(6);

  const [showOverview, setShowOverview] = React.useState(true);
  const [showContent, setShowContent] = React.useState(true);
  const [isFullBox, setIsFullBox] = React.useState(false);
  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // ✅ Detect small screens

  // ✅ Auto adjust width when screen is small (same fix as CRM Dashboard)
  React.useEffect(() => {
    if (isSmallScreen) {
      setSidebarWidth(56);
    }
  }, [isSmallScreen]);

  const toggleOverview = () => {
    if (showOverview) {
      setShowContent(false);
      setTimeout(() => setShowOverview(false), 10);
    } else {
      setShowOverview(true);
      setTimeout(() => setShowContent(true), 300);
    }
  };

  const toggleFullBox = () => setIsFullBox(!isFullBox);

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const menuOpen = Boolean(menuAnchor);

  const handleMenuOpen = (event) => setMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);

  const banners = [
    {
      rupees: "0",
      title: "CASH IN HAND",
      bgcolor: "#4DB3A2",
      bgcolor2: "#48A999",
      icon: <FaComments />,
    },
    {
      rupees: "0",
      title: "BANK A/C",
      bgcolor: "#3598DC",
      bgcolor2: "#2A92D8",
      icon: <MdBarChart />,
    },
    {
      rupees: "0",
      title: "EXPENSE",
      bgcolor: "#E7505A",
      bgcolor2: "#E6434E",
      icon: <FaShoppingCart />,
    },
    {
      rupees: "0",
      title: "INCOME",
      bgcolor: "#32C5D2",
      bgcolor2: "#2DBCC8",
      icon: <GiEarthAsiaOceania />,
    },
  ];

  const overviews = [
    { title: "T Sale Invoice", bgcolor: "#3FC9D5" },
    { title: "Pending Sale Invoice", bgcolor: "#ED6B75" },
    { title: "Pending Purchase", bgcolor: "#ED6B75" },
    { title: "Upcoming Purchase", bgcolor: "#ED6B75" },
    { title: "T Receipt", bgcolor: "#3FC9D5" },
    { title: "Today's Payment", bgcolor: "#ED6B75" },
  ];

  const menu_overviews = [
    { title: "T Member", bgcolor: "#3FC9D5" },
    { title: "Pending Invoice", bgcolor: "#ED6B75" },
    { title: "Upcoming Invoice", bgcolor: "#3FC9D5" },
    { title: "T Invoice", bgcolor: "#3FC9D5" },
  ];

  return (
    <>
      <Sidebar onWidthChange={(width) => setSidebarWidth(width)} />

      {/* PAGE WRAPPER */}
      <Box
        sx={{
          p: 2,
          ml: `${sidebarWidth}px`,
          transition: "all 0.3s ease",
          mt: "64px",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: 28, color: "#666", fontWeight: 300 }}>
            Dashboard
          </Typography>
        </Box>

        {/* BANNERS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: { xs: "center", lg: "space-between" },
            mt: 2,
          }}
        >
          {banners.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "48%", lg: "23%" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: 100,
                  backgroundColor: item.bgcolor,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  paddingRight: 2.5,
                  color: "#fff",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    top: -15,
                    left: -16,
                    fontSize: 110,
                    opacity: 0.17,
                  }}
                >
                  {item.icon}
                </Typography>

                <Typography sx={{ fontSize: 34, pt: 0.5 }}>
                  {item.rupees}
                </Typography>
                <Typography sx={{ fontSize: 16 }}>{item.title}</Typography>
              </Box>

              <Box
                onClick={() => navigate("/MyProfile")}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: 27.71,
                  backgroundColor: item.bgcolor2,
                  padding: "6px 10px",
                  color: "#fff",
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.9,
                  },
                }}
              >
                <Typography sx={{ fontSize: 11 }}>VIEW MORE</Typography>
                <ArrowCircleRightOutlinedIcon sx={{ fontSize: 20 }} />
              </Box>
            </Box>
          ))}
        </Box>

        {/* OVERVIEW SECTION */}
        <Box
          sx={{
            position: isFullBox ? "fixed" : "relative",
            top: isFullBox ? 0 : "auto",
            left: isFullBox ? 0 : "auto",
            width: isFullBox ? "100vw" : "100%",
            height: isFullBox ? "100vh" : "auto",
            backgroundColor: "#fff",
            zIndex: isFullBox ? 3000 : "auto",
            overflow: "auto",
            transition: "all 0.3s ease",
            border: "1px solid #3598DC",
            borderRadius: 2,
            mt: isFullBox ? 0 : 3,
          }}
        >
          {/* BLUE HEADER */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#3598DC",
              color: "#fff",
              width: "100%",
              p: 1,
              flexWrap: "wrap",
            }}
          >
            <Typography sx={{ fontSize: 18 }}>
              <HiGift style={{ fontSize: 13, marginRight: 5 }} /> Today's
              Overview
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <KeyboardArrowDownIcon
                onClick={toggleOverview}
                sx={{
                  fontSize: 28,
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  transform: showOverview ? "rotate(0deg)" : "rotate(180deg)",
                }}
              />

              <AiOutlineFullscreen
                onClick={toggleFullBox}
                style={{ fontSize: 22, cursor: "pointer" }}
              />
            </Box>
          </Box>

          {/* CONTENT */}
          <Box
            sx={{
              width: "100%",
              padding: showOverview ? "15px" : "0px",
              overflow: "hidden",
              opacity: showOverview ? 1 : 0,
              transition: "padding 0.45s ease, opacity 0.45s ease",
              backgroundColor: "#fff",
            }}
          >
            {showContent && (
              <>
                {/* TABS */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 1.2,
                  }}
                >
                  {overviews.map((item, index) => (
                    <Box
                      key={index}
                      onClick={() => setActiveTab(index)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        padding: "10px 15px",
                        cursor: "pointer",
                        border: activeTab === index ? "1px solid #ccc" : "none",
                        borderBottom:
                          activeTab === index ? "none" : "1px solid #ccc",
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      }}
                    >
                      <Typography sx={{ fontSize: 14 }}>
                        {item.title}
                      </Typography>

                      <Box
                        sx={{
                          fontSize: 11,
                          backgroundColor: item.bgcolor,
                          borderRadius: "10px",
                          color: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "2px 5px",
                        }}
                      >
                        Rs. 0
                      </Box>
                    </Box>
                  ))}

                  {/* MENU TAB */}
                  <Box
                    onClick={handleMenuOpen}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      padding: "10px 15px",
                      cursor: "pointer",
                      border: activeTab === 6 ? "1px solid #ccc" : "none",
                      borderBottom: activeTab === 6 ? "none" : "1px solid #ccc",
                      borderTopLeftRadius: 2,
                      borderTopRightRadius: 2,
                    }}
                  >
                    <MoreVertIcon sx={{ fontSize: 18 }} />
                    <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
                  </Box>

                  {/* MENU */}
                  <Menu
                    anchorEl={menuAnchor}
                    open={menuOpen}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    {menu_overviews.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingRight: "10px",
                        }}
                      >
                        <MenuItem onClick={handleMenuClose}>
                          {item.title}
                        </MenuItem>

                        <Box
                          sx={{
                            fontSize: 11,
                            backgroundColor: item.bgcolor,
                            borderRadius: "10px",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "2px 5px",
                          }}
                        >
                          Rs. 0
                        </Box>
                      </Box>
                    ))}
                  </Menu>
                </Box>

                {/* CONTENT BOX */}
                {(activeTab === 2 || activeTab === 3 || activeTab === 4) && (
                  <Box
                    sx={{
                      fontSize: 14,
                      padding: "8px",
                      border: "1px solid #ccc",
                    }}
                  >
                    No Records Found
                  </Box>
                )}
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FinanceDashboard;
