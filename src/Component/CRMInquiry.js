import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Menu,
  Divider,
  Typography,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import Sidebar from "../Global/Sidebar";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const CRMInquiry = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const open = Boolean(anchorEl);
  const [sidebarWidth, setSidebarWidth] = React.useState(240);

  const handleActionClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Sidebar onWidthChange={(width) => setSidebarWidth(width)} />
      <Box
        sx={{
          p: { xs: 1, sm: 2 },
          ml: `${sidebarWidth}px`,
          transition: "all 0.3s ease",
          mt: "64px",
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        {/* =================== TOP HEADER =================== */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
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
            Add New Inquiry
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

            <Select
              size="small"
              defaultValue="Pending"
              sx={{
                minWidth: { xs: "calc(50% - 4px)", sm: 90 },
                flexGrow: { xs: 1, sm: 0 },
              }}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Done">Done</MenuItem>
            </Select>

            <Select
              size="small"
              defaultValue={50}
              sx={{
                minWidth: { xs: "calc(50% - 4px)", sm: 70 },
                flexGrow: { xs: 1, sm: 0 },
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
              <MenuItem value={500}>500</MenuItem>
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
              <MenuItem onClick={handleClose}>Check live Status</MenuItem>
              <MenuItem onClick={handleClose}>Check Hearing</MenuItem>
              <MenuItem onClick={handleClose}>Export Excel</MenuItem>
              <MenuItem onClick={handleClose}>Whatsapp Message</MenuItem>
              <MenuItem onClick={handleClose}>Whatsapp Status</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box sx={{ mt: 1, borderBottom: "1px solid #e0e0e0" }} />

        {showForm && (
          <>
            {/* =================== INQUIRY FORM TABLE =================== */}
            <Box sx={{ mt: 3, overflow: "auto" }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: { xs: 300, sm: 650 } }}>
                  <TableBody>
                    {/* Row 1: Name & Entry Date */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                          <TextField
                            size="small"
                            placeholder="First"
                            sx={{ flex: 1, minWidth: "80px" }}
                            InputProps={{ sx: { height: 35 } }}
                          />
                          <TextField
                            size="small"
                            placeholder="Middle"
                            sx={{ flex: 1, minWidth: "80px" }}
                            InputProps={{ sx: { height: 35 } }}
                          />
                          <TextField
                            size="small"
                            placeholder="Last"
                            sx={{ flex: 1, minWidth: "80px" }}
                            InputProps={{ sx: { height: 35 } }}
                          />
                        </Box>
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
                        Entry Date
                      </TableCell>
                      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                        <TextField
                          fullWidth
                          size="small"
                          defaultValue="10/12/2025"
                          InputProps={{ sx: { height: 35 } }}
                        />
                      </TableCell>
                    </TableRow>

                    {/* Entry Date - Mobile Only */}
                    <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                        Entry Date
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          size="small"
                          defaultValue="10/12/2025"
                          InputProps={{ sx: { height: 35 } }}
                        />
                      </TableCell>
                    </TableRow>

                    {/* Row 2: Gender & Mobile */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        Gender
                      </TableCell>
                      <TableCell>
                        <Select fullWidth size="small" defaultValue="Male">
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
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
                        Mobile
                      </TableCell>
                      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <TextField
                            size="small"
                            placeholder="Whatsapp"
                            sx={{ flex: 1 }}
                            InputProps={{ sx: { height: 35 } }}
                          />
                          <TextField
                            size="small"
                            placeholder="Number"
                            sx={{ flex: 1 }}
                            InputProps={{ sx: { height: 35 } }}
                          />
                        </Box>
                      </TableCell>
                    </TableRow>

                    {/* Mobile - Mobile Only */}
                    <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                        Mobile
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <TextField
                            size="small"
                            placeholder="Whatsapp"
                            sx={{ flex: 1 }}
                            InputProps={{ sx: { height: 35 } }}
                          />
                          <TextField
                            size="small"
                            placeholder="Number"
                            sx={{ flex: 1 }}
                            InputProps={{ sx: { height: 35 } }}
                          />
                        </Box>
                      </TableCell>
                    </TableRow>

                    {/* Row 3: Email & Parents Phone */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        Email
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
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
                        Parents Phone
                      </TableCell>
                      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                      </TableCell>
                    </TableRow>

                    {/* Parents Phone - Mobile Only */}
                    <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                        Parents Phone
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                      </TableCell>
                    </TableRow>

                    {/* Row 4: Brand's Name & How many years */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        Brand's Name
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
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
                        How many years old / New?
                      </TableCell>
                      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                      </TableCell>
                    </TableRow>

                    {/* How many years - Mobile Only */}
                    <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                        How many years old / New?
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                      </TableCell>
                    </TableRow>

                    {/* Row 5: Product/Service & Reference */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        Product or Service Name
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
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
                        Reference
                      </TableCell>
                      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <Select size="small" defaultValue="N/A" sx={{ width: 120 }}>
                            <MenuItem value="N/A">N/A</MenuItem>
                            <MenuItem value="Friend">Friend</MenuItem>
                            <MenuItem value="Relative">Relative</MenuItem>
                          </Select>
                          <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                        </Box>
                      </TableCell>
                    </TableRow>

                    {/* Reference - Mobile Only */}
                    <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                        Reference
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
                          <Select fullWidth size="small" defaultValue="N/A">
                            <MenuItem value="N/A">N/A</MenuItem>
                            <MenuItem value="Friend">Friend</MenuItem>
                            <MenuItem value="Relative">Relative</MenuItem>
                          </Select>
                          <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                        </Box>
                      </TableCell>
                    </TableRow>

                    {/* Row 6: Marital Status & DOB */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        Marital Status
                      </TableCell>
                      <TableCell>
                        <Select fullWidth size="small" defaultValue="Single">
                          <MenuItem value="Single">Single</MenuItem>
                          <MenuItem value="Married">Married</MenuItem>
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
                        DOB
                      </TableCell>
                      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                        <TextField
                          fullWidth
                          size="small"
                          placeholder="__/__/____"
                          InputProps={{ sx: { height: 35 } }}
                        />
                      </TableCell>
                    </TableRow>

                    {/* DOB - Mobile Only */}
                    <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>DOB</TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          size="small"
                          placeholder="__/__/____"
                          InputProps={{ sx: { height: 35 } }}
                        />
                      </TableCell>
                    </TableRow>

                    {/* Row 7: Remark (Full Width) */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        Remark
                      </TableCell>
                      <TableCell colSpan={3}>
                        <TextField fullWidth size="small" multiline rows={3} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* =================== ADDRESS SECTION =================== */}
            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontSize: { xs: 18, sm: 20 },
                  mb: 2,
                  fontWeight: 600,
                  color: "#34495E",
                }}
              >
                Address
              </Typography>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: { xs: 300, sm: 650 } }}>
                  <TableBody>
                    {/* Row 1: Address & Area */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        Address
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
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
                        Area
                      </TableCell>
                      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                      </TableCell>
                    </TableRow>

                    {/* Area - Mobile Only */}
                    <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>Area</TableCell>
                      <TableCell>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                      </TableCell>
                    </TableRow>

                    {/* Row 2: City & State */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        City
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
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
                        State
                      </TableCell>
                      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                      </TableCell>
                    </TableRow>

                    {/* State - Mobile Only */}
                    <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>State</TableCell>
                      <TableCell>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
                      </TableCell>
                    </TableRow>

                    {/* Row 3: Post Code & Country */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        Post Code
                      </TableCell>
                      <TableCell>
                        <TextField fullWidth size="small" InputProps={{ sx: { height: 35 } }} />
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
                        Country
                      </TableCell>
                      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                        <Select fullWidth size="small" defaultValue="India">
                          <MenuItem value="India">India</MenuItem>
                          <MenuItem value="USA">USA</MenuItem>
                          <MenuItem value="UK">UK</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>

                    {/* Country - Mobile Only */}
                    <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                        Country
                      </TableCell>
                      <TableCell>
                        <Select fullWidth size="small" defaultValue="India">
                          <MenuItem value="India">India</MenuItem>
                          <MenuItem value="USA">USA</MenuItem>
                          <MenuItem value="UK">UK</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

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
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default CRMInquiry;