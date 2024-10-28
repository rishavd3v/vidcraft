export default function Footer(){
    return(
        <div className="flex items-center justify-between bg-purple-50 p-4 text-sm text-gray-800 mt-36">
            <div>
                <p>© 2024 <span><a href="https://www.github.com/rishavd3v" className="hover:text-accent">@rishavd3v</a></span> All rights reserved.</p>
            </div>
            <div className="flex gap-4">
                <a href="" className="hover:text-accent">Terms of Service</a>
                <a href="" className="hover:text-accent">Privacy</a>
            </div>
        </div>
    )
}