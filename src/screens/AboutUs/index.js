import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid2,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import CEO1 from "../../assets/members/lai-tek-kean.jpg"; // Replace with your image paths
import CEO2 from "../../assets/members/paul-nair.jpg";
import Member1 from "../../assets/members/dennis.jpg";
import Member2 from "../../assets/members/vhanch.jpg";
import ContactUs from "./components/ContactUs";

const AboutUsScreen = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <Box>
      {/* Section 1: About Us / Story */}
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          py: 4,
          px: { sx: "5%", md: "10%" },
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 2, fontWeight: "bold" }}
          fontWeight={700}
          color="#c52c28"
        >
          Life is Super!
        </Typography>
        <Typography paragraph>
          Welcome to SuperLife Wellness Trading Qatar, established on October
          23, 2023. Our mission is to raise awareness about the benefits of Oral
          Plant-Based Stem Cell Therapy among the people of Qatar. We are
          dedicated to promoting natural healing, youth, and longevity through
          our innovative products.
        </Typography>
        <Typography paragraph>
          At SuperLife Wellness Trading Qatar, we believe in the power of nature
          to enhance health and well-being. Our flagship product, STC30,
          harnesses the potential of plant-based stem cells to support the
          body's natural healing processes. Whether you're dealing with chronic
          conditions or simply seeking to maintain your vitality, our products
          offer a natural and effective solution.
        </Typography>
        <Typography paragraph>
          Our journey began with a commitment to improve the quality of life for
          individuals and families in Qatar. We are passionate about educating
          our community on the benefits of stem cell therapy and providing
          access to high-quality, scientifically-backed products that can make a
          real difference.
        </Typography>
        <Typography paragraph>
          Join us on this journey towards better health and well-being.
          Together, we can achieve a healthier, more vibrant future.
        </Typography>
      </Box>

      {/* Section 2: Team Members */}
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ mb: 2, fontWeight: "bold" }}
          fontWeight={700}
          color="#c52c28"
        >
          Founders
        </Typography>
        <Grid2 container spacing={4} justifyContent="center">
          {/* Member 1 */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia component="img" height="300" image={CEO1} alt="CEO" />
              <CardContent>
                <Typography variant="h6" color="#c52c28">
                  Mr. Lai Tek Kean
                </Typography>
                <Typography variant="subtitle1">CEO / Co-Founder</Typography>
              </CardContent>
            </Card>
          </Grid2>

          {/* Member 2 */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia component="img" height="300" image={CEO2} alt="CEO2" />
              <CardContent>
                <Typography variant="h6" color="#c52c28">
                  Mr. Paul Nair
                </Typography>
                <Typography variant="subtitle1">CFO / Co-Founder</Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Box>

      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ mb: 2, fontWeight: "bold" }}
          fontWeight={700}
          color="#c52c28"
        >
          Qatar Agency Owner
        </Typography>
        <Grid2 container spacing={4} justifyContent="center">
          {/* Member 3 */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={Member1}
                alt="Team Member"
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="h6" color="#c52c28">
                  Mr. Dennis Ongmanchi
                </Typography>
                <Typography variant="subtitle1">
                  Chairman & President
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          {/* Member 4 */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={Member2}
                alt="Team Member"
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="h6" color="#c52c28">
                  Mrs. Evangeline Ongmanchi
                </Typography>
                <Typography variant="subtitle1">Operations Manager</Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Box>

      {/* Section 3: Contact Us */}
      <ContactUs />
    </Box>
  );
};

export default AboutUsScreen;
