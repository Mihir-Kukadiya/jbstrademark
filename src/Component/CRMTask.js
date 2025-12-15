import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  Menu,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "../Global/Sidebar";

const TaskPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const open = Boolean(anchorEl);

  const handleActionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
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
          mt:  "64px" ,
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        {/* ---------------- TOP BAR ---------------- */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 2, md: 0 },
          }}
        >
          {/* LEFT SIDE */}
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
            Add New Task
          </Button>

          {/* RIGHT SIDE */}
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

            <Select
              size="small"
              defaultValue="Active"
              sx={{
                minWidth: { xs: "calc(50% - 4px)", sm: 90 },
                flexGrow: { xs: 1, sm: 0 },
              }}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Deleted</MenuItem>
            </Select>

            <Select
              size="small"
              defaultValue={20}
              sx={{
                minWidth: { xs: "calc(50% - 4px)", sm: 70 },
                flexGrow: { xs: 1, sm: 0 },
              }}
            >
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
              <MenuItem value={500}>500</MenuItem>
              <MenuItem value={1000}>1000</MenuItem>
            </Select>

            <Button
              variant="contained"
              sx={{
                minWidth: { xs: "calc(50% - 4px)", sm: 40 },
                flexGrow: { xs: 1, sm: 0 },
                backgroundColor: "#42A5F5",
              }}
            >
              <SearchIcon />
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8e24aa",
                textTransform: "none",
                minWidth: { xs: "calc(50% - 4px)", sm: "auto" },
                flexGrow: { xs: 1, sm: 0 },
              }}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleActionClick}
            >
              Action
            </Button>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Send SMS</MenuItem>
              <MenuItem onClick={handleClose}>Send Email</MenuItem>
              <MenuItem onClick={handleClose}>Print</MenuItem>
              {/* <MenuItem onClick={handleClose}>Export Excel</MenuItem> */}
            </Menu>
          </Box>
        </Box>

        <Box sx={{ mt: 1, borderBottom: "1px solid #e0e0e0" }} />

        {/* ---------------- FORM WITH TABLE ---------------- */}
        {showForm && (
          <Box sx={{ mt: 3, overflow: "auto" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: { xs: 300, sm: 650 } }}>
                <TableBody>
                  {/* Row 1: To User & Task Title */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      To User
                    </TableCell>
                    <TableCell>
                      <Select
                        fullWidth
                        size="small"
                        defaultValue="N/A"
                      >
                        <MenuItem value="N/A">N/A</MenuItem>
                        <MenuItem value="User1">TEST</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        display: { xs: "none", md: "table-cell" },
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Task Title
                    </TableCell>
                    <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Task Title - Mobile Only */}
                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      Task Title
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Row 2: Task Comment (Full Width) */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Task Comment
                    </TableCell>
                    <TableCell colSpan={3}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>

                  {/* Row 3: Entry Date & Due Date */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Entry Date
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        type="date"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        display: { xs: "none", md: "table-cell" },
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Due Date
                    </TableCell>
                    <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                      <TextField
                        fullWidth
                        size="small"
                        type="date"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Due Date - Mobile Only */}
                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      Due Date
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        type="date"
                        InputProps={{ sx: { height: 35 } }}
                      />
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
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1e88e5",
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Save
              </Button>

              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#e53935",
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Complete Task
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default TaskPage;