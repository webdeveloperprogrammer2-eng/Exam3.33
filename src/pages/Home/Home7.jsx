import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    id: 'panel1',
    question: 'The largest and oldest Quotations Page on the Web with about 30 categories',
    answer: 'Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.'
  },
  {
    id: 'panel2',
    question: 'A huge collection of inspirational quotes, thoughts of greatest minds in history',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    id: 'panel3',
    question: 'Quotations from the great works of literature',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    id: 'panel4',
    question: 'Read quotes and sayings from famous people in history',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    id: 'panel5',
    question: 'Collected quotes from Albert Einstein',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  }
];

export default function FaqSection() {
  const [expanded, setExpanded] = useState('panel1'); // Панели аввал ба таври пешфарз кушода аст

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-full min-h-screen bg-[#222222] text-white py-16 px-4 md:px-24 flex justify-center items-start font-sans">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold tracking-wide mb-8 text-left border-b border-zinc-700 pb-6">
          FAQ
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
                '& .MuiAccordionSummary-content': {
                  margin: 0,
                },
                '& .MuiAccordionSummary-expandIconWrapper': {
                  transform: 'none !important', 
                }
              }}
            >
              <Typography className="text-lg md:text-xl font-normal text-zinc-200 hover:text-white transition-colors duration-200">
                {item.question}
              </Typography>
            </AccordionSummary>
            
            <AccordionDetails sx={{ padding: '0 0 24px 0' }}>
              <Typography className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-4xl pl-4 md:pl-12">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}