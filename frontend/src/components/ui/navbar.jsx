export default function navbar(){
    return (
        <>
            <div className="flex items-center justify-between p-6">
                <div className="flex gap-2 text-xl">
                    <i class="bi bi-fire"></i>
                    <h2 className="font-bold text-accent">Content Generator</h2>
                </div>
                <div className="flex gap-8 font-medium">
                    <a href=""><h3>Features</h3></a>
                    <a href=""><h3>How It Works</h3></a>
                    <a href=""><h3>Pricing</h3></a>
                </div>
            </div>
        </>
    )
}