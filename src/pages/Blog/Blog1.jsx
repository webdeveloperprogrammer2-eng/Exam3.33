import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import {
    Container, Grid, Card, CardContent, Typography, TextField,
    IconButton, Button, Modal, Box, InputAdornment
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const BASE_URL = 'https://to-dos-api.softclub.tj/api/to-dos';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab';

const modalStyle = {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
    width: 500, background: '#232323', padding: '30px', borderRadius: '16px'
};

export default function BlogSection() {
    const { t } = useTranslation();
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', description: '', image: null });

    async function loadTodos() {
        try {
            const { data } = await axios.get(BASE_URL);
            setTodos(Array.isArray(data.data) ? data.data : []);
        } catch (err) { console.log(err); }
    }

    useEffect(() => { loadTodos(); }, []);

    async function handleDelete(id) {
        try {
            await axios.delete(`${BASE_URL}?id=${id}`);
            setTodos(prev => prev.filter(e => e.id !== id));
        } catch (err) { console.log(err); }
    }

    async function handleAdd() {
        if (!formData.name.trim()) return;
        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('description', formData.description);
            if (formData.image) data.append('images', formData.image);

            await axios.post(BASE_URL, data, { headers: { 'Content-Type': 'multipart/form-data' } });
            await loadTodos();
            setOpen(false);
            setFormData({ name: '', description: '', image: null });
        } catch (err) { console.log(err.response?.data || err); }
    }

    const filteredTodos = todos.filter(item =>
        `${item.name || ''} ${item.description || ''}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-[#242424] min-h-screen py-10">
            <Container maxWidth="xl">
                <div className="flex justify-between mb-12">
                    <Typography variant="h3" sx={{ color: 'white' }}>{t('blog.title')}</Typography>
                    <div className="flex gap-4">
                        <TextField
                            placeholder={t('blog.search')}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>) }}
                            sx={{ width: 300, input: { color: 'white' } }}
                        />
                        <Button variant="contained" onClick={() => setOpen(true)} sx={{ bgcolor: '#d4af37' }}>
                            <AddIcon />
                        </Button>
                    </div>
                </div>

                <Grid container spacing={4}>
                    {filteredTodos.map(todo => (
                        <Grid key={todo.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ background: '#222', color: 'white', border: '1px solid #d4af37', overflow: 'hidden', maxWidth: 360, margin: 'auto', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                                <img src={todo.images?.length ? `https://to-dos-api.softclub.tj/images/${todo.images[0].imageName}` : DEFAULT_IMAGE} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                                <CardContent>
                                    <div className="flex justify-end">
                                        <IconButton onClick={() => handleDelete(todo.id)}><DeleteIcon sx={{ color: 'red' }} /></IconButton>
                                    </div>
                                    <Typography fontWeight={700} fontSize={28} mb={2}>{todo.name}</Typography>
                                    <Typography color="#999">{todo.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={modalStyle}>
                    <Typography mb={3} color="white" variant="h5">{t('blog.addNew')}</Typography>
                    <TextField fullWidth label={t('blog.name')} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} sx={{ mb: 3 }} />
                    <TextField fullWidth multiline rows={4} label={t('blog.description')} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} sx={{ mb: 3 }} />
                    <TextField fullWidth type="file" inputProps={{ accept: 'image/*' }} onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} sx={{ mb: 3 }} />
                    <Button fullWidth variant="contained" onClick={handleAdd} sx={{ bgcolor: '#d4af37', color: 'black' }}>{t('blog.save')}</Button>
                </Box>
            </Modal>
        </div>
    );
}