const router = require('express').Router();
const axios = require('axios');

require('dotenv').config()


router.get('/', (req,res) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=chicken_pot_pie&type=video&key=${process.env.YT_API}`)
      .then(response=> {

        return  res.send(response.data)
      })
      .catch(function (error) {

        console.log(error);
      })
  
})

module.exports = router