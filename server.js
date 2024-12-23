const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the Mytalorzone directory
app.use(express.static(path.join(__dirname, 'Mytalorzone')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Mytalorzone', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
