const express = require('express');
const router = express.Router();
const generate = require('./gemini');
const thumbnail = require('./thumbnail');

router.post('/generate', async (req, res) => {
  const title = req.body.title;
  const type = req.body.type;
  if(!title){
    return res.status(400).json({error:"Title is missing"});
  }
  try{
    console.log("Generating content...");
    const output = await generate(title,type);
    console.log("Content fetched successfully");
    res.json({output:output});
  }
  catch(err){
    console.log("Error in generating content",err);
    res.status(500).json({error:err});
  }
});

router.post('/image',async (req,res)=>{
  const title = req.body.title;
  try{
    console.log("Generating image...");
    const imageUrl = await thumbnail(title);
    console.log("Image fetched successfully");
    res.send(imageUrl);
  }
  catch(err){
    console.log("Error in fetching image",err);
    res.status(500).json({error:err});
  }
})


module.exports = router;