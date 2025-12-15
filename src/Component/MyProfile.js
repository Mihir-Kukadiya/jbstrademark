import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "../Global/Sidebar";

const Profile = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState(240);
  return (
    <>
      <Sidebar onWidthChange={(width) => setSidebarWidth(width)} />
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          backgroundColor: "#f8f8f8",
          px: { xs: 2, sm: 4 },
          p: 2,
          ml: `${sidebarWidth}px`,
          transition: "all 0.3s ease",
          mt: "64px",
        }}
      >
        {/* Left side: 404 */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "right" },
            pr: { xs: 0, md: 4 },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "80px", sm: "120px" }, color: "#e74c3c" }}
          >
            404
          </Typography>
        </Box>

        {/* Right side: message, contact button, search */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "16px", sm: "20px" },
              color: "#555",
              mb: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            You don’t have permission.
          </Typography>

          <Button
            variant="text"
            href="mailto:admin@example.com"
            sx={{
              mb: 3,
              textTransform: "none",
              fontWeight: "bold",
              color: "#3498db",
            }}
          >
            Contact Admin
          </Button>

          <TextField
            placeholder="keyword..."
            variant="outlined"
            size="small"
            sx={{
              width: { xs: "200px", sm: "250px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    sx={{
                      minWidth: 0,
                      p: 1,
                      backgroundColor: "#e74c3c",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#c0392b" },
                      mr: -1.8,
                    }}
                  >
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
