import { useEffect, useState } from "react"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Container({className,modelOutput,imageOutput,type}) {
    const [content,setContent] = useState({});
    const [image,setImage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setContent(modelOutput);
    }, [modelOutput]);

    useEffect(() => {
        setImage(imageOutput);
        if(imageOutput != ""){
            setLoading(false);
        }
        
    }, [imageOutput]);

    const handleTagClick = (tag) => {
        navigator.clipboard.writeText(tag);
        toast.info("Copied to clipboard");
    };


    return (
        <>
            <ToastContainer
                hideProgressBar={true}
                position="top-right"
                autoClose={3000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="light"
                transition={Bounce}
                />
                {/* Same as */}
            <ToastContainer />
            <div className={`${className} flex flex-col gap-8 border border-[#313131] bg-[#141415] rounded-xl z-10 min-h-10 p-5 overflow-auto`}>
                <div>
                    <h2 className="text-2xl font-bold text-center">Generated Content</h2>
                    <div className="w-full h-1 rounded-lg bg-accent mt-4"></div>
                </div>

                {type=="youtube" && (
                    <div className="">
                        <h3 className="text-base font-bold mb-4">Thumbnail</h3>
                        <div className="flex flex-col justify-center items-center rounded-lg bg-[#434346] p-2">
                        {loading ? (
                            <p>Generating Image...It may take a while</p>
                            ) : (
                            image === "error" ? (
                                <p>Error generating image, Try after some time!</p>
                            ) : (
                                <img 
                                src={image}
                                alt="Generated Thumbnail"
                                style={{ width: "100%", maxWidth: "300px", objectFit: "cover" }}
                                />
                            )
                        )}
                    </div>
                </div>
                )}
                <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold">Title</h3>
                    <p>{content.title}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold">Description</h3>
                    <p>{content.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold">Tags</h3>
                    <div className="flex gap-2 flex-wrap">
                        {content.tags ? content.tags.slice(0, 8).map((tag, index) => (
                            <p key={index} onClick={()=>handleTagClick(tag)} className="bg-[#434346] rounded-2xl justify-center px-6 py-1 hover:bg-[#373739] hover:cursor-pointer">
                                {tag}
                            </p>
                        )):""}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold">Script</h3>
                    <p>{content.script}</p>
                </div>
            </div>
        </>
    );
}