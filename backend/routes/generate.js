const express = require('express');
const router = express.Router();
const generate = require('./gemini');

router.post('/generate', async (req, res) => {
  const title = req.body.title;
  if(!title){
    return res.status(400).json({error:"Title is missing"});
  }
  try{
    const output = await generate(title);
    res.json({output:output});
  }
  catch(err){
    console.log("Error in generating content",err);
    res.status(500).json({error:err});
  }
});


module.exports = router;