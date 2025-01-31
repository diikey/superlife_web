import {
  FacebookOutlined,
  Instagram,
  // LinkedIn,
  Menu as MenuIcon,
  // Twitter,
  // KeyboardArrowDown,
  // KeyboardArrowUp,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router";

import appbarlogo from "../../assets/appbar-logo.png";
import appbarlogosmall from "../../assets/appbar-logo-small.png";
import HomeScreen from "../Home";
import ProductScreen from "../Products";
import { RouteName } from "./utils/general_utils";
import AboutUsScreen from "../AboutUs";

const App = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const sectionRefs = {
    products: "products",
    testimonies: "testimonies",
    aboutUs: "aboutUs",
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // const [communityAnchorEl, setCommunityAnchorEl] = useState(null);
  // const communityMenuOpen = Boolean(communityAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (section) => {
    setAnchorEl(null);
    if (typeof section == "string") {
      navigate(RouteName.HomeScreen, { state: { scrollTo: section } }); // Navigate to HomePage and pass the section name
    }
  };

  return (
    <Box>
      {/* App Bar */}
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ backgroundColor: "white", py: 2 }}>
          <Box component={"div"} sx={{ flexGrow: 1 }}>
            <NavLink to={RouteName.HomeScreen}>
              <img
                src={isSmallScreen ? appbarlogosmall : appbarlogo}
                alt="appbarlogo"
                style={{
                  width: isSmallScreen ? "100px" : "300px",
                  height: "auto",
                }}
              />
            </NavLink>
          </Box>
          {isSmallScreen ? (
            <IconButton size="large" edge="start" aria-label="menu">
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                color="inherit"
              >
                <MenuIcon />
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose(sectionRefs.products);
                  }}
                >
                  Products
                </MenuItem>
                {/* <MenuItem
                  onClick={(event) =>
                    setCommunityAnchorEl(
                      communityMenuOpen ? null : event.currentTarget
                    )
                  }
                >
                  Community{" "}
                  {communityMenuOpen ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDown />
                  )}
                </MenuItem>
                {communityMenuOpen && (
                  <>
                    <MenuItem
                      sx={{ pl: 4 }}
                      onClick={() => {
                        setCommunityAnchorEl(null);
                        handleClose(sectionRefs.members);
                      }}
                    >
                      Members
                    </MenuItem>
                    <MenuItem
                      sx={{ pl: 4 }}
                      onClick={() => {
                        setCommunityAnchorEl(null);
                        handleClose(sectionRefs.testimonies);
                      }}
                    >
                      Testimonies
                    </MenuItem>
                  </>
                )} */}
                <MenuItem
                  onClick={() => {
                    handleClose(sectionRefs.aboutUs);
                  }}
                >
                  About Us
                </MenuItem>
              </Menu>
            </IconButton>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={() => {
                  handleClose(sectionRefs.products);
                }}
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Products
              </Button>
              {/* <Button
                id="community-menu-button"
                aria-controls={communityMenuOpen ? "community-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={communityMenuOpen ? "true" : undefined}
                onClick={(event) => setCommunityAnchorEl(event.currentTarget)}
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Community{" "}
                {communityMenuOpen ? (
                  <KeyboardArrowUp />
                ) : (
                  <KeyboardArrowDown />
                )}
              </Button>
              <Menu
                id="community-menu"
                anchorEl={communityAnchorEl}
                open={communityMenuOpen}
                onClose={() => setCommunityAnchorEl(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem
                  onClick={() => {
                    setCommunityAnchorEl(null);
                    // handleClose(sectionRefs.members);
                  }}
                >
                  Members
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setCommunityAnchorEl(null);
                    handleClose(sectionRefs.testimonies);
                  }}
                >
                  Testimonies
                </MenuItem>
              </Menu> */}
              <Button
                color="inherit"
                onClick={() => {
                  handleClose(sectionRefs.aboutUs);
                }}
                sx={{ color: "black", fontWeight: "bold" }}
              >
                About Us
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Routes */}
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path={RouteName.ProductScreen} element={<ProductScreen />} />
        <Route path={RouteName.AboutUsScreen} element={<AboutUsScreen />} />
      </Routes>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "#231e21",
          p: 4,
          textAlign: "center",
          borderTop: "1px solid #ddd",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { sm: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight={700}>
              Contact
            </Typography>
            <Typography variant="body2" gutterBottom>
              Address: Office No. 33 3rd Floor, Building 20, St. 940 Al
              Khalidiya St, Doha
            </Typography>
            <Typography variant="body2" gutterBottom>
              Contact Number: +974 6651 9531
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: info@superlifeqatar.com
            </Typography>
          </Box>
          <Box sx={{ flex: 1, mt: { sm: 2, md: 0 } }}>
            <Typography variant="h4" fontWeight={700}>
              Follow us
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <IconButton
                href="http://facebook.com/SuperLifeWorldQatar"
                aria-label="Facebook"
                sx={{ color: "#c52c29" }}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security enhancement
              >
                <FacebookOutlined />
              </IconButton>
              {/* <IconButton
                href="#"
                aria-label="Twitter"
                sx={{ color: "#c52c29" }}
              >
                <Twitter />
              </IconButton> */}
              <IconButton
                href="https://www.instagram.com/superlifeqatar/"
                aria-label="Instagram"
                sx={{ color: "#c52c29" }}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security enhancement
              >
                <Instagram />
              </IconButton>
              {/* <IconButton
                href="#"
                aria-label="LinkedIn"
                sx={{ color: "#c52c29" }}
              >
                <LinkedIn />
              </IconButton> */}
            </Box>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          &copy; {new Date().getFullYear()} SuperLife Qatar. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
