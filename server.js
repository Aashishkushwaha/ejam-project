const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/deployments/', require('./routes/api/deployment'));

// Connect to DB
mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to DB`))
  .catch(err => console.log('Error in connecting to DB : ' + err.message));

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
})


const PORT = process.env.PORT || 4500;
app.listen(PORT , () => console.info(`Server is running on port ${PORT}`));