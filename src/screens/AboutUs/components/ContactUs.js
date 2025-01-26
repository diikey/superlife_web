import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    from_contact: "",
    to_name: "info.superlifeqatar@gmail.com",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [messageLen, setMessageLen] = useState(0);

  useEffect(() => {
    if (status !== "") {
      alert(status);
      setStatus("");
      setIsLoading(false);
    }
  }, [status]);

  useEffect(() => {
    if (isLoading) {
      sendMessage();
    }
  }, [isLoading]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "from_contact" && value.length >= 9) {
      value = value.substring(0, 8);
    }
    setFormData({ ...formData, [name]: value });
    // if (name === "message") {
    //   setMessageLen(value.length);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const sendMessage = () => {
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // EmailJS Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // EmailJS Template ID
        formData,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY } // EmailJs Public Key
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
            from_contact: "",
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setStatus("Failed to send message. Please try again.");
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <Box sx={{ p: 4, textAlign: "center", backgroundColor: "#f8f9fa" }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        Contact Us
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: "600px", mx: "auto", textAlign: "left" }}
      >
        <TextField
          label="Name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Email"
          name="from_email"
          type="email"
          value={formData.from_email}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          required
        />
        <Box
          sx={{
            mb: 2,
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ mr: 1 }}>+974</Typography>
          <TextField
            label="Contact No."
            name="from_contact"
            type="number"
            value={formData.from_contact}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2 }}
          required
          // slotProps={{ htmlInput: { maxLength: 255 } }}
        />
        {/* <Typography variant="body2" sx={{ justifySelf: "end", mb: 2 }}>
          {messageLen + " / 255"}
        </Typography> */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Typography>Send Message</Typography>
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
