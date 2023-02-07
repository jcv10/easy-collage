const express = require('express');
const app = express();
const sharp = require('sharp');
const Queue = require('bee-queue');
const {joinImages} = require('join-images');
const {join} = require('node:path');
const {cwd} = require('node:process');
const cors = require('cors');
const {Buffer, Blob} = require('node:buffer');
const {readFile} = require('node:fs');
const PORT = process.env.PORT || 8080;

//onst queue = new Queue('image');

// queue.process((job,done) => {
//     console.log(`Processing job ${job.id}`);
//     return done();
// });

// queue.on('succeeded', (job, result) => {
//     console.log(`Job ${job.id} succeeded with result: ${result}`);
// });

app.use(cors());
app.use('/resize-images',express.static(join(__dirname + '/resize-images')));

app.get('/resize/image', async (req, res) => {
    console.log(req)
//     const resizeImageArr = [];
//    for(let i =0; i < 3; i++){
//         let data = await sharp('./images/osirys.jpeg').resize(200,200).toBuffer();
//         resizeImageArr.push(data);
//    }
  
//     await joinImages(resizeImageArr, {direction:'horizontal', color:'#ffffff', margin:15}).then(img => {
//         img.toFile(__dirname + '/resize-images/img.png');
//     });
   const imgUrl = ('/resize-images/img.png');
   console.log(imgUrl);
    res.json({url:imgUrl});
   //queue.createJob({x:2,y:2}).save();
   
//    res.send('hello');
});

app.get('/collage', (req,res) => {
    // readFile(join(__dirname, 'resize-images/img.png'), (err, data) => {
    //     if(err){
    //         res.send('something went wrong');
    //     }
        
    //     res.send(data);
    // });
    res.sendFile(join(__dirname, 'resize-images/img.png'));
});

app.get('/image-status', (req, res) => {

});

app.get('/image/:id', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});