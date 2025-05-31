const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('You’ve reached Jay’s containerized Node.js app, deployed with CI/CD!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 

//Add a comment