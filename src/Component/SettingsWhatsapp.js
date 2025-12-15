import React from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import Sidebar from "../Global/Sidebar";

const Whatsapp = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState(240);
  return (
    <>
      <Sidebar onWidthChange={(width) => setSidebarWidth(width)} />
      <Container maxWidth="lg">
        <Box
          sx={{
            p: 2,
            ml: `${sidebarWidth}px`,
            transition: "all 0.3s ease",
            mt: "64px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: 200 },
              height: 200,
              border: "1px solid #ccc",
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src=""
              alt="QR Code"
              style={{ maxWidth: "100%", display: "none" }}
            />
          </Box>

          {/* Buttons Row */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mb: 2,
              flexWrap: "wrap", // ✅ responsive wrap
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#3598DC",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Get Instance ID
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#3598DC",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Get QR Code
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#3598DC",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Check Status
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#3598DC",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Reconnect
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#F0F0F0",
                color: "black",
                boxShadow: "none",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Reset Instance
            </Button>
          </Box>

          {/* Inputs Row */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              width: "100%",
            }}
          >
            <TextField
              size="small"
              value="https://whatsapp.rentinvoic"
              sx={{
                width: { xs: "100%", sm: 420 },
              }}
            />

            <TextField
              size="small"
              value="689d9423b1c43"
              sx={{
                width: { xs: "100%", sm: 520 },
              }}
            />

            <Box sx={{ display: "flex", width: "100%" }}>
              <TextField
                size="small"
                placeholder="instanceid"
                sx={{
                  width: { xs: "100%", sm: 230 },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Whatsapp;
