const express = require('express');
const router = express.Router();
const generate = require('./gemini');

router.post('/generate', async (req, res) => {
  const title = req.body.title;
  if(!title){
    return res.status(400).json({error:"Title is missing"});
  }
  try{
    const outputStream = await generate(title);
    
    res.setHeader('Content-Type', 'text/plain');

    for await (const chunk of outputStream) {
      const chunkText = chunk.text();
      res.write(chunkText);
    }

    res.end();
  }
  catch(err){
    console.log(err);
    res.status(500).json({msg:"error occured in generate!",error:err});
  }
});


module.exports = router;