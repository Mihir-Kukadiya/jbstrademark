import { Box, Container, TextField } from "@mui/material";
import logo from "../Assets/Images/logo.png";
import React, { useState } from "react";
import { Button, Typography, Paper, Grid } from "@mui/material";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    brandName: "",
    productName: "",
    yearsOld: "",
    referenceBy: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.fullName = formData.fullName ? "" : "Required";
    temp.contact =
      formData.contact.length === 10 ? "" : "Enter valid 10 digit number";
    temp.brandName = formData.brandName ? "" : "Required";
    temp.productName = formData.productName ? "" : "Required";
    temp.yearsOld = formData.yearsOld ? "" : "Required";
    temp.referenceBy = formData.referenceBy ? "" : "Required";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("Submitted!");
  };

  return (
    <Box>
      <Box sx={{ backgroundColor: "#F6F6F6" }}>
        <Container>
          <Box
            sx={{
              fontSize: { xs: 20, sm: 28 },
              color: "#34495E",
              display: "flex",
              justifyContent: "center",
              textAlign: { xs: "center", sm: "center" },
              wordSpacing: 2,
              letterSpacing: 1,
              pt: 3,
              px: { xs: 2, sm: 0 },
            }}
          >
            Get Started With Your Trademark Journey
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <img src={logo} style={{ height: 80, width: 150 }}></img>
          </Box>

          <Box sx={{ p: 3, maxWidth: 410, mx: "auto" }}>
            <Paper sx={{ p: 3 }} elevation={2}>
              <form onSubmit={handleSubmit}>
                {/* ---------- Full Name ---------- */}
                <Typography mb={0.5} sx={{ color: "#34495E", fontSize: 14 }}>
                  Full Name
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Eg. Patel & Sons"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                  size="small"
                />

                {/* ---------- Contact ---------- */}
                <Typography
                  mt={2}
                  mb={0.5}
                  sx={{ color: "#34495E", fontSize: 14 }}
                >
                  Contact Number
                </Typography>
                <TextField
                  fullWidth
                  placeholder="98989898"
                  name="contact"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  error={!!errors.contact}
                  helperText={errors.contact}
                  size="small"
                  inputProps={{ maxLength: 10 }}
                />

                {/* ---------- Brand Name ---------- */}
                <Typography
                  mt={2}
                  mb={0.5}
                  sx={{ color: "#34495E", fontSize: 14 }}
                >
                  Your Brand's Name (તમારો બ્રાન્ડ નું નામ)
                </Typography>
                <TextField
                  fullWidth
                  name="brandName"
                  value={formData.brandName}
                  onChange={(e) =>
                    setFormData({ ...formData, brandName: e.target.value })
                  }
                  error={!!errors.brandName}
                  helperText={errors.brandName}
                  size="small"
                />

                {/* ---------- Product ---------- */}
                <Typography
                  mt={2}
                  mb={0.5}
                  sx={{ color: "#34495E", fontSize: 14 }}
                >
                  Product or Service Name (તમે જે વસ્તુ અથવા સેવા વેચતા હોય
                  તેનું નામ)
                </Typography>
                <TextField
                  fullWidth
                  name="productName"
                  value={formData.productName}
                  onChange={(e) =>
                    setFormData({ ...formData, productName: e.target.value })
                  }
                  error={!!errors.productName}
                  helperText={errors.productName}
                  size="small"
                />

                {/* ---------- Years Old ---------- */}
                <Typography
                  mt={2}
                  mb={0.5}
                  sx={{ color: "#34495E", fontSize: 14 }}
                >
                  How many years old / New? (કેટલા સમયથી નામનો ઉપયોગ કરો છો / આ
                  નામથી નવો ધંધો શરૂ કરી રહ્યા છો?) :
                </Typography>
                <TextField
                  fullWidth
                  name="yearsOld"
                  value={formData.yearsOld}
                  onChange={(e) =>
                    setFormData({ ...formData, yearsOld: e.target.value })
                  }
                  error={!!errors.yearsOld}
                  helperText={errors.yearsOld}
                  size="small"
                />

                {/* ---------- Reference ---------- */}
                <Typography
                  mt={2}
                  mb={0.5}
                  sx={{ color: "#34495E", fontSize: 14 }}
                >
                  Reference By (અમારો રેફરન્સ તમને કોની પાસેથી મળ્યો?)
                </Typography>
                <TextField
                  fullWidth
                  name="referenceBy"
                  value={formData.referenceBy}
                  onChange={(e) =>
                    setFormData({ ...formData, referenceBy: e.target.value })
                  }
                  error={!!errors.referenceBy}
                  helperText={errors.referenceBy}
                  size="small"
                />

                {/* Note */}
                <Typography fontSize={15} mt={2} sx={{ color: "#222222" }}>
                  Your details are safe with us. We don't share your data with
                  anyone.
                </Typography>

                {/* Buttons */}
                {/* <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Button sx={{backgroundColor:"#F0F0F0",mt:3,color:"#34495E"}}>Help</Button>
            <Button sx={{backgroundColor:"#32c5d2",mt:3,color:"#FFFFFF"}}>Submit</Button>
           </Box> */}
                <Grid
                  container
                  mt={2}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Grid item>
                    <Button sx={{ backgroundColor: "#F0F0F0", color: "black" }}>
                      Help
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ backgroundColor: "#32c5d2", color: "#FFFFFF" }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Register;
