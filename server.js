const express = require('express');
const app = express();
const sharp = require('sharp');
const Queue = require('bee-queue');
const joinImages = require('join-images').joinImages;
const {cwd} = require('node:process');
const PORT = process.env.PORT || 8080;

//onst queue = new Queue('image');

// queue.process((job,done) => {
//     console.log(`Processing job ${job.id}`);
//     return done();
// });

// queue.on('succeeded', (job, result) => {
//     console.log(`Job ${job.id} succeeded with result: ${result}`);
// });
app.get('/resize/image', async (req, res) => {
    const resizeImageArr = [];
   for(let i =0; i < 3; i++){
        let data = await sharp('./images/osirys.jpeg').resize(200,200).toBuffer();
        resizeImageArr.push(data);
   }
  
    await joinImages(resizeImageArr, {direction:'horizontal', color:'#ffffff', margin:15}).then(img => {
        img.toFile(__dirname + '/resize-images/img.png');
    });
   
    res.json({path:`${cwd()}/resizeimages/img.png`});
 
   //queue.createJob({x:2,y:2}).save();
});

app.get('/image-status', (req, res) => {

});

app.get('/image/:id', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});