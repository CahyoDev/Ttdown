const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/download', async (req, res) => {
    const tiktokUrl = req.query.url;
    const apiUrl = `https://api.neoxr.eu/api/tiktok?url=${encodeURIComponent(tiktokUrl)}&apikey=zeddxyy`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === 'success') {
            res.json({ status: 'success', result: data.result });
        } else {
            res.json({ status: 'error', message: 'Video not found' });
        }
    } catch (error) {
        res.json({ status: 'error', message: 'API request failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});