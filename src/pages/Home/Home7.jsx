import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqSection() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState('panel1');

  const faqData = [
    { id: 'panel1', key: 'q1' },
    { id: 'panel2', key: 'q2' },
    { id: 'panel3', key: 'q3' },
    { id: 'panel4', key: 'q4' },
    { id: 'panel5', key: 'q5' }
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-full min-h-screen bg-[#222222] text-white py-16 px-4 md:px-24 flex justify-center items-start font-sans">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold tracking-wide mb-8 text-left border-b border-zinc-700 pb-6">
          {t("faq.title")}
        </h2>

        {faqData.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            disableGutters
            elevation={0}
            square
            sx={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              borderBottom: '1px solid #444444',
              '&:before': { display: 'none' }, 
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon 
                  sx={{ 
                    color: '#d4af37', 
                    fontSize: '1.8rem',
                    transform: expanded === item.id ? 'rotate(0deg)' : 'rotate(-90deg)', 
                    transition: 'transform 0.3s ease'
                  }} 
                />
              }
              aria-controls={`${item.id}d-content`}
              id={`${item.id}d-header`}
              sx={{
                padding: '16px 0',
                '& .MuiAccordionSummary-content': { margin: 0 },
                '& .MuiAccordionSummary-expandIconWrapper': { transform: 'none !important' }
              }}
            >
              <Typography className="text-lg md:text-xl font-normal text-zinc-200 hover:text-white transition-colors duration-200">
                {t(`faq.items.${item.key}.q`)}
              </Typography>
            </AccordionSummary>
            
            <AccordionDetails sx={{ padding: '0 0 24px 0' }}>
              <Typography className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-4xl pl-4 md:pl-12">
                {t(`faq.items.${item.key}.a`)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}