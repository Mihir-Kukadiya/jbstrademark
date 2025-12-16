import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
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

const Receipt = () => {
  const [showForm, setShowForm] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [showAddTable, setShowAddTable] = useState(false);
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    setShowAddTable(true);
    setRows((prev) => [
      ...prev,
      {
        voucher: "N/A",
        no1: "0",
        no2: "0",
        date: "11/12/2025",
        pendingAmt: "0.00",
        desc: "",
        receivedAmt: "0.00",
      },
    ]);
  };

  const handleDeleteRow = (idx) => {
    setRows((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <>
      <Sidebar onWidthChange={(width) => setSidebarWidth(width)} />

      <Box
        component="main"
        sx={{
          p: { xs: 1, sm: 2 },
          ml: `${sidebarWidth}px`,
          transition: "all 0.3s ease",
          mt: "64px",
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
          <Button
            variant="contained"
            onClick={() => setShowForm(true)}
            sx={{
              backgroundColor: "#2196F3",
              textTransform: "none",
              px: 3,
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Add New Receipt
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
              defaultValue="All"
              sx={{
                minWidth: { xs: "calc(50% - 4px)", sm: 90 },
                flexGrow: { xs: 1, sm: 0 },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Received">Received</MenuItem>
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
              <MenuItem value={5000}>5000</MenuItem>
              <MenuItem value={10000}>10000</MenuItem>
              <MenuItem value={99999}>99999</MenuItem>
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
          </Box>
        </Box>

        <Box sx={{ mt: 1, borderBottom: "1px solid #e0e0e0" }} />

        {/* ---------------- FORM WITH TABLE ---------------- */}
        {showForm && (
          <>
            <Box sx={{ mt: 3, overflow: "auto" }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: { xs: 300, sm: 650 } }}>
                  <TableBody>
                    {/* Row 1: Cust/Supp & Pay AC */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        Cust/Supp
                      </TableCell>
                      <TableCell>
                        <Select
                          fullWidth
                          size="small"
                          defaultValue="select account"
                        >
                          <MenuItem value="select account">Select Account</MenuItem>
                          <MenuItem value="CASH IN HAND">CASH IN HAND</MenuItem>
                          <MenuItem value="BANK">BANK AC</MenuItem>
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
                        Pay AC
                      </TableCell>
                      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                        <Select
                          fullWidth
                          size="small"
                          defaultValue="CASH IN HAND"
                        >
                          <MenuItem value="CASH IN HAND">CASH IN HAND</MenuItem>
                          <MenuItem value="BANK">BANK AC</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>

                    {/* Pay AC - Mobile Only */}
                    <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                      <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                        Pay AC
                      </TableCell>
                      <TableCell>
                        <Select
                          fullWidth
                          size="small"
                          defaultValue="CASH IN HAND"
                        >
                          <MenuItem value="CASH IN HAND">CASH IN HAND</MenuItem>
                          <MenuItem value="BANK">BANK AC</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>

                    {/* Row 2: Date (Full Width) */}
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                        }}
                      >
                        Date
                      </TableCell>
                      <TableCell colSpan={3}>
                        <TextField
                          fullWidth
                          type="date"
                          size="small"
                          defaultValue="2025-12-11"
                          InputProps={{ sx: { height: 35 } }}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* ---------------- VOUCHER TABLE ---------------- */}
            {showAddTable && (
              <Box sx={{ width: "100%", mt: 3, overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    minWidth: "900px",
                    borderCollapse: "collapse",
                    fontSize: "14px",
                    backgroundColor: "#F7F9FC",
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#ECF0F1",
                        height: 40,
                        color: "#34495E",
                      }}
                    >
                      <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                        Sr
                      </th>
                      <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                        VOUCHER
                      </th>
                      <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                        #
                      </th>
                      <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                        ONo
                      </th>
                      <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                        DATE
                      </th>
                      <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                        PENDING_AMT
                      </th>
                      <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                        DESC
                      </th>
                      <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                        RECEIVED_AMT
                      </th>
                      <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                        Del
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {rows.map((row, idx) => (
                      <tr key={idx} style={{ height: 45 }}>
                        <td
                          style={{
                            border: "1px solid #ccc",
                            padding: "4px",
                            textAlign: "center",
                          }}
                        >
                          {idx + 1}
                        </td>
                        <td style={{ border: "1px solid #ccc", padding: "4px" }}>
                          <TextField
                            size="small"
                            defaultValue={row.voucher}
                            fullWidth
                          />
                        </td>
                        <td style={{ border: "1px solid #ccc", padding: "4px" }}>
                          <TextField
                            size="small"
                            defaultValue={row.no1}
                            fullWidth
                          />
                        </td>
                        <td style={{ border: "1px solid #ccc", padding: "4px" }}>
                          <TextField
                            size="small"
                            defaultValue={row.no2}
                            fullWidth
                          />
                        </td>
                        <td style={{ border: "1px solid #ccc", padding: "4px" }}>
                          <TextField
                            size="small"
                            defaultValue={row.date}
                            fullWidth
                          />
                        </td>
                        <td style={{ border: "1px solid #ccc", padding: "4px" }}>
                          <TextField
                            size="small"
                            defaultValue={row.pendingAmt}
                            fullWidth
                          />
                        </td>
                        <td style={{ border: "1px solid #ccc", padding: "4px" }}>
                          <TextField multiline size="small" fullWidth />
                        </td>
                        <td style={{ border: "1px solid #ccc", padding: "4px" }}>
                          <TextField
                            size="small"
                            defaultValue={row.receivedAmt}
                            fullWidth
                          />
                        </td>
                        <td
                          style={{
                            border: "1px solid #ccc",
                            padding: "4px",
                            textAlign: "center",
                            color: "red",
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                          onClick={() => handleDeleteRow(idx)}
                        >
                          Del
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            )}

            {/* ---------------- DISCOUNT + ADD BUTTON ---------------- */}
            <Box sx={{ mt: 3 }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: { xs: 300, sm: 650 } }}>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          whiteSpace: "nowrap",
                          pr: 1,
                          width: { xs: "30%", sm: "20%" },
                        }}
                      >
                        Discount
                      </TableCell>
                      <TableCell colSpan={3}>
                        <TextField
                          fullWidth
                          size="small"
                          defaultValue="0"
                          InputProps={{ sx: { height: 35 } }}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#2196F3",
                    textTransform: "none",
                    width: { xs: "100%", sm: "auto" },
                  }}
                  onClick={handleAddRow}
                >
                  Add
                </Button>
              </Box>
            </Box>

            {/* ---------------- SAVE / CANCEL ---------------- */}
            <Box
              sx={{
                backgroundColor: "#F5F5F5",
                mt: 3,
                p: 2.5,
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
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
                onClick={() => {
                  setShowForm(false);
                  setShowAddTable(false);
                  setRows([]);
                }}
                variant="outlined"
                color="inherit"
                sx={{
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                }}
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

export default Receipt;