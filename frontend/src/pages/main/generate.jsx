import { useState } from "react";
import Button from "../../components/ui/button";
import './generate.css';
import Input from "../../components/ui/inputBar";

export default function Generate(){
    return (
        <>
        <div className="generate flex justify-center items-center w-screen h-screen">
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="glow-1 left-96 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
          <div className="glow-2 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        </div>
            <div className="text-white flex flex-col items-center justify-center text-center gap-8 w-1/2 z-10">
                <div>
                    <h3 className="text-5xl font-bold">What do you want to create?</h3>
                </div>
                <Input/>
            </div>
        </div>
    </>
    )
}