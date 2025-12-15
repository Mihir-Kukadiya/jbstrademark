import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Sidebar from "../Global/Sidebar";

const Branch = () => {
  const [branches, setBranches] = useState([
    {
      id: 12,
      name: "Madaliya Associates",
      title: "Madaliya Associates",
      email: "",
      mobile: "Mobile No. 9408157945",
      website: "www.madaliya.com",
      address:
        "402, Jivandeep Complex, Hirabaug Circle, Varachha, Surat-395006. PAN : BWAPM5400M",
    },
    {
      id: 11,
      name: "Mehul C. Madaliya (Advocate)",
      title: "Mehul Madaliya (Adv.)",
      email: "mehulmadalia@gmail.com",
      mobile: "9408157945, PAN NO.: BWAPM5400M",
      website: "www.madaliya.com",
      address:
        "402, Jivandeep Complex, Hirabaug Circle, Opp. Roman Point, Varachha, Surat-395006.",
    },
    {
      id: 10,
      name: "Buysell Trademark",
      title: "",
      email: "",
      mobile: "",
      website: "",
      address: "",
    },
    {
      id: 9,
      name: "TURANT TM",
      title: "",
      email: "",
      mobile: "",
      website: "",
      address: "",
    },
  ]);

  const [editingBranch, setEditingBranch] = useState(null);
  const [sidebarWidth, setSidebarWidth] = React.useState(240);

  const handleEdit = (branch) => setEditingBranch(branch);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingBranch({ ...editingBranch, [name]: value });
  };

  const handleUpdate = () => {
    setBranches(
      branches.map((b) => (b.id === editingBranch.id ? editingBranch : b))
    );
    setEditingBranch(null);
  };

  const handleCancel = () => setEditingBranch(null);

  return (
    <>
      <Sidebar onWidthChange={(width) => setSidebarWidth(width)} />
      <Box
        sx={{
          p: 2,
          ml: `${sidebarWidth}px`,
          transition: "all 0.3s ease",
          mt: "64px",
        }}
      >
        {/* ------------------- TOPBAR ------------------- */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
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
          >
            Add New Product
          </Button>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              width: { xs: "100%", sm: "auto" },
              justifyContent: "flex-end",
            }}
          >
            <TextField
              placeholder="Search..."
              size="small"
              sx={{ minWidth: { xs: "100%", sm: 180 } }}
            />

            <Button
              variant="contained"
              sx={{ minWidth: 30, backgroundColor: "#4A90E2" }}
            >
              .
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 1, borderBottom: "1px solid #e0e0e0" }} />

        {/* ------------------- TABLE ------------------- */}
        {!editingBranch && (
          <TableContainer component={Paper} sx={{ mt: 3, overflowX: "auto" }}>
            <Table minWidth={900}>
              <TableHead>
                <TableRow>
                  {[
                    "",
                    "Id",
                    "Name",
                    "Title",
                    "Email",
                    "Mobile",
                    "Website",
                    "Address",
                    "Edit",
                    "Delete",
                  ].map((h, i) => (
                    <TableCell key={i} sx={{ fontWeight: 700 }}>
                      {h === "" ? <Checkbox /> : h}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {branches.map((branch) => (
                  <TableRow key={branch.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{branch.id}</TableCell>
                    <TableCell>{branch.name}</TableCell>
                    <TableCell>{branch.title}</TableCell>
                    <TableCell>{branch.email}</TableCell>
                    <TableCell>{branch.mobile}</TableCell>
                    <TableCell>{branch.website}</TableCell>
                    <TableCell>{branch.address}</TableCell>
                    <TableCell
                      sx={{ color: "blue", cursor: "pointer" }}
                      onClick={() => handleEdit(branch)}
                    >
                      Edit
                    </TableCell>
                    <TableCell sx={{ color: "red", cursor: "pointer" }}>
                      Delete
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* ------------------- EDIT FORM ------------------- */}
        {editingBranch && (
          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: '500px' }}
            >
              {["name", "title", "mobile", "email", "website"].map((field) => (
                <Grid item xs={12} key={field}>
                  <TextField
                    fullWidth
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    name={field}
                    value={editingBranch[field]}
                    onChange={handleChange}
                    size="small"
                  />
                </Grid>
              ))}

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={editingBranch.address}
                  onChange={handleChange}
                  size="small"
                  multiline
                  rows={2}
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                mt: 3,
                display: "flex",
                gap: 2,
                justifyContent: "center",
                backgroundColor: "#f5f5f5",
                p: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3598DC", textTransform: "none" }}
                onClick={handleUpdate}
              >
                Update
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{ textTransform: "none" }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Branch;
