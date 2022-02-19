// @desc Filter shows
// @route POST /api/shows
// @access Public
const filterShows = (req, res) => {
  try {
    throw error;
    res.status(200).json({ message: 'Here is your response' });
  } catch (error) {
    res.status(400).json({
      error: 'Could not decode request: JSON parsing failed',
    });
  }
};

module.exports = filterShows;
