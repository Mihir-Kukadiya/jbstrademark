import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, IconButton, Paper } from "@mui/material";
import Sidebar from "../Global/Sidebar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const bgImages = [
  "https://admin.madaliya.com/assets/pages/media/bg/1.jpg",
  "https://admin.madaliya.com/assets/pages/media/bg/2.jpg",
  "https://admin.madaliya.com/assets/pages/media/bg/3.jpg",
  "https://admin.madaliya.com/assets/pages/media/bg/4.jpg",
];

export default function LockScreen() {
  const [bgIndex, setBgIndex] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(240);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Sidebar onWidthChange={(width) => setSidebarWidth(width)} />

      <Box
        sx={{
          position: "relative",
          height: "calc(100vh - 64px)",
          width: `calc(100% - ${sidebarWidth}px)`,
          ml: `${sidebarWidth}px`,
          mt: "64px",
          overflow: "hidden",
          backgroundImage: `url(${bgImages[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.35), rgba(0,0,0,0.15))",
            zIndex: 1,
          }}
        />

        {/* Glass Card */}
        <Paper
          elevation={0}
          sx={{
            position: "relative",
            zIndex: 2,
            width: 510,
            height: 250,
            display: "flex",
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          {/* Left image box */}
          <Box
            sx={{
              width: "40%",
              border: "1px solid rgba(255,255,255,0.4)",
              m: 2,
            }}
          />

          {/* Right Content */}
          <Box sx={{ p: 3, flex: 1 }}>
            <Typography sx={{ color: "#fff", fontSize: 22 }}>
              User Name
            </Typography>

            <Typography sx={{ color: "#e0e0e0", fontSize: 14 }}>
              xyz@gmail.com
            </Typography>

            <Typography sx={{ color: "#b0bec5", fontSize: 13, mt: 1 }}>
              Locked
            </Typography>

            {/* Password */}
            <Box sx={{ display: "flex", mt: 3 }}>
              <TextField
                type="password"
                placeholder="Password"
                fullWidth
                InputProps={{
                  sx: {
                    background: "#fff",
                    height: 42,
                  },
                }}
              />
              <IconButton
                sx={{
                  background: "#26c6da",
                  color: "#fff",
                  borderRadius: 0,
                  px: 2,
                  "&:hover": { background: "#00acc1" },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>

            <Typography
              sx={{
                mt: 2,
                fontSize: 13,
                color: "#e0e0e0",
                cursor: "pointer",
              }}
            >
              Goto login
            </Typography>
          </Box>
        </Paper>

        {/* Footer */}
        <Typography
          sx={{
            position: "absolute",
            bottom: 20,
            zIndex: 2,
            color: "#e0e0e0",
            fontSize: 13,
          }}
        >
          2014 © www.savajinfotech.com
        </Typography>
      </Box>
    </>
  );
}
