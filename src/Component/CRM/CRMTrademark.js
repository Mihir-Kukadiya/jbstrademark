import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Menu,
  MenuItem,
  Typography,
  FormControlLabel,
  Checkbox,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import Sidebar from "../../Global/Sidebar";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const imgURL = "https://admin.madaliya.com/Photos/default_image.png";

// FIXED TOPBAR
const Topbar = ({ onAdd }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "stretch", md: "center" },
          justifyContent: "space-between",
          gap: { xs: 2, md: 0 },
        }}
      >
        {/* LEFT */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "stretch", sm: "center" }, gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2196F3",
              textTransform: "none",
              px: 3,
              width: { xs: "100%", sm: "auto" },
            }}
            onClick={onAdd}
          >
            Add New TradeMark
          </Button>

          <Typography fontSize={14} sx={{ alignSelf: { xs: "flex-start", sm: "center" } }}>
            <b>Total:</b> 0
          </Typography>
        </Box>

        {/* RIGHT FILTERS */}
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
            defaultValue="All"
            sx={{ minWidth: { xs: "calc(50% - 4px)", sm: 90 }, flexGrow: { xs: 1, sm: 0 } }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Accepted">Accepted</MenuItem>
            <MenuItem value="Formalities Chk Fail">
              Formalities Chk Fail
            </MenuItem>
            <MenuItem value="Marked for Exam">Marked for Exam</MenuItem>
            <MenuItem value="Objected">Objected</MenuItem>
            <MenuItem value="Opposed">Opposed</MenuItem>
            <MenuItem value="Rectification Filed">Rectification Filed</MenuItem>
            <MenuItem value="Send To Vienna Codification">
              Send To Vienna Codification
            </MenuItem>
            <MenuItem value="Accepted & Advertised">
              Accepted & Advertised
            </MenuItem>
            <MenuItem value="Formalities Chk Pass">
              Formalities Chk Pass
            </MenuItem>
            <MenuItem value="Registered">Registered</MenuItem>
            <MenuItem value="Advertised bef acc">Advertised bef acc</MenuItem>
          </Select>

          <Select
            size="small"
            defaultValue="All"
            sx={{ minWidth: { xs: "calc(50% - 4px)", sm: 90 }, flexGrow: { xs: 1, sm: 0 } }}
          >
            <MenuItem value="All">All</MenuItem>
          </Select>

          <Select
            size="small"
            defaultValue="Active"
            sx={{ minWidth: { xs: "calc(50% - 4px)", sm: 90 }, flexGrow: { xs: 1, sm: 0 } }}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Deleted">Deleted</MenuItem>
          </Select>

          <Select
            size="small"
            defaultValue="Entry"
            sx={{ minWidth: { xs: "calc(50% - 4px)", sm: 90 }, flexGrow: { xs: 1, sm: 0 } }}
          >
            <MenuItem value="Entry">Entry</MenuItem>
            <MenuItem value="Updated">Updated</MenuItem>
          </Select>

          <Button
            variant="contained"
            sx={{ minWidth: { xs: "calc(50% - 4px)", sm: 40 }, flexGrow: { xs: 1, sm: 0 }, backgroundColor: "#42A5F5" }}
          >
            <SearchIcon />
          </Button>

          <Button
            variant="contained"
            endIcon={<ArrowDropDownIcon />}
            sx={{ backgroundColor: "#8e24aa", textTransform: "none", minWidth: { xs: "calc(50% - 4px)", sm: "auto" }, flexGrow: { xs: 1, sm: 0 } }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            Action
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem>Check Live Status</MenuItem>
            <MenuItem>Check Hearing</MenuItem>
            <MenuItem>Export Excel</MenuItem>
            <MenuItem>Whatsapp Message</MenuItem>
            <MenuItem>Whatsapp Status</MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box sx={{ mt: 1, borderBottom: "1px solid #e0e0e0" }} />
    </>
  );
};

// FORM SECTION WITH TABLE LAYOUT
const TrademarkForm = ({ onCancel }) => {
  return (
    <Box sx={{ mt: 3, overflow: "auto" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: { xs: "100%", sm: 650 } }}>
          <TableBody>
            {/* Row 1 */}
            <TableRow>
              <TableCell sx={{ fontWeight: 600, width: { xs: "30%", sm: "15%" } }}>
                Account Name
              </TableCell>
              <TableCell sx={{ width: { xs: "70%", sm: "35%" } }}>
                <TextField
                  size="small"
                  select
                  defaultValue="N/A"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                >
                  <MenuItem value="N/A">N/A</MenuItem>
                </TextField>
              </TableCell>
              <TableCell sx={{ fontWeight: 600, width: { xs: "30%", sm: "15%" }, display: { xs: "none", md: "table-cell" } }}>
                Entry Date
              </TableCell>
              <TableCell sx={{ width: { xs: "70%", sm: "35%" }, display: { xs: "none", md: "table-cell" } }}>
                <TextField
                  type="date"
                  size="small"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                />
              </TableCell>
            </TableRow>

            {/* Entry Date - Mobile Only */}
            <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
              <TableCell sx={{ fontWeight: 600, width: "30%" }}>
                Entry Date
              </TableCell>
              <TableCell sx={{ width: "70%" }}>
                <TextField
                  type="date"
                  size="small"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                />
              </TableCell>
            </TableRow>

            {/* Row 2 */}
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>TradeMark</TableCell>
              <TableCell>
                <TextField
                  size="small"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                />
              </TableCell>
              <TableCell sx={{ fontWeight: 600, display: { xs: "none", md: "table-cell" } }}>Class</TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                <TextField
                  size="small"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                />
              </TableCell>
            </TableRow>

            {/* Class - Mobile Only */}
            <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
              <TableCell sx={{ fontWeight: 600 }}>Class</TableCell>
              <TableCell>
                <TextField
                  size="small"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                />
              </TableCell>
            </TableRow>

            {/* Row 3 */}
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>App No</TableCell>
              <TableCell>
                <TextField
                  size="small"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                />
              </TableCell>
              <TableCell sx={{ fontWeight: 600, display: { xs: "none", md: "table-cell" } }}>Status</TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                <TextField
                  size="small"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                />
              </TableCell>
            </TableRow>

            {/* Status - Mobile Only */}
            <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              <TableCell>
                <TextField
                  size="small"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                />
              </TableCell>
            </TableRow>

            {/* Row 4 - Full Width */}
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Class Description</TableCell>
              <TableCell colSpan={3}>
                <TextField
                  multiline
                  rows={2}
                  fullWidth
                  InputProps={{ sx: { minHeight: 60 } }}
                />
              </TableCell>
            </TableRow>

            {/* Row 5 - Full Width */}
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Other Description</TableCell>
              <TableCell colSpan={3}>
                <TextField
                  multiline
                  rows={2}
                  fullWidth
                  InputProps={{ sx: { minHeight: 60 } }}
                />
              </TableCell>
            </TableRow>

            {/* Row 6 */}
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Alert</TableCell>
              <TableCell>
                <TextField
                  size="small"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                />
              </TableCell>
              <TableCell sx={{ fontWeight: 600, display: { xs: "none", md: "table-cell" } }}>Publish Details</TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                <TextField
                  size="small"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                />
              </TableCell>
            </TableRow>

            {/* Publish Details - Mobile Only */}
            <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
              <TableCell sx={{ fontWeight: 600 }}>Publish Details</TableCell>
              <TableCell>
                <TextField
                  size="small"
                  fullWidth
                  InputProps={{ sx: { height: 35 } }}
                />
              </TableCell>
            </TableRow>

            {/* Row 7 - Images */}
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Logo</TableCell>
              <TableCell colSpan={3}>
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 2, sm: 3 },
                    flexWrap: "wrap",
                    py: 2,
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  {[
                    "Select Photo",
                    "Select Application",
                    "Select Receipt",
                    "Select Certificate",
                  ].map((label, i) => (
                    <Box key={i} sx={{ textAlign: "center", width: { xs: "calc(50% - 8px)", sm: 180 }, maxWidth: 180 }}>
                      <Box
                        sx={{
                          width: "100%",
                          height: { xs: 120, sm: 140 },
                          border: "1px solid #ccc",
                          mb: 1,
                          backgroundColor: "#f9f9f9",
                        }}
                      >
                        <img
                          src={imgURL}
                          alt="preview"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ fontSize: { xs: 9, sm: 10 }, flex: 1 }}
                        >
                          {label}
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          sx={{ fontSize: { xs: 9, sm: 10 }, flex: 1 }}
                        >
                          Remove
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </TableCell>
            </TableRow>

            {/* Row 8 - Follow Up */}
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Follow Up Date</TableCell>
              <TableCell>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1 }}>
                  <TextField
                    type="date"
                    size="small"
                    sx={{ flex: 1 }}
                    InputProps={{ sx: { height: 35 } }}
                  />
                  <TextField
                    size="small"
                    placeholder="00:00 AM"
                    sx={{ flex: 1 }}
                    InputProps={{ sx: { height: 35 } }}
                  />
                </Box>
              </TableCell>
              <TableCell sx={{ fontWeight: 600, display: { xs: "none", md: "table-cell" } }}>Remark</TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="eg. Call again for fee"
                  multiline
                  rows={2}
                  InputProps={{ sx: { minHeight: 60 } }}
                />
              </TableCell>
            </TableRow>

            {/* Remark - Mobile Only */}
            <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
              <TableCell sx={{ fontWeight: 600 }}>Remark</TableCell>
              <TableCell>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="eg. Call again for fee"
                  multiline
                  rows={2}
                  InputProps={{ sx: { minHeight: 60 } }}
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
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Send Status Whatsapp"
          sx={{ mr: { xs: 0, sm: 2 } }}
        />

        <Button variant="contained" sx={{ textTransform: "none", width: { xs: "100%", sm: "auto" } }}>
          Save
        </Button>

        <Button
          variant="outlined"
          color="inherit"
          sx={{ textTransform: "none", width: { xs: "100%", sm: "auto" } }}
          onClick={onCancel}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

// MAIN PAGE
export default function TrademarkPage() {
  const [showForm, setShowForm] = useState(false);
  const [sidebarWidth, setSidebarWidth] = React.useState(240);

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
        <Topbar onAdd={() => setShowForm(true)} />

        {showForm && <TrademarkForm onCancel={() => setShowForm(false)} />}
      </Box>
    </>
  );
}