import { Box, Typography } from "@mui/material";
import Sidebar from "../../Global/Sidebar";
import Button from "@mui/material/Button";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { FaComments } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { HiGift } from "react-icons/hi";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import dayjs from "dayjs";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useMediaQuery from "@mui/material/useMediaQuery"; // ✅ ADDED

const CrmDashboard = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState(240);
  const [selectedDate, setSelectedDate] = React.useState(dayjs());
  const [activeTab, setActiveTab] = React.useState(0);
  const navigate = useNavigate();

  const [showOverview, setShowOverview] = React.useState(true);
  const [showContent, setShowContent] = React.useState(true);
  const [isFullBox, setIsFullBox] = React.useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // ✅ ADDED

  // ✅ FIX: Auto adjust dashboard margin when screen is small
  React.useEffect(() => {
    if (isSmallScreen) {
      setSidebarWidth(56); // collapsed width
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

  const banners = [
    {
      title: "TradeMark",
      subtitle1: "Total/Today: 0 / 0",
      subtitle2: "Total/Month: 0 / 0",
      bgcolor: "#8E44AD",
      bgcolor2: "#8640A2",
      icon: <FaComments />,
    },
    {
      title: "Follow",
      subtitle1: "0 / 0",
      subtitle2: "0 / 0",
      bgcolor: "#3598DC",
      bgcolor2: "#2790D7",
      icon: <MdBarChart />,
    },
    {
      title: "Hearing",
      subtitle1: "0 / 0",
      subtitle2: "0 / 0",
      bgcolor: "#4DB3A2",
      bgcolor2: "#48A999",
      icon: <FaShoppingCart />,
    },
    {
      title: "Inquiry",
      subtitle1: "0 / 0",
      subtitle2: "0 / 0",
      bgcolor: "#F2784B",
      bgcolor2: "#F16E3E",
      icon: <GiEarthAsiaOceania />,
    },
  ];

  const overviews = [
    { title: "Follow", quantity: "0" },
    { title: "Hearing" },
    { title: "My Tasks" },
    { title: "My Comments" },
    { title: "Tasks" },
    { title: "Comments" },
  ];

  return (
    <>
      <Sidebar onWidthChange={(width) => setSidebarWidth(width)} />

      {/* MAIN PAGE */}
      <Box
        sx={{
          p: 2,
          ml: `${sidebarWidth}px`,
          transition: "all 0.3s ease",
          mt: "164px",
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

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDate}
                format="YYYY/MM/DD"
                onChange={(newValue) => setSelectedDate(newValue)}
                slotProps={{
                  textField: {
                    sx: {
                      height: 40,
                      width: { xs: "100%", sm: 150 },
                      "& .MuiInputBase-root": { height: 40, fontSize: 14 },
                      "& .MuiInputBase-input": { padding: "8px 12px" },
                    },
                    size: "small",
                  },
                }}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDate}
                format="YYYY/MM/DD"
                onChange={(newValue) => setSelectedDate(newValue)}
                slotProps={{
                  textField: {
                    sx: {
                      height: 40,
                      width: { xs: "100%", sm: 150 },
                      "& .MuiInputBase-root": { height: 40, fontSize: 14 },
                      "& .MuiInputBase-input": { padding: "8px 12px" },
                    },
                    size: "small",
                  },
                }}
              />
            </LocalizationProvider>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E12330",
                height: 40,
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Search
            </Button>
          </Box>
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
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: 16 }}>{item.subtitle1}</Typography>
                <Typography sx={{ fontSize: 12 }}>{item.subtitle2}</Typography>
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
                  cursor: "pointer", // 👈 important UX
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

          <Box
            sx={{
              height: showOverview ? (activeTab === 0 ? 138 : 500) : 0,
              width: "100%",
              padding: showOverview ? "15px" : "0 15px",
              overflow: "hidden",
              opacity: showOverview ? 1 : 0,
              transition:
                "height 0.45s ease, padding 0.45s ease, opacity 0.45s ease",
              backgroundColor: "#fff",
            }}
          >
            {showContent && (
              <>
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
                      <Typography>{item.title}</Typography>
                      {index === 0 && (
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            fontSize: 12,
                            backgroundColor: "#ED6B75",
                            borderRadius: "50%",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {item.quantity}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    fontSize: 14,
                    padding: "8px",
                    border: "1px solid #ccc",
                  }}
                >
                  No Records Found
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CrmDashboard;
