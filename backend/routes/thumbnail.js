async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
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
        
        const prompt = `Create an image with an abstract background and a person or robot with large bold text saying "${title}". Add some elements that reflect the theme of the title. The overall style should be visually appealing, and realistic with high detail.`;
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