import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Box,
    Link
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function ServicesSection() {
    const services = [
        {
            id: 1,
            title: 'Mortgage Registration',
            description:
                'A person applying for a mortgage in the United Arab Emirates must meet the following requirements',
            image:
                'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 2,
            title: 'Property Management',
            description:
                'Comprehensive control and maintenance of your real estate investments with maximum return and safety.',
            image:
                'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 3,
            title: 'Legal Consultation',
            description:
                'Professional legal support for property deals, local regulations compliance, and contract registration.',
            image:
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop'
        }
    ];

    return (
        <Box
            sx={{
                background: '#222222',
                minHeight: '100vh',
                padding: '80px 0',
                color: 'white'
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        maxWidth: '1100px',
                        margin: '0 auto'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'end',
                            mb: 8
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight={700}
                        >
                            We will also propose
                        </Typography>
                        <Link
                            href="#"
                            underline="none"
                            color="#a1a1aa"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            View all services
                            <ArrowForwardIosIcon
                                sx={{
                                    fontSize: 10
                                }}
                            />
                        </Link>
                    </Box>
                    <Grid
                        container
                        spacing={4}
                    >
                        {
                            services.map((service) => (
                                <Grid
                                    key={service.id}
                                    size={{
                                        xs: 12,
                                        md: 4
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            height: '420px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            background: '#333',
                                            '&:hover .front': {
                                                opacity: 0,
                                                transform:
                                                    'scale(1.05)'
                                            },
                                            '&:hover .back': {
                                                opacity: 1,
                                                transform:
                                                    'translateY(0)'
                                            }
                                        }}
                                    >
                                        <Box
                                            className="front"
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                transition: '0.4s'
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={service.image}
                                                alt={service.title}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            >
                                            </Box>
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    display: 'flex',
                                                    alignItems: 'end',
                                                    padding: '24px',
                                                    background:
                                                        'linear-gradient(to top, rgba(0,0,0,.9), transparent)'
                                                }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    fontWeight={700}
                                                >
                                                    {service.title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            className="back"
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: '#f5c742',
                                                color: '#222',
                                                padding: '32px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                opacity: 0,
                                                transform:
                                                    'translateY(20px)',
                                                transition: '0.4s'
                                            }}
                                        >
                                            <Box>
                                                <Typography
                                                    variant="h5"
                                                    fontWeight={700}
                                                    mb={3}
                                                >
                                                    {service.title}
                                                </Typography>
                                                <Typography>
                                                    {service.description}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px'
                                                }}
                                            >
                                                Learn more
                                                <ArrowForwardIosIcon
                                                    sx={{
                                                        fontSize: 12
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}