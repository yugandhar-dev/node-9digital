const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/error');
const port = process.env.PORT || 5000;

const app = express();

app.use(
  express.json({
    verify: (req, res, buf, encoding) => {
      try {
        JSON.parse(buf);
      } catch (e) {
        res.status(400);
        throw new Error('Could not decode request: JSON parsing failed');
      }
    },
  })
);
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/showsRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
