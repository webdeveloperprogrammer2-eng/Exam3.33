import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Container
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function PricingTableSection() {
    const { t } = useTranslation();

    const rows = [
        { feature: t('pricing.features.adv'), complete: true, partial: true },
        { feature: t('pricing.features.tenants'), complete: true, partial: true },
        { feature: t('pricing.features.contract'), complete: true, partial: true },
        { feature: t('pricing.features.payment'), complete: true, partial: true },
        { feature: t('pricing.features.keys'), complete: true, partial: true },
        { feature: t('pricing.features.processing'), complete: true, partial: true },
        { feature: t('pricing.features.repairs'), complete: true, partial: true },
        { feature: t('pricing.features.dewa'), complete: true, partial: true },
        { feature: t('pricing.features.ejari'), complete: true, partial: true },
        { feature: t('pricing.features.admin'), complete: true, partial: true },
        { feature: t('pricing.features.inspection'), complete: false, partial: true },
        { feature: t('pricing.features.prep'), complete: false, partial: true },
        { feature: t('pricing.features.reporting'), complete: false, partial: true },
        { feature: t('pricing.features.req_mgmt'), complete: false, partial: true },
        { feature: t('pricing.features.repair_mgmt'), complete: false, partial: true },
    ];

    return (
        <Box className="bg-[#222222] min-h-screen py-20 font-sans flex items-center">
            <Container maxWidth="lg">
                <TableContainer component={Paper} elevation={0} sx={{ backgroundColor: 'transparent', borderRadius: '0px', overflow: 'hidden' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="pricing packages table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#f5c742' }}>
                                <TableCell sx={{ color: '#222222', fontWeight: 600, fontSize: '1rem', py: 2.5, borderBottom: 'none', pl: 4 }}>
                                    {t('pricing.headers.included')}
                                </TableCell>
                                <TableCell align="center" sx={{ color: '#222222', fontWeight: 600, fontSize: '1rem', py: 2.5, borderBottom: 'none' }}>
                                    {t('pricing.headers.complete')}
                                </TableCell>
                                <TableCell align="center" sx={{ color: '#222222', fontWeight: 600, fontSize: '1rem', py: 2.5, borderBottom: 'none', pr: 4 }}>
                                    {t('pricing.headers.partial')}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#333333' : '#2b2b2b', '&:hover': { backgroundColor: '#3e3e3e' }, transition: 'background-color 0.2s ease' }}>
                                    <TableCell component="th" scope="row" sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', py: 2, borderBottom: 'none', pl: 4 }}>
                                        {row.feature}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: 'none' }}>
                                        {row.complete && <CheckIcon sx={{ color: '#f5c742', fontSize: '1.2rem' }} />}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: 'none', pr: 4 }}>
                                        {row.partial && <CheckIcon sx={{ color: '#f5c742', fontSize: '1.2rem' }} />}
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