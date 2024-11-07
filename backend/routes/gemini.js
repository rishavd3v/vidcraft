const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig:{
    responseMimeType:"application/json",
  } 
});

async function generate(title){
  try{
    const prompt = `
    Generate a youtube video script for a video titled ${title}. Give output in following format: 
    { 
      "title": "Title of the video",
      "script": "Script of the video",
      "description": "Description of the video", 
      "tags": ["tag1", "tag2"]
    }
    Include trending and relevant keywords in title, description and tags for better seo.  
    `;
    const result = await model.generateContent(prompt);
    const jsonData = JSON.parse(result.response.text());
    return jsonData;
  }
  catch(err){
    console.log("Error in generating content",err);
    return null;
  }
}

module.exports = generate;