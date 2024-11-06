import { useEffect, useState } from "react"

export default function Container({className,modelOutput}){
    const [content,setContent] = useState("");
    
    useEffect(()=>{
        setContent(modelOutput);
    },[modelOutput])

    return(
        <>
            <div className={`${className} bg-yellow-300 z-10 rounded-md min-h-10 p-2 border border-white`}>
                <h2>Generated Content</h2>
                <div>
                    {content}
                </div>
            </div>
        </>
    )
}