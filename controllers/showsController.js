// @desc Filter shows
// @route POST /api/shows
// @access Public
const filterShows = (req, res) => {
  try {
    throw error;
    res.status(200).json({ message: req.body.payload });
  } catch (error) {
    res.status(400);
    throw new Error('Could not decode request: JSON parsing failed');
  }
};

module.exports = filterShows;
