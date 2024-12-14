import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionExample = () => {
  const [expanded, setExpanded] = useState(false);

  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',     
        minHeight: '100vh',         
        
      }}
    >
      <div style={{ width: '80%' }}> 
        {[...Array(8)].map((_, index) => {
          const panelId = `panel${index + 1}`;
          return (
            <Accordion
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}
              key={panelId}
              sx={{
                marginBottom: '30px', 
                background: '#f3f3f5',
                backdropFilter: 'blur(10px)',
                padding: '15px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: '#017297', 
                      backgroundColor: 'rgba(1,114,151,20%)', 
                      borderRadius: '50%', 
                      padding: '6px', 
                      
                    }}
                  />
                }
                aria-controls={`${panelId}-content`}
                id={`${panelId}-header`}
              >
                <Typography sx={{ color: '#017297', fontSize: '32px' }}>
                  Do you over customer support?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#017297', fontSize: '28px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos sapiente repellat similique ipsum magnam veritatis doloremque assumenda laboriosam volupta.
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionExample;
