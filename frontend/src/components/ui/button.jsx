export default function Button({className,text,onclick}){
    return (
        <>
            <button className={`${className} bg-accent font-medium py-2 px-4 rounded-md z-10 hover:bg-sec hover:text-white hover:border-sec`} onClick={onclick}>{text}</button>
        </>
    )
}