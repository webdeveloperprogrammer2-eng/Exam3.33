import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Container
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function PricingTableSection() {
    const rows = [
        { feature: 'Real estate advertising', complete: true, partial: true },
        { feature: 'Search for tenants', complete: true, partial: true },
        { feature: 'Conclusion of a lease agreement', complete: true, partial: true },
        { feature: 'Getting paid', complete: true, partial: true },
        { feature: 'Key handover', complete: true, partial: true },
        { feature: 'Payment processing', complete: true, partial: true },
        { feature: 'Dealing with repair requests', complete: true, partial: true },
        { feature: 'DEWA connection (electricity/water)', complete: true, partial: true },
        { feature: 'Registration of the rental agreement Ejari', complete: true, partial: true },
        { feature: 'Separate administrator', complete: true, partial: true },
        { feature: 'Detailed inspection of the object', complete: false, partial: true },
        { feature: 'Property preparation before arrival', complete: false, partial: true },
        { feature: 'Reporting', complete: false, partial: true },
        { feature: 'Repair Request Management', complete: false, partial: true },
        { feature: 'Repair management', complete: false, partial: true },
    ];

    return (
        <Box className="bg-[#222222] min-h-screen py-20 font-sans flex items-center">
            <Container maxWidth="lg">
                <TableContainer
                    component={Paper}
                    elevation={0}
                    sx={{
                        backgroundColor: 'transparent',
                        borderRadius: '0px',
                        overflow: 'hidden'
                    }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="pricing packages table">

                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#f5c742' }}>
                                <TableCell
                                    sx={{
                                        color: '#222222',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        py: 2.5,
                                        borderBottom: 'none',
                                        pl: 4
                                    }}
                                >
                                    Included in the package
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        color: '#222222',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        py: 2.5,
                                        borderBottom: 'none'
                                    }}
                                >
                                    Complete management
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        color: '#222222',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        py: 2.5,
                                        borderBottom: 'none',
                                        pr: 4
                                    }}
                                >
                                    Partial control
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        backgroundColor: index % 2 === 0 ? '#333333' : '#2b2b2b',
                                        '&:hover': { backgroundColor: '#3e3e3e' },
                                        transition: 'background-color 0.2s ease'
                                    }}
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        sx={{
                                            color: '#ffffff',
                                            fontWeight: 600,
                                            fontSize: '0.95rem',
                                            py: 2,
                                            borderBottom: 'none',
                                            pl: 4
                                        }}
                                    >
                                        {row.feature}
                                    </TableCell>

                                    <TableCell align="center" sx={{ borderBottom: 'none' }}>
                                        {row.complete && (
                                            <CheckIcon sx={{ color: '#f5c742', fontSize: '1.2rem' }} />
                                        )}
                                    </TableCell>

                                    <TableCell align="center" sx={{ borderBottom: 'none', pr: 4 }}>
                                        {row.partial && (
                                            <CheckIcon sx={{ color: '#f5c742', fontSize: '1.2rem' }} />
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
}