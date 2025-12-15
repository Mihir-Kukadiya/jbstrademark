import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Menu,
  MenuItem,
  Select,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import Sidebar from "../Global/Sidebar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function HearingPage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [sidebarWidth, setSidebarWidth] = React.useState(240);

  const handleActionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAction = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Sidebar onWidthChange={(width) => setSidebarWidth(width)} />

      <Box
        sx={{
          p: { xs: 1, sm: 2 },
          ml: `${sidebarWidth}px`,
          transition: "all 0.3s ease",
          mt: { xs: "56px", sm: "64px" },
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        {/* -------------------- TOP BAR -------------------- */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            mt: { xs: 1, sm: 2, md: 0 },
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 2, md: 0 },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2196F3",
              textTransform: "none",
              px: 3,
              width: { xs: "100%", sm: "auto" },
            }}
            onClick={() => setShowForm(true)}
          >
            Add New Hearing
          </Button>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: { xs: "flex-start", md: "flex-end" },
              width: { xs: "100%", md: "auto" },
            }}
          >
            <TextField
              placeholder="Search..."
              size="small"
              sx={{
                minWidth: { xs: "100%", sm: 180 },
                flexGrow: { xs: 1, sm: 0 },
                background: "#fff",
              }}
            />

            <Button
              variant="contained"
              sx={{
                minWidth: { xs: "calc(50% - 4px)", sm: 30 },
                flexGrow: { xs: 1, sm: 0 },
                backgroundColor: "#4A90E2",
                px: 1,
              }}
            >
              .
            </Button>

            <Button
              variant="contained"
              onClick={handleActionClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{ 
                backgroundColor: "#8e24aa", 
                textTransform: "none",
                minWidth: { xs: "calc(50% - 4px)", sm: "auto" },
                flexGrow: { xs: 1, sm: 0 }
              }}
            >
              Action
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseAction}
            >
              <MenuItem onClick={handleCloseAction}>Send SMS</MenuItem>
              <MenuItem onClick={handleCloseAction}>Send EMAIL</MenuItem>
              <MenuItem onClick={handleCloseAction}>Print</MenuItem>
            </Menu>

            <Select
              size="small"
              defaultValue="Pend"
              sx={{ minWidth: { xs: "100%", sm: 90 }, flexGrow: { xs: 1, sm: 0 } }}
            >
              <MenuItem value="Pend">Pending</MenuItem>
              <MenuItem value="Done">Done</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box sx={{ mt: 1, borderBottom: "1px solid #e0e0e0" }} />

        {/* -------------------- FORM SECTION -------------------- */}
        {showForm && (
          <Box sx={{ mt: 3, overflow: "auto" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: { xs: 300, sm: 650 } }}>
                <TableBody>
                  {/* Row 1: TradeMark & Entry Date */}
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: "0.875rem", sm: "1rem" }, whiteSpace: "nowrap", pr: 1 }}>
                      TradeMark
                    </TableCell>
                    <TableCell>
                      <Select fullWidth size="small" defaultValue="N/A">
                        <MenuItem value="N/A">N/A</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, display: { xs: "none", md: "table-cell" }, fontSize: { xs: "0.875rem", sm: "1rem" }, whiteSpace: "nowrap", pr: 1 }}>
                      Entry Date
                    </TableCell>
                    <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                      <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                    </TableCell>
                  </TableRow>

                  {/* Entry Date - Mobile Only */}
                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>Entry Date</TableCell>
                    <TableCell>
                      <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                    </TableCell>
                  </TableRow>

                  {/* Row 2: Status - Full Width */}
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: "0.875rem", sm: "1rem" }, whiteSpace: "nowrap", pr: 1 }}>
                      Status
                    </TableCell>
                    <TableCell colSpan={3}>
                      <TextField fullWidth size="small" placeholder="eg. objected" InputProps={{ sx: { height: 35 } }} />
                    </TableCell>
                  </TableRow>

                  {/* Row 3: Subject - Full Width */}
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: "0.875rem", sm: "1rem" }, whiteSpace: "nowrap", pr: 1 }}>
                      Subject
                    </TableCell>
                    <TableCell colSpan={3}>
                      <TextField fullWidth multiline rows={3} InputProps={{ sx: { minHeight: 80 } }} />
                    </TableCell>
                  </TableRow>

                  {/* Row 4: Officer - Full Width */}
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: "0.875rem", sm: "1rem" }, whiteSpace: "nowrap", pr: 1 }}>
                      Officer
                    </TableCell>
                    <TableCell colSpan={3}>
                      <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                    </TableCell>
                  </TableRow>

                  {/* Row 5: Next Hearing Date - Full Width */}
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: "0.875rem", sm: "1rem" }, whiteSpace: "nowrap", pr: 1 }}>
                      Next Hearing Date
                    </TableCell>
                    <TableCell colSpan={3}>
                      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1 }}>
                        <TextField fullWidth size="small" placeholder="__/__/____" InputProps={{ sx: { height: 35 } }} />
                        <TextField fullWidth size="small" placeholder="10:00 AM" InputProps={{ sx: { height: 35 } }} />
                      </Box>
                    </TableCell>
                  </TableRow>

                  {/* Row 6: Remark - Full Width */}
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: { xs: "0.875rem", sm: "1rem" }, whiteSpace: "nowrap", pr: 1 }}>
                      Remark
                    </TableCell>
                    <TableCell colSpan={3}>
                      <TextField fullWidth multiline rows={3} InputProps={{ sx: { minHeight: 80 } }} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* Action Buttons */}
            <Box
              sx={{
                mt: 3,
                backgroundColor: "#f5f5f5",
                py: 2,
                px: { xs: 2, sm: 0 },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button variant="contained" sx={{ textTransform: "none", width: { xs: "100%", sm: "auto" } }}>
                Save
              </Button>

              <Button
                variant="outlined"
                color="inherit"
                sx={{ textTransform: "none", width: { xs: "100%", sm: "auto" } }}
                onClick={() => setShowForm(false)}
              >
                Close
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#e74c3c",
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Close Hearing
              </Button>
            </Box>

            {/* Right Side Info Box */}
            <Box
              sx={{
                border: "1px solid #ccc",
                p: 2,
                mt: 3,
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", gap: { xs: 4, sm: 18 }, flexWrap: "wrap" }}>
                <Typography>Label</Typography>
                <Typography>Label</Typography>
              </Box>
              <Box sx={{ pt: 1 }}>
                <Typography>Label</Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}