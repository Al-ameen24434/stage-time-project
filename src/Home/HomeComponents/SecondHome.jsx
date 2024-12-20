import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import "@fontsource/poppins";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventIcon from "@mui/icons-material/Event";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import "./SecondHome.css";
import "aos/dist/aos.css"; 
import AOS from "aos";

const steps = [
  { text: "Create an Account", icon: <AccountCircleIcon sx={{ fontSize: 50 }} /> },
  { text: "Join an Event", icon: <EventIcon sx={{ fontSize: 50 }} /> },
  { text: "Submit Requirements", icon: <AssignmentTurnedInIcon sx={{ fontSize: 50 }} /> },
  { text: "Get Shortlisted", icon: <PlaylistAddCheckIcon sx={{ fontSize: 50 }} /> },
  { text: "Get the Highest Votes", icon: <HowToVoteIcon sx={{ fontSize: 50 }} /> },
];

const styles = {
  typography: { fontFamily: "Poppins, Arial, sans-serif" },
  headerTitle: { fontSize: 50, fontFamily: "Poppins, Arial, sans-serif" },
  headerBody: { fontSize: 28, fontFamily: "Poppins, Arial, sans-serif" },
  stepText: { fontSize: 24, fontFamily: "Poppins, Arial, sans-serif" },
};

const HowItWorks = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  useEffect(() => {
      AOS.init({ duration: 1000, once: true }); 
    }, []);

  return (
    <Box className="container" sx={styles.typography} data-aos="fade-right">
      <div className="header">
        <Typography variant="h4" sx={styles.headerTitle} gutterBottom>
          How it works
        </Typography>
        <Typography variant="body1" sx={styles.headerBody}>
          Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet. Ut placerat
          dolor massa metus quisque sodales semper. Hac donec vulputate pharetra augue eu congue.
        </Typography>
      </div>

      <Grid container spacing={3} justifyContent="center" data-aos="fade-up" data-aos-delay="100">
        <Grid item xs={12} md={4} className="steps-list">
          <List>
            {steps.map((step, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => setSelectedStep(index)}
                className="step-item"
              >
                <ListItemButton
                  sx={{
                    backgroundColor: selectedStep === index ? "rgba(0, 0, 0, 0.1)" : "transparent",
                    color: selectedStep === index ? "black" : "rgba(0, 0, 0, 0.54)",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: selectedStep === index ? "black" : "rgba(0, 0, 0, 0.54)",
                    }}
                  >
                    {step.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={step.text}
                    primaryTypographyProps={{ sx: styles.typography }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
                        {/* Clickable Vertical Line */}
              <Box className="vertical-line">
              {steps.map((_, index) => (
                <Box
                  key={index}
                  className={`vertical-line-item ${selectedStep === index ? "selected" : ""}`}
                  onClick={() => setSelectedStep(index)} // Make the vertical line item clickable
                />
              ))}
            </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className="content">
            <Box className="content-icon">{steps[selectedStep].icon}</Box>
            <Typography variant="h5" gutterBottom sx={styles.typography}>
              {steps[selectedStep].text}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={styles.stepText}>
              Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet. Ut
              placerat dolor massa metus quisque sodales semper. Hac donec vulputate pharetra augue
              eu congue.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
