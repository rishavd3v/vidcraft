export default function Main(){
    return (
        <>
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex flex-col items-center justify-center gap-8 w-1/2">
                <div>
                    <h3 className="text-black text-5xl font-bold">What do you want to create?</h3>
                </div>
                <div className="flex flex-col gap-2 border-2 border-black px-2 py-2 rounded-lg w-full">
                    <input className="w-full py-2 rounded-md outline-none" type="text" placeholder="Enter your main topic or theme"/>
                    <div className="flex gap-4">
                        <div><input type="radio" name="type" value="youtube" defaultChecked/>Youtube</div>
                        <div><input type="radio" name="type" value="reels" />Reels</div>
                        <div><input type="radio" name="type" value="tiktok" />Shorts</div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}