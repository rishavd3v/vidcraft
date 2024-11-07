export default function navbar(){
    const handleScroll = (sectionId) => {
        return (event) => {
          event.preventDefault();
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        };
      };
    return (
        <>
            <div className="flex items-center justify-between p-6">
                <div className="flex gap-2 text-lg">
                    <i class="bi bi-fire"></i>
                    <h2 className="font-bold text-accent">VIDCRAFT.AI</h2>
                </div>
                <div className="flex gap-8 font-medium">
                    <a href="#features" className="hover:text-accent" onClick={handleScroll("features")}><h3>Features</h3></a>
                    <a href="#how-it-works" className="hover:text-accent" onClick={handleScroll("how-it-works")}><h3>How It Works</h3></a>
                    <a href="#pricing" className="hover:text-accent" onClick={handleScroll("pricing")}><h3>Pricing</h3></a>
                </div>
            </div>
        </>
    )
}