export default function Button({className,text,onclick}){
    return (
        <>
            <button className={`${className} bg-accent text-white font-medium py-2 px-4 rounded-md z-10`} onClick={onclick}>{text}</button>
        </>
    )
}