// @desc Filter shows
// @route POST /api/shows
// @access Public
const filterShows = (req, res) => {
  try {
    const { payload } = req.body;

    const filteredShows = payload
      .filter(show => show.drm && show.seasons?.length > 0)
      .map(show => ({
        image: show.image.showImage,
        slug: show.slug,
        title: show.title,
      }));

    res.status(200).json({ response: filteredShows });
  } catch (error) {
    res.status(400);
    throw new Error('Could not decode request: JSON parsing failed');
  }
};

module.exports = filterShows;
