import { useState} from "react";

export default function Input({setModelOutput, setImageOutput}) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("youtube");
  
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleType(e) {
    setType(e.target.value);
  }

  async function handleGenerate() {
    try{
      const res = await fetch('http://localhost:3000/generate',{
        method:'POST',
        body:JSON.stringify({
          title:title,
          type:type
        }),
        headers:{
          "content-type":"application/json"
        }
      })
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setModelOutput(data.output);

      if(type=="youtube"){
        const imageRes = await fetch('http://localhost:3000/image',{
          method:'POST',
          body:JSON.stringify({
            title:title,
          }),
          headers:{
            "content-type":"application/json"
          }
        })
        if (!imageRes.ok) {
          console.log("Image not recieved");
          throw new Error('Image not recieved');
        }
        const imageUrl = await imageRes.text();
        setImageOutput(imageUrl);
      }
    }
    catch(err){
      console.error(err);
    }
    

  }
  return (
    <div className="flex flex-col gap-2 border border-[#313131] bg-[#141415] p-2 rounded-xl w-full">
      <input
        className="w-full py-2 rounded-md outline-none bg-[#141415]"
        type="text"
        placeholder="Enter your main topic or theme"
        onChange={handleTitle}
      />
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center justify-center">
          <div>
            <input
              type="radio"
              name="content-type"
              value="youtube"
              defaultChecked
              onClick={handleType}
            />{" "}
            Youtube
          </div>
          <div>
            <input type="radio" name="content-type" value="reels" onClick={handleType} /> Reels
          </div>
          <div>
            <input type="radio" name="content-type" value="tiktok" onClick={handleType} /> Tiktok
          </div>
        </div>
        <div>
          <button onClick={handleGenerate} disabled={!title}>
            <i className={`bi bi-arrow-up-square-fill text-3xl ${title?"":"text-[#555557]"}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
