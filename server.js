require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// NOTE: This is a simple development/testing server for serving static files.
// For production use, consider adding rate limiting using express-rate-limit or similar middleware.

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve index.html at the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
