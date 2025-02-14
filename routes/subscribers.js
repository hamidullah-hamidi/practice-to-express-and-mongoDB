const express = require('express');
const router = express.Router();
const Subscribers = require('../model/subscriber');

// Get all
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscribers.find();
    res.status(200).json({
      subscribers,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Get one
router.get('/:id', async (req, res) => {
  try {
    const subscriber = await Subscribers.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      subscriber: {
        subscriber,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Create one
router.post('/', async (req, res) => {
  const newSubscriber = Subscribers.create(req.body);

  try {
    res.status(201).json({
      data: { newSubscriber },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Update one
router.patch('/:id', async (req, res) => {
  try {
    const updatedSubscriber = await Subscribers.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      updatedSubscriber: { updatedSubscriber },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Delete one
router.delete('/:id', async (req, res) => {
  try {
    const deletedSubscriber = await Subscribers.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      deletedSubscriber: {
        deletedSubscriber,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
