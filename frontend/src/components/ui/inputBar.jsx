import { useState} from "react";
import LoadingSpinner from "./spinner";
const url = import.meta.env.VITE_BACKEND_URL;

export default function Input({setModelOutput, setImageOutput, setTypeMain}) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("youtube");
  const [loading, setLoading] = useState(false);

  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleType(e) {
    setType(e.target.value);
  }
  function handleKeyPress(e){
    if(e.key=='Enter'){
      handleGenerate();
    }
  }
  async function handleGenerate() {
    try{
      setLoading(true);
      setTypeMain(type);

      const res = await fetch(`${url}/generate`,{
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
      setLoading(false);

      if(type=="youtube"){
        const imageRes = await fetch(`${url}/image`,{
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
          setImageOutput("error");
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
        onKeyDown={handleKeyPress}
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
          {!loading ? (
            <button onClick={handleGenerate} disabled={!title}>
            <i className={`bi bi-arrow-up-square-fill text-3xl ${title?"":"text-[#555557]"}`}></i>
          </button>):(
            <LoadingSpinner size="medium" color="accent" />
          )}
        </div>
      </div>
    </div>
  );
}
