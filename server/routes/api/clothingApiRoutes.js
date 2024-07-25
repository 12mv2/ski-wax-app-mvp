const express = require('express');
const router = express.Router();
const getClothingByTemperature = require('../../services/clothingService');

router.get('/', async (req, res) => {
    const { temperature } = req.query;
    try {
        if (!temperature) {
            throw new Error('Temperature parameter is required');
        }
        const clothing = await getClothingByTemperature(temperature);
        res.json(clothing);
    } catch (error) {
        console.error('Error fetching clothing data:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
