import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Menu,
  Twitter,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Paper,
  styled,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef } from "react";

import appbarlogo from "../../assets/appbar-logo.png";
import appbarlogosmall from "../../assets/appbar-logo-small.png";
import stc30 from "../../assets/stc30.png";

const GradientImage = styled("div")(({ theme, image }) => ({
  position: "relative",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",

  ":after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
  },
}));

const styles = {
  productBox: {
    position: "relative",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#edfdf8",
    py: { xs: 5, md: 0 },
  },
  productInsideBox: {
    zIndex: 1,
    color: "black",
    justifyItems: "center",
  },
};

const App = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const sectionRefs = {
    products: useRef(null),
    testimonies: useRef(null),
    contactUs: useRef(null),
  };

  const testimonies = [
    {
      quote: "This product changed my life! Highly recommend to everyone.",
      author: "John Doe",
    },
    {
      quote: "Excellent quality and amazing customer service.",
      author: "Jane Smith",
    },
    {
      quote: "Best purchase I've ever made. 5 stars!",
      author: "Alice Johnson",
    },
  ];

  const goToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "white" }}>
          <Box component={"div"} sx={{ flexGrow: 1 }}>
            <img
              src={isSmallScreen ? appbarlogosmall : appbarlogo}
              alt="appbarlogo"
              style={{
                width: isSmallScreen ? "100px" : "300px",
                height: "auto",
              }}
            />
          </Box>
          {isSmallScreen ? (
            <IconButton size="large" edge="start" aria-label="menu">
              <Menu />
            </IconButton>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={() => {
                  goToSection("products");
                }}
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Products
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  goToSection("testimonies");
                }}
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Testimonies
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  goToSection("contactUs");
                }}
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Contact Us
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Image Section */}
        <GradientImage image="https://via.placeholder.com/1920x1080" />

        {/* Welcome Text */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
            zIndex: 1,
            color: "black",
          }}
        >
          <Typography variant="body1">Welcome to</Typography>
          <Typography variant="h2" gutterBottom>
            Superlife Wellness Trading Qatar
          </Typography>
          <Typography variant="body1">
            Explore our products, read customer testimonials, and contact us for
            any inquiries.
          </Typography>
        </Box>
      </Box>

      {/* Products Section */}
      <Box
        ref={sectionRefs.products}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Product 1 */}
        <Box sx={styles.productBox}>
          <img
            src={stc30}
            alt="product1"
            style={{ width: "100%", height: "70%", objectFit: "contain" }}
          />
          <Box sx={styles.productInsideBox}>
            <Typography variant="h6">STC30 - Superlife Total Care</Typography>
            <Button
              onClick={() => {}}
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#008053",
              }}
            >
              View Product
            </Button>
          </Box>
        </Box>

        {/* Product 2 */}
        <Box sx={[styles.productBox, { backgroundColor: "#fff4f0" }]}>
          <img
            src={stc30}
            alt="product1"
            style={{ width: "100%", height: "70%", objectFit: "contain" }}
          />
          <Box sx={styles.productInsideBox}>
            <Typography variant="h6">STC30 - Superlife Total Care</Typography>
            <Button
              onClick={() => {}}
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#c52c29",
              }}
            >
              View Product
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Testimonies Section */}
      <Box ref={sectionRefs.testimonies} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Customer Testimonies
        </Typography>
        {/* <Carousel> */}
        {testimonies.map((testimony, index) => (
          <Paper key={index} sx={{ p: 4, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              "{testimony.quote}"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              - {testimony.author}
            </Typography>
          </Paper>
        ))}
        {/* </Carousel> */}
      </Box>

      {/* Contact Us Section */}
      <Box ref={sectionRefs.contactUs} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Name" variant="outlined" required />
          <TextField label="Email" variant="outlined" type="email" required />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "#f8f9fa",
          p: 4,
          textAlign: "center",
          borderTop: "1px solid #ddd",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4">Contact</Typography>
            <Typography variant="body1" gutterBottom>
              Address: 123 Main Street, Cityville, Country
            </Typography>
            <Typography variant="body1" gutterBottom>
              Contact Number: +123 456 7890
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: contact@company.com
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4">Follow us</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <IconButton href="#" color="primary" aria-label="Facebook">
                <FacebookOutlined />
              </IconButton>
              <IconButton href="#" color="primary" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton href="#" color="primary" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton href="#" color="primary" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
