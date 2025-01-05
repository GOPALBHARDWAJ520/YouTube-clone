const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const Channel = require('../models/Channel');

// @desc    Get channel by ID
// @route   GET /api/channels/:id
router.get('/:id', async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id);
    if (!channel) {
      return res.status(404).json({ message: 'Channel not found' });
    }
    res.json(channel);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @desc    Create a channel
// @route   POST /api/channels
router.post('/', protect, async (req, res) => {
  const { name, description } = req.body;
  try {
    const newChannel = new Channel({
      name,
      description,
      owner: req.user.id,
    });
    const channel = await newChannel.save();
    res.status(201).json(channel);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @desc    Update channel details
// @route   PUT /api/channels/:id
router.put('/:id', protect, async (req, res) => {
  const { name, description } = req.body;
  try {
    const channel = await Channel.findById(req.params.id);
    if (!channel) {
      return res.status(404).json({ message: 'Channel not found' });
    }
    if (channel.owner.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    channel.name = name || channel.name;
    channel.description = description || channel.description;
    await channel.save();
    res.json(channel);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;