const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
  
const PORT = process.env.PORT || 3000;
 
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});