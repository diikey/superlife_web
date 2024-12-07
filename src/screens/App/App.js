import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

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
      "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%)",
  },
}));

const App = () => {
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

  return (
    <Box>
      {/* App Bar */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyLogo
          </Typography>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Testimonies</Button>
          <Button color="inherit">Contact Us</Button>
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
          <Typography variant="h2" gutterBottom>
            Welcome to Our Website
          </Typography>
          <Typography variant="body1">
            Explore our products, read customer testimonials, and contact us for
            any inquiries.
          </Typography>
        </Box>
      </Box>

      {/* Products Section */}
      <Typography variant="h4" gutterBottom sx={{ p: 4 }}>
        Products
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          px: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Product 1 */}
        <Card sx={{ maxWidth: 345, mb: { xs: 2, md: 0 } }}>
          <CardMedia
            component="img"
            height="200"
            image="https://via.placeholder.com/300x200"
            alt="Product 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Product 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a description of Product 1. It has amazing features and
              benefits for you to enjoy.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              sx={{ ml: "auto" }}
            >
              Order Now
            </Button>
          </CardActions>
        </Card>

        {/* Product 2 */}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://via.placeholder.com/300x200"
            alt="Product 2"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Product 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a description of Product 2. Discover how it can improve
              your life today.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              sx={{ ml: "auto" }}
            >
              Order Now
            </Button>
          </CardActions>
        </Card>
      </Box>

      {/* Testimonies Section */}
      <Box sx={{ p: 4 }}>
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
      <Box sx={{ p: 4 }}>
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
