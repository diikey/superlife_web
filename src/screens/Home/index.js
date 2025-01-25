import {
  Box,
  Button,
  Paper,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef } from "react";

import stc30 from "../../assets/stc30.png";
import superRoot from "../../assets/super-root.png";
import reception from "../../assets/reception.jpeg";
import stc30presentation from "../../assets/superlife-product-presentation.png";
import superRootPresentation from "../../assets/super-root-product-presentation.jpg";
import { useLocation, useNavigate } from "react-router";
import { RouteName } from "../App/utils/general_utils";
import welcomeImg from "../../assets/welcome-img.jpeg";
import openingVid from "../../assets/videos/superlife-welness-trading.mp4";
import ReactPlayer from "react-player";

const GradientImage = styled("div")(({ theme, image }) => ({
  position: "relative",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "60%",
  left: "40%",

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

const HomeScreen = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const sectionRefs = {
    products: useRef(null),
    testimonies: useRef(null),
    aboutUs: useRef(null),
  };
  const location = useLocation();
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

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;
      sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Box>
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
        <GradientImage image={welcomeImg} />

        {/* Welcome Text */}
        <Box
          sx={{
            position: "absolute",
            top: "60%",
            px: "10%",
            transform: "translateY(-50%)",
            zIndex: 1,
            color: "black",
            width: { sx: "55%", md: "40%" },
          }}
        >
          <Typography variant="body1">Welcome to</Typography>
          <Typography
            variant={isSmallScreen ? "h3" : "h2"}
            gutterBottom
            fontWeight={700}
            color="#c52c28"
          >
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
          <Box
            sx={{
              width: "30%", // Percentage width relative to parent box
              aspectRatio: "1 / 1", // Makes a square container (adjust ratio as needed)
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={stc30}
              alt="product1"
              sx={{
                width: "100%", // Fill the container
                height: "100%",
                objectFit: "contain", // Maintain the aspect ratio of the image
              }}
            />
          </Box>
          <Box sx={styles.productInsideBox}>
            <Typography variant="h6">STC30 - Superlife Total Care</Typography>
            <Button
              onClick={() => {
                navigate(RouteName.ProductScreen, {
                  state: { presentation: stc30presentation },
                });
              }}
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
        <Box
          sx={[
            styles.productBox,
            { backgroundColor: "#fff4f0", width: "100%" },
          ]}
        >
          <Box
            sx={{
              width: "30%",
              aspectRatio: "1 / 1", // Same ratio for consistency
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={superRoot}
              alt="product2"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain", // Maintain the aspect ratio of the image
              }}
            />
          </Box>
          <Box sx={styles.productInsideBox}>
            <Typography variant="h6">
              SuperRoot - Superlife Root Care
            </Typography>
            <Button
              onClick={() => {
                navigate(RouteName.ProductScreen, {
                  state: { presentation: superRootPresentation },
                });
              }}
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
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          color="#c52c28"
          fontWeight={700}
        >
          Customer Testimonials
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

      {/* ABOUT US SECTION */}
      <ReactPlayer
        ref={sectionRefs.aboutUs}
        url={openingVid}
        controls
        config={{
          file: {
            attributes: {
              onContextMenu: (e) => e.preventDefault(),
              controlsList: "nodownload",
            },
          },
        }}
        width="80%"
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          justifySelf: "center",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          // height: "100vh", // Optional: Full viewport height
          p: 4,
        }}
      >
        {/* Left Side (Image) */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "300px", md: "auto" },
          }}
        >
          <Box
            component="img"
            src={reception}
            alt="About Us"
            sx={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Box>

        {/* Right Side (Content) */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            color="#c52c28"
            fontWeight={700}
          >
            About Us
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome to SuperLife Wellness Trading Qatar, established on October
            23, 2023. Our mission is to raise awareness about the benefits of
            Oral Plant-Based Stem Cell Therapy among the people of Qatar. We are
            dedicated to promoting natural healing, youth, and longevity through
            our innovative products.
          </Typography>
          <Button
            onClick={() => {
              navigate(RouteName.AboutUsScreen);
            }}
            sx={{
              color: "white",
              fontWeight: "bold",
              backgroundColor: "#c52c29",
              width: "100%",
              mt: 2,
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
