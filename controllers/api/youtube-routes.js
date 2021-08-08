const router = require('express').Router();
const axios = require('axios');

require('dotenv').config()


router.post('/find_video', (req, res) => {
  video_link = req.body.video_link
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${video_link}&type=video&key=${process.env.YT_API}`)
    .then(response => {
      var newData = response.data.items
      var thumbnails = []
      var videoId = []
      newData.forEach(element => {
        thumbnails.push(element.snippet.thumbnails.high.url)
      })
      newData.forEach(element => {
        videoId.push(element.id.videoId)
      })
      var data = []
      for(var i = 0; i< thumbnails.length;i++)
      data.push({thumbnails: thumbnails[i], videoId:videoId[i]})
      return  res.send(data)
    })
    .catch(function (error) {

      console.log(error);
    })

})
router.get('/', (req, res) => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${video_link}&type=video&key=${process.env.YT_API}`)
    .then(response => {

      return res.send(response.data)
    })
    .catch(function (error) {

      console.log(error);
    })

})
module.exports = router
