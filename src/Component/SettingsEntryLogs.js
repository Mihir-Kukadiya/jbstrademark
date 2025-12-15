import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import Sidebar from "../Global/Sidebar";
import { ArrowDropDown } from "@mui/icons-material";

const Entrylogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [sidebarWidth, setSidebarWidth] = React.useState(240);

  // All entry log data from the 5 pages
  const allEntryLogs = [
    // Page 1 entries
    {
      id: 40335,
      date: "13-Dec-2025 10:24",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "152.59.32.139",
      user: "TEST",
    },
    {
      id: 40334,
      date: "13-Dec-2025 10:24",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Log.aspx",
      type: "Login",
      id2: 0,
      ip: "152.59.32.139",
      user: "TEST",
    },
    {
      id: 40330,
      date: "13-Dec-2025 10:02",
      page: "https://admin.madaliya.com/Login.aspx",
      type: "Login",
      id2: 0,
      ip: "152.59.36.165",
      user: "TEST",
    },
    {
      id: 40328,
      date: "13-Dec-2025 10:00",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Log.aspx",
      type: "Login",
      id2: 0,
      ip: "152.59.36.165",
      user: "TEST",
    },
    {
      id: 40327,
      date: "13-Dec-2025 09:54",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "152.59.32.79",
      user: "TEST",
    },
    {
      id: 40326,
      date: "13-Dec-2025 09:54",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "152.59.32.79",
      user: "TEST",
    },
    {
      id: 40325,
      date: "13-Dec-2025 09:50",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "152.59.32.79",
      user: "TEST",
    },
    {
      id: 40324,
      date: "13-Dec-2025 09:48",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/SaleInvoice.aspx",
      type: "Login",
      id2: 0,
      ip: "152.59.32.79",
      user: "TEST",
    },
    {
      id: 40323,
      date: "13-Dec-2025 09:46",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "152.59.32.79",
      user: "TEST",
    },
    {
      id: 40322,
      date: "12-Dec-2025 20:04",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.161.20",
      user: "TEST",
    },

    // Page 2 entries
    {
      id: 40316,
      date: "12-Dec-2025 15:26",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "49.36.88.30",
      user: "TEST",
    },
    {
      id: 40313,
      date: "12-Dec-2025 14:52",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.161.20",
      user: "TEST",
    },
    {
      id: 40312,
      date: "12-Dec-2025 14:48",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.161.20",
      user: "TEST",
    },
    {
      id: 40310,
      date: "12-Dec-2025 10:50",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.161.20",
      user: "TEST",
    },
    {
      id: 40306,
      date: "12-Dec-2025 09:39",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.161.20",
      user: "TEST",
    },
    {
      id: 40305,
      date: "12-Dec-2025 09:39",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.161.20",
      user: "TEST",
    },
    {
      id: 40304,
      date: "11-Dec-2025 21:18",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "42.108.197.170",
      user: "TEST",
    },
    {
      id: 40303,
      date: "11-Dec-2025 17:25",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.161.20",
      user: "TEST",
    },
    {
      id: 40302,
      date: "11-Dec-2025 13:47",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.161.20",
      user: "TEST",
    },
    {
      id: 40294,
      date: "11-Dec-2025 09:13",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.161.20",
      user: "TEST",
    },

    // Page 3 entries
    {
      id: 40293,
      date: "11-Dec-2025 09:09",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.161.20",
      user: "TEST",
    },
    {
      id: 40292,
      date: "10-Dec-2025 20:46",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "42.108.196.122",
      user: "TEST",
    },
    {
      id: 40290,
      date: "10-Dec-2025 18:43",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40288,
      date: "10-Dec-2025 17:46",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40287,
      date: "10-Dec-2025 17:37",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Task.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40285,
      date: "10-Dec-2025 17:26",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Inquiry.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40271,
      date: "10-Dec-2025 15:01",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Reminder.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40270,
      date: "10-Dec-2025 14:06",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40268,
      date: "10-Dec-2025 10:03",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40267,
      date: "10-Dec-2025 10:03",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },

    // Page 4 entries
    {
      id: 40266,
      date: "10-Dec-2025 09:53",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40265,
      date: "09-Dec-2025 21:02",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "42.108.138.155",
      user: "TEST",
    },
    {
      id: 40264,
      date: "09-Dec-2025 20:44",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40263,
      date: "09-Dec-2025 20:20",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Account.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40262,
      date: "09-Dec-2025 19:59",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Dashboard.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40261,
      date: "09-Dec-2025 19:59",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40260,
      date: "09-Dec-2025 19:59",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Dashboard.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40259,
      date: "09-Dec-2025 19:54",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40258,
      date: "09-Dec-2025 19:48",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40257,
      date: "09-Dec-2025 19:48",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },

    // Page 5 entries
    {
      id: 40252,
      date: "09-Dec-2025 13:53",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40251,
      date: "09-Dec-2025 12:38",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40249,
      date: "09-Dec-2025 11:58",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40248,
      date: "09-Dec-2025 10:38",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40247,
      date: "09-Dec-2025 10:37",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/DashboardFinance.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40246,
      date: "09-Dec-2025 10:24",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40245,
      date: "09-Dec-2025 10:23",
      page: "https://admin.madaliya.com/login.aspx",
      type: "Login",
      id2: 0,
      ip: "171.61.164.134",
      user: "TEST",
    },
    {
      id: 40244,
      date: "09-Dec-2025 10:19",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "49.36.90.220",
      user: "TEST",
    },
    {
      id: 40243,
      date: "09-Dec-2025 10:18",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "49.43.35.83",
      user: "TEST",
    },
    {
      id: 40241,
      date: "09-Dec-2025 10:18",
      page: "https://admin.madaliya.com/login.aspx?url=https://admin.madaliya.com/Branch.aspx",
      type: "Login",
      id2: 0,
      ip: "49.43.35.83",
      user: "TEST",
    },
  ];

  const totalPages = Math.ceil(allEntryLogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = allEntryLogs.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleFirstPage = () => setCurrentPage(1);
  const handleLastPage = () => setCurrentPage(totalPages);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(1, prev - 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));

  return (
    <>
      <Sidebar onWidthChange={(width) => setSidebarWidth(width)} />
      <Box
        sx={{
          overflowX: "hidden",
          boxSizing: "border-box",
          p: 2,
          ml: `${sidebarWidth}px`,
          transition: "all 0.3s ease",
          mt: "64px",
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2196F3",
              textTransform: "none",
              px: 3,
              width: { xs: "100%", md: "auto" },
            }}
          >
            Entry Logs
          </Button>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: { xs: 1, sm: 1.5 },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <TextField
              placeholder="Search..."
              value={searchTerm1}
              onChange={(e) => setSearchTerm1(e.target.value)}
              size="small"
              sx={{
                minWidth: { xs: "100%", md: 180 },
                background: "#fff",
              }}
            />
            <TextField
              placeholder="Search..."
              size="small"
              value={searchTerm2}
              onChange={(e) => setSearchTerm2(e.target.value)}
              sx={{
                minWidth: { xs: "100%", md: 180 },
                background: "#fff",
              }}
            />
            <Box
              sx={{
                display: "flex",
                gap: { xs: 1, sm: 1.5 },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <FormControl
                size="small"
                sx={{
                  minWidth: { xs: "100%", sm: 70 },
                  backgroundColor: "white",
                  flex: { xs: 1, sm: "none" },
                }}
              >
                <Select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(e.target.value);
                    setCurrentPage(1);
                  }}
                  size="small"
                  defaultValue="50"
                  sx={{
                    minWidth: { xs: "48%", sm: 90 },
                    flex: { xs: 1, sm: "0 0 auto" },
                  }}
                >
                  <MenuItem value="10">10</MenuItem>
                  <MenuItem value="25">25</MenuItem>
                  <MenuItem value="50">50</MenuItem>
                  <MenuItem value="100">100</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                sx={{
                  minWidth: 30,
                  backgroundColor: "#4A90E2",
                  px: 1,
                  display: { xs: "none", sm: "inline-flex" },
                }}
              >
                .
              </Button>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 1, borderBottom: "1px solid #e0e0e0" }} />

        {/* Table Section */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            border: "1px solid #ddd",
            mt: 3,
            width: "100%",
            overflowX: "auto",
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
            },
          }}
        >
          <Table
            sx={{ minWidth: { xs: 600, sm: 650 }, width: "100%" }}
            aria-label="entry logs table"
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell padding="checkbox" sx={{ py: 0.5 }}>
                  <Checkbox size="small" />
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    py: 0.5,
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  Id
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    py: 0.5,
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    py: 0.5,
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  Page
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    py: 0.5,
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  Type
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    py: 0.5,
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  Id
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    py: 0.5,
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  Ip
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    py: 0.5,
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  User
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentPageData.map((log) => (
                <TableRow
                  key={log.id}
                  sx={{
                    height: "32px",
                    "&:nth-of-type(odd)": {
                      backgroundColor: "#fafafa",
                    },
                    "&:nth-of-type(even)": {
                      backgroundColor: "#ffffff",
                    },
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
                >
                  <TableCell padding="checkbox" sx={{ py: 0 }}>
                    <Checkbox size="small" />
                  </TableCell>
                  <TableCell
                    sx={{ py: 0.5, fontSize: { xs: "12px", sm: "14px" } }}
                  >
                    {log.id}
                  </TableCell>
                  <TableCell
                    sx={{ py: 0.5, fontSize: { xs: "12px", sm: "14px" } }}
                  >
                    {log.date}
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: { xs: 200, sm: 400 },
                      wordBreak: "break-all",
                      py: 0.5,
                      fontSize: { xs: "12px", sm: "14px" },
                    }}
                  >
                    {log.page}
                  </TableCell>
                  <TableCell
                    sx={{ py: 0.5, fontSize: { xs: "12px", sm: "14px" } }}
                  >
                    {log.type}
                  </TableCell>
                  <TableCell
                    sx={{ py: 0.5, fontSize: { xs: "12px", sm: "14px" } }}
                  >
                    {log.id2}
                  </TableCell>
                  <TableCell
                    sx={{ py: 0.5, fontSize: { xs: "12px", sm: "14px" } }}
                  >
                    {log.ip}
                  </TableCell>
                  <TableCell
                    sx={{ py: 0.5, fontSize: { xs: "12px", sm: "14px" } }}
                  >
                    {log.user}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "stretch", md: "center" },
            mt: 2,
            p: { xs: 1, sm: 1.5 },
            backgroundColor: "#f5f5f5",
            border: "1px solid #ddd",
            borderTop: "none",
            borderRadius: "0 0 4px 4px",
            gap: { xs: 1.5, md: 0 },
          }}
        >
          {/* PAGE INFO */}
          <Typography
            variant="body2"
            sx={{
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "12px", sm: "14px" },
              order: { xs: 1, md: 1 },
            }}
          >
            Page {currentPage} of {totalPages}
          </Typography>

          {/* PAGINATION BUTTONS */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 0.5, sm: 1 },
              flexWrap: "wrap",
              order: { xs: 2, md: 2 },
            }}
          >
            <IconButton
              onClick={handleFirstPage}
              disabled={currentPage === 1 || totalPages === 1}
              size="small"
              sx={{
                border: "1px solid #ddd",
                minWidth: 28,
                height: 28,
                fontSize: 12,
              }}
            >
              {"<<"}
            </IconButton>

            <IconButton
              onClick={handlePrevPage}
              disabled={currentPage === 1 || totalPages === 1}
              size="small"
              sx={{
                border: "1px solid #ddd",
                minWidth: 28,
                height: 28,
                fontSize: 12,
              }}
            >
              {"<"}
            </IconButton>

            {totalPages > 1 &&
              (() => {
                const maxVisible = 5;
                const pages = [];

                if (totalPages <= maxVisible) {
                  for (let i = 1; i <= totalPages; i++) pages.push(i);
                } else {
                  if (currentPage <= 3) {
                    pages.push(1, 2, 3, 4, "ellipsis", totalPages);
                  } else if (currentPage >= totalPages - 2) {
                    pages.push(1, "ellipsis");
                    for (let i = totalPages - 3; i <= totalPages; i++)
                      pages.push(i);
                  } else {
                    pages.push(
                      1,
                      "ellipsis",
                      currentPage - 1,
                      currentPage,
                      currentPage + 1,
                      "ellipsis",
                      totalPages
                    );
                  }
                }

                return pages.map((page, index) =>
                  page === "ellipsis" ? (
                    <Typography key={index} sx={{ px: 1, fontSize: 12 }}>
                      …
                    </Typography>
                  ) : (
                    <Button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      variant={currentPage === page ? "contained" : "outlined"}
                      sx={{
                        minWidth: 28,
                        height: 28,
                        p: 0,
                        fontSize: 12,
                        backgroundColor:
                          currentPage === page ? "#3598DC" : "transparent",
                        color: currentPage === page ? "#fff" : "#333",
                        borderColor: "#ddd",
                      }}
                    >
                      {page}
                    </Button>
                  )
                );
              })()}

            <IconButton
              onClick={handleNextPage}
              disabled={currentPage === totalPages || totalPages === 1}
              size="small"
              sx={{
                border: "1px solid #ddd",
                minWidth: 28,
                height: 28,
                fontSize: 12,
              }}
            >
              {">"}
            </IconButton>

            <IconButton
              onClick={handleLastPage}
              disabled={currentPage === totalPages || totalPages === 1}
              size="small"
              sx={{
                border: "1px solid #ddd",
                minWidth: 28,
                height: 28,
                fontSize: 12,
              }}
            >
              {">>"}
            </IconButton>
          </Box>

          {/* ITEMS PER PAGE */}
          <FormControl
            size="small"
            sx={{
              minWidth: { xs: "100%", md: 80 },
              order: { xs: 3, md: 3 },
              backgroundColor: "white",
            }}
          >
            <Select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(e.target.value);
                setCurrentPage(1);
              }}
              sx={{
                height: 32,
                fontSize: 12,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ddd",
                },
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Entrylogs;
