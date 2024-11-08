async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large",
		{
			headers: {
				Authorization: process.env.HF_API_KEY,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}

async function main(title){
    try {
        const prompt = `Create an image for a YouTube thumbnail for a video titled ${title}. Make it eye-catching with vibrant, high-contrast colors. Display a [main subject or object, e.g., person, icon, product] that reflects the video's topic, placed prominently. Add bold, large text saying ${title} to emphasize the theme, positioned for easy readability. Include relevant icons or visuals [related to the title, like tech logos, travel landmarks, etc.]. The overall style should be visually appealing, drawing viewers' attention, with clear focus and high detail.`;
        
        const blob = await query({ 
            "inputs": prompt,
            // "parameters":{"target_size":{"width":1920,"height":1080}},
        });
        const arrayBuffer = await blob.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64Image = buffer.toString('base64');
        const dataUrl = `data:image/png;base64,${base64Image}`;
        return dataUrl;
    } catch (error) {
        console.error("Error fetching image:", error);
    }
}

module.exports = main;