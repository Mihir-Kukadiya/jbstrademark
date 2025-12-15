import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
  Paper,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "../Global/Sidebar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";

export default function SaleInvoicePage() {
  const [showForm, setShowForm] = useState(false);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleActionClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const [rows, setRows] = useState([
    { id: 1, product: "TRADEMARK", qty: 1, rate: 0, total: 0, desc: "" },
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        product: "TRADEMARK",
        qty: 1,
        rate: 0,
        total: 0,
        desc: "",
      },
    ]);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter((r) => r.id !== id));
  };

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
        {/* TOPBAR */}
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
            Add New Sale Invoice
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
              defaultValue="Active"
              sx={{
                minWidth: { xs: "calc(50% - 4px)", sm: 90 },
                flexGrow: { xs: 1, sm: 0 },
              }}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
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

            <Button
              variant="contained"
              endIcon={<ArrowDropDownIcon />}
              sx={{
                backgroundColor: "#8e24aa",
                textTransform: "none",
                minWidth: { xs: "calc(50% - 4px)", sm: "auto" },
                flexGrow: { xs: 1, sm: 0 },
              }}
              onClick={handleActionClick}
            >
              Action
            </Button>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Monthly Excel</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box sx={{ mt: 1, borderBottom: "1px solid #e0e0e0" }} />

        {/* CUSTOMER FORM MODAL WITH TABLE */}
        <Dialog
          open={showCustomerForm}
          onClose={() => setShowCustomerForm(false)}
          maxWidth="lg"
          fullWidth
          fullScreen={window.innerWidth < 900}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "2px solid #E0E0E0",
              pb: 2,
            }}
          >
            <Typography sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 600 }}>
              Account / Register
            </Typography>
            <IconButton
              onClick={() => setShowCustomerForm(false)}
              sx={{ color: "#000" }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ mt: 2 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: { xs: 300, sm: 650 } }}>
                <TableBody>
                  {/* Row 1: Account & Entry Date */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Account
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
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
                      Entry Date
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      Entry Date
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Row 2: Group & Balance */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Group
                    </TableCell>
                    <TableCell>
                      <Select
                        fullWidth
                        size="small"
                        defaultValue="SUNDRY DEBTORS RECEIVABLE"
                      >
                        <MenuItem value="SUNDRY DEBTORS RECEIVABLE">
                          CASH IN HAND
                        </MenuItem>
                        <MenuItem value="BANK ACCOUNT">BANK ACCOUNT</MenuItem>
                        <MenuItem value="BANK OD ACCOUNT">
                          BANK OD ACCOUNT
                        </MenuItem>
                        <MenuItem value="DEPOSITES(ASSETS)">
                          DEPOSITES(ASSETS)
                        </MenuItem>
                        <MenuItem value="LOANS & ADVANCES(ASSETS)">
                          LOANS & ADVANCES(ASSETS)
                        </MenuItem>
                        <MenuItem value="PROVISIONS">PROVISIONS</MenuItem>
                        <MenuItem value="RESERVES & SURPLUS">
                          RESERVES & SURPLUS
                        </MenuItem>
                        <MenuItem value="SECURED LOANS">SECURED LOANS</MenuItem>
                        <MenuItem value="STOCK IN HAND">STOCK IN HAND</MenuItem>
                        <MenuItem value="SUNDRY CREDITORS PAYABLE">
                          SUNDRY CREDITORS PAYABLE
                        </MenuItem>
                        <MenuItem value="UNSECURED LOANS">
                          UNSECURED LOANS
                        </MenuItem>
                        <MenuItem value="SALARY EXPENSES">
                          SALARY EXPENSES
                        </MenuItem>
                        <MenuItem value="SALES PRODUCTS">
                          SALES PRODUCTS
                        </MenuItem>
                        <MenuItem value="DUTIES & TAXES (LIABILITIES)">
                          DUTIES & TAXES (LIABILITIES)
                        </MenuItem>
                        <MenuItem value="DUTIES & TAXES (ASSETS)">
                          DUTIES & TAXES (ASSETS)
                        </MenuItem>
                        <MenuItem value="BY OTHER INCOME">
                          BY OTHER INCOME
                        </MenuItem>
                        <MenuItem value="OTHER EXPENSES">
                          OTHER EXPENSES
                        </MenuItem>
                        <MenuItem value="OFFICE EXPENSES">
                          OFFICE EXPENSES
                        </MenuItem>
                        <MenuItem value="OFFICE INCOMES">
                          OFFICE INCOMES
                        </MenuItem>
                        <MenuItem value="LAND AND BUILDING">
                          LAND AND BUILDING
                        </MenuItem>
                        <MenuItem value="FURNITURE AND FIXTURE">
                          FURNITURE AND FIXTURE
                        </MenuItem>
                        <MenuItem value="MANUFACTURING EXPENSE">
                          MANUFACTURING EXPENSE
                        </MenuItem>
                        <MenuItem value="PURCHASE ACCOUNT">
                          PURCHASE ACCOUNT
                        </MenuItem>
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
                      Balance
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <TextField
                          fullWidth
                          size="small"
                          defaultValue="0"
                          InputProps={{ sx: { height: 35 } }}
                        />
                        <Select fullWidth size="small" defaultValue="Db">
                          <MenuItem value="Db">Db</MenuItem>
                          <MenuItem value="Cr">Cr</MenuItem>
                        </Select>
                      </Box>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      Balance
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <TextField
                          fullWidth
                          size="small"
                          defaultValue="0"
                          InputProps={{ sx: { height: 35 } }}
                        />
                        <Select fullWidth size="small" defaultValue="Db">
                          <MenuItem value="Db">Db</MenuItem>
                          <MenuItem value="Cr">Cr</MenuItem>
                        </Select>
                      </Box>
                    </TableCell>
                  </TableRow>

                  {/* Row 3: Mobile & Email */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Mobile
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <TextField
                          fullWidth
                          size="small"
                          placeholder="eg. Whatsapp"
                          InputProps={{ sx: { height: 35 } }}
                        />
                        <TextField
                          fullWidth
                          size="small"
                          placeholder="eg. 9898989898"
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
                      Email
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      Email
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Row 4: Marriage Date & DOB */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Marriage Date
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="__/__/____"
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
                      DOB
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="__/__/____"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      DOB
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="__/__/____"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Row 5: Reference & Other */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Reference
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Select fullWidth size="small" defaultValue="N/A">
                          <MenuItem value="N/A">N/A</MenuItem>
                        </Select>
                        <TextField
                          fullWidth
                          size="small"
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
                      Other
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      Other
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Row 6: N/A & Area */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Category
                    </TableCell>
                    <TableCell>
                      <Select fullWidth size="small" defaultValue="N/A">
                        <MenuItem value="N/A">N/A</MenuItem>
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
                      Area
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      Area
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Row 7: Address & State */}
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
                      <TextField
                        fullWidth
                        size="small"
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
                      State
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <TextField
                        fullWidth
                        size="small"
                        defaultValue="Gujarat"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      State
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        defaultValue="Gujarat"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Row 8: City & Country */}
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
                      <TextField
                        fullWidth
                        size="small"
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
                      Country
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Select fullWidth size="small" defaultValue="N/A">
                          <MenuItem value="N/A">N/A</MenuItem>
                        </Select>
                        <Select fullWidth size="small" defaultValue="India">
                          <MenuItem value="India">India</MenuItem>
                        </Select>
                      </Box>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      Country
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Select fullWidth size="small" defaultValue="N/A">
                          <MenuItem value="N/A">N/A</MenuItem>
                        </Select>
                        <Select fullWidth size="small" defaultValue="India">
                          <MenuItem value="India">India</MenuItem>
                        </Select>
                      </Box>
                    </TableCell>
                  </TableRow>

                  {/* Row 9: Post Code & Password */}
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
                      <TextField
                        fullWidth
                        size="small"
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
                      Password
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <TextField
                        fullWidth
                        size="small"
                        type="password"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      Password
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        type="password"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* SAVE/CANCEL */}
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
                onClick={() => setShowCustomerForm(false)}
                color="inherit"
                sx={{
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Cancel
              </Button>
            </Box>
          </DialogContent>
        </Dialog>

        {showForm && (
          <Box sx={{ mt: 3, overflow: "auto" }}>
            {/* MAIN SALE INVOICE FORM TABLE */}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: { xs: 300, sm: 650 } }}>
                <TableBody>
                  {/* Row 1: Customer with + Button & Order No */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Customer
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Select fullWidth size="small" defaultValue="N/A">
                          <MenuItem value="N/A">N/A</MenuItem>
                        </Select>
                        <Button
                          variant="contained"
                          sx={{
                            minWidth: 40,
                            height: 35,
                            backgroundColor: "#2196F3",
                            fontSize: 18,
                          }}
                          onClick={() => setShowCustomerForm(true)}
                        >
                          +
                        </Button>
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
                      Order No
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      Order No
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size="small"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Row 2: Entry Date (Full Width) */}
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
                    <TableCell colSpan={3}>
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

            {/* PRODUCT TABLE */}
            <Box sx={{ overflowX: "auto", mt: 2 }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 800, fontSize: "14px" }}>
                  {/* TABLE HEAD */}
                  <TableBody>
                    <TableRow sx={{ background: "#f0f0f0" }}>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          width: "5%",
                          fontWeight: 600,
                        }}
                      >
                        Sr
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          width: "25%",
                          fontWeight: 600,
                        }}
                      >
                        Product / Size
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          width: "10%",
                          fontWeight: 600,
                        }}
                      >
                        Image
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          width: "25%",
                          fontWeight: 600,
                        }}
                      >
                        Description
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          width: "10%",
                          fontWeight: 600,
                        }}
                      >
                        Qty
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          width: "10%",
                          fontWeight: 600,
                        }}
                      >
                        Rate
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          width: "10%",
                          fontWeight: 600,
                        }}
                      >
                        Total
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          width: "5%",
                          fontWeight: 600,
                        }}
                      >
                        Del
                      </TableCell>
                    </TableRow>

                    {/* TABLE ROWS */}
                    {rows.map((row, index) => (
                      <TableRow key={row.id}>
                        {/* Sr */}
                        <TableCell
                          sx={{ border: "1px solid #ccc", textAlign: "center" }}
                        >
                          {index + 1}
                        </TableCell>

                        {/* Product */}
                        <TableCell sx={{ border: "1px solid #ccc" }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 1,
                            }}
                          >
                            <Select fullWidth size="small" value={row.product}>
                              <MenuItem value="TRADEMARK">TRADEMARK</MenuItem>
                              <MenuItem value="N/A">N/A</MenuItem>
                              <MenuItem value="SALE INCOME">
                                SALE INCOME
                              </MenuItem>
                            </Select>

                            <Select fullWidth size="small" defaultValue="N/A">
                              <MenuItem value="TRADEMARK">TRADEMARK</MenuItem>
                              <MenuItem value="N/A">N/A</MenuItem>
                              <MenuItem value="SALE INCOME">
                                SALE INCOME
                              </MenuItem>
                            </Select>

                            <Select
                              fullWidth
                              size="small"
                              defaultValue="SALE INCOME"
                            >
                              <MenuItem value="TRADEMARK">TRADEMARK</MenuItem>
                              <MenuItem value="N/A">N/A</MenuItem>
                              <MenuItem value="SALE INCOME">
                                SALE INCOME
                              </MenuItem>
                            </Select>
                          </Box>
                        </TableCell>

                        {/* Image */}
                        <TableCell
                          sx={{
                            border: "1px solid #ccc",
                            textAlign: "center",
                          }}
                        >
                          <img
                            src="https://admin.madaliya.com/Photos/default_image.png"
                            alt="no"
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: "50%",
                              opacity: 0.8,
                            }}
                          />
                        </TableCell>

                        {/* Description */}
                        <TableCell sx={{ border: "1px solid #ccc" }}>
                          <TextField
                            multiline
                            rows={2}
                            fullWidth
                            size="small"
                          />
                        </TableCell>

                        {/* Qty */}
                        <TableCell sx={{ border: "1px solid #ccc" }}>
                          <TextField
                            fullWidth
                            size="small"
                            defaultValue={row.qty}
                          />
                        </TableCell>

                        {/* Rate */}
                        <TableCell sx={{ border: "1px solid #ccc" }}>
                          <TextField
                            fullWidth
                            size="small"
                            defaultValue={row.rate.toFixed(2)}
                          />
                        </TableCell>

                        {/* Total */}
                        <TableCell sx={{ border: "1px solid #ccc" }}>
                          <TextField
                            fullWidth
                            size="small"
                            defaultValue={row.total.toFixed(2)}
                          />
                        </TableCell>

                        {/* Delete */}
                        <TableCell
                          sx={{
                            border: "1px solid #ccc",
                            textAlign: "center",
                            cursor: "pointer",
                            color: "red",
                            textDecoration: "underline",
                          }}
                          onClick={() => handleDeleteRow(row.id)}
                        >
                          Del
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* ADD NEW ROW BUTTON */}
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#2196F3",
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
              }}
              onClick={handleAddRow}
            >
              Add
            </Button>

            {/* BOTTOM FIELDS TABLE */}
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table sx={{ minWidth: { xs: 300, sm: 650 } }}>
                <TableBody>
                  {/* Discount */}
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

                  {/* Advance */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      Advance
                    </TableCell>
                    <TableCell colSpan={3}>
                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        <Select
                          size="small"
                          defaultValue="CASH IN HAND"
                          sx={{
                            flex: 1,
                            minWidth: { xs: "100%", sm: "200px" },
                          }}
                        >
                          <MenuItem value="CASH IN HAND">CASH IN HAND</MenuItem>
                          <MenuItem value="BANK AC">BANK AC</MenuItem>
                        </Select>
                        <TextField
                          fullWidth
                          size="small"
                          defaultValue="0"
                          sx={{
                            flex: 1,
                            minWidth: { xs: "100%", sm: "200px" },
                          }}
                          InputProps={{ sx: { height: 35 } }}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>

                  {/* User & Outstanding */}
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        whiteSpace: "nowrap",
                        pr: 1,
                      }}
                    >
                      User
                    </TableCell>
                    <TableCell>
                      <Select fullWidth size="small" defaultValue="TEST">
                        <MenuItem value="TEST">TEST</MenuItem>
                        <MenuItem value="N/A">N/A</MenuItem>
                        <MenuItem value="Office1">Office1</MenuItem>
                        <MenuItem value="Shubh">Shubh</MenuItem>
                        <MenuItem value="Mehul">Mehul</MenuItem>
                        <MenuItem value="Suresh">Suresh</MenuItem>
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
                      Outstanding
                    </TableCell>
                    <TableCell
                      sx={{ display: { xs: "none", md: "table-cell" } }}
                    >
                      <TextField
                        fullWidth
                        size="small"
                        defaultValue="0"
                        InputProps={{ sx: { height: 35 } }}
                      />
                    </TableCell>
                  </TableRow>

                  {/* Outstanding - Mobile Only */}
                  <TableRow sx={{ display: { xs: "table-row", md: "none" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      Outstanding
                    </TableCell>
                    <TableCell>
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

            {/* SAVE / CANCEL */}
            <Box
              sx={{
                textAlign: "center",
                mt: 3,
                backgroundColor: "#F5F5F5",
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
          </Box>
        )}
      </Box>
    </>
  );
}
