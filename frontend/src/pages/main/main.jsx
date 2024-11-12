import { useState,useRef, useEffect } from "react";
import './main.css';
import Input from "../../components/ui/inputBar";
import Container from "../../components/ui/container";

export default function Generate(){
    const [modelOutput,setModelOutput] = useState({});
    const [imageOutput,setImageOutput] = useState("");
    const [typeMain, setTypeMain] = useState("youtube");
    const containerRef = useRef(null);

    useEffect(() => {
        if(Object.keys(modelOutput).length > 0){
            containerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    },[modelOutput]);
    
    return (
        <>
            <div className="generate min-h-screen max-w-screen overflow-hidden bg-[#0F0F10] pb-8">
                <div className="fixed inset-0 overflow-hidden z-10 h-screen bg-[##0F0F10]">
                    <div className="glow-1 left-96 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
                    <div className="glow-2 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                </div>
                <div className="flex flex-col justify-center items-center h-screen-90">
                    <div className="text-white flex flex-col items-center justify-center text-center gap-8 w-1/2 z-10">
                        <div>
                            <h3 className="text-5xl font-bold">What do you want to create?</h3>
                        </div>
                        <Input setModelOutput={setModelOutput} setImageOutput={setImageOutput} setTypeMain={setTypeMain}/>            
                    </div>
                </div>
                
                {Object.keys(modelOutput).length > 0 && (
                    <div ref={containerRef} className="w-screen flex justify-center text-white">
                        <Container className={"w-1/2"} modelOutput={modelOutput} imageOutput={imageOutput} type={typeMain}/>
                    </div>
                )}
            </div>
        </>
    )
}