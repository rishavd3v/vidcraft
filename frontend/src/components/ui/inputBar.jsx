import { useState} from "react";

export default function Input({setModelOutput}) {
  const [userInput, setUserInput] = useState("");
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  async function handleGenerate() {
    try{
      const res = await fetch('http://localhost:3000/generate',{
        method:'POST',
        body:JSON.stringify({
          title:userInput,
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
        onChange={handleUserInput}
      />
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center justify-center">
          <div>
            <input
              type="radio"
              name="content-type"
              value="youtube"
              defaultChecked
            />{" "}
            Youtube
          </div>
          <div>
            <input type="radio" name="content-type" value="reels" /> Reels
          </div>
          <div>
            <input type="radio" name="content-type" value="tiktok" /> Shorts
          </div>
        </div>
        <div>
          <button onClick={handleGenerate} disabled={!userInput}>
            <i className={"bi bi-arrow-up-square-fill text-3xl"}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
