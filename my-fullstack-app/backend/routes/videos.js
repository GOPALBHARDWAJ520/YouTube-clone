const express = require('express');
const router = express.Router();
const Video = require('../models/Video');
const protect = require('../middleware/authMiddleware');

// @desc    Get all videos
// @route   GET /api/videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find({});
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @desc    Get video by ID
// @route   GET /api/videos/:id
router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @desc    Upload a video
// @route   POST /api/videos
router.post('/', protect, async (req, res) => {
  const { title, description, url, thumbnail, channelId } = req.body;

  try {
    const newVideo = new Video({
      title,
      description,
      url,
      thumbnail,
      channelId,
      views: 0,
    });

    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;