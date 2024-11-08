import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button";
import Footer from "../../components/ui/footer";
import Navbar from "../../components/ui/navbar";
import './landing.css';
import { useEffect, useRef } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const fadeInRef = useRef([]);

  function navigateToMain() {
    navigate("/main");
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    fadeInRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      fadeInRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);
  
  return (
    <div className="landing">
      <div className="z-10 h-min">
      <Navbar />
      </div>
      <div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <header className="pb-20 flex flex-col text-center items-center justify-center gap-6 h-screen-90 px-72">
        <div>
          <h2 className="text-accent text-6xl font-extrabold">
            Generate Content in Seconds
          </h2>
        </div>
        <div>
          <h2 className="text-xl text-gray-800">
            Our AI-powered Content Generator creates high-quality, engaging
            content for any topic. Save time and boost your productivity.
          </h2>
        </div>
        <div className="flex gap-3">
          <Button className="bg-accent text-white" text="Start Generating" onclick={navigateToMain}></Button>
          <Button
            className="bg-white text-accent border-2 border-accent"
            text={"Learn More"}
          ></Button>
        </div>
      </header>

      <div id="features" className="flex flex-col justify-center items-center gap-10 mt-20 fade-in" ref={(el) => (fadeInRef.current[0] = el)}>
        <div>
          <h2 className="text-accent text-5xl font-bold">Key Features</h2>
        </div>
        <div className="flex items-center gap-6 text-center">
          <div className="flex flex-col items-center bg-yellow-200 rounded-lg p-8 gap-4 w-96 h-48 hover:scale-105 transition-all">
            <div className="flex flex-col items-center">
              <i class="bi bi-lightning-fill text-2xl bg-yellow-100 text-yellow-400 py-1 px-2 rounded-md"></i>
              <h2 className="text-gray-800 text-2xl font-bold">
                Lightning Fast
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Generate content in seconds, not hours.
            </p>
          </div>

          <div className="flex flex-col items-center bg-red-200 rounded-lg p-8 gap-4 w-96 h-48 hover:scale-105 transition-all">
            <div className="flex flex-col items-center">
              <i class="bi bi-pencil text-2xl bg-red-100 text-red-400 py-1 px-2 rounded-md"></i>
              <h2 className="text-gray-800 text-2xl font-bold">Customisable</h2>
            </div>
            <p className="text-gray-600 text-lg">
              Tailor content to your specific needs and style.
            </p>
          </div>

          <div className="flex flex-col items-center bg-purple-200 rounded-lg p-8 gap-4 w-96 h-48 hover:scale-105 transition-all">
            <div className="flex flex-col items-center">
              <i class="bi bi-stars text-2xl bg-purple-100 text-purple-400 py-1 px-2 rounded-md"></i>
              <h2 className="text-gray-800 text-2xl font-bold">AI-Powered</h2>
            </div>
            <p className="text-gray-600 text-lg">
              Leverage cutting-edge AI for high-quality content.
            </p>
          </div>
        </div>
      </div>

      <div id="how-it-works" className="bg-purple-100 flex flex-col justify-center gap-10 items-center w-full p-10 py-32 mt-32 fade-in" ref={(el) => (fadeInRef.current[1] = el)}>
        <div>
          <h2 className="text-accent text-5xl font-bold">How It Works</h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center text-center gap-4 w-96">
            <div className="flex flex-col items-center">
              <h2 className="text-gray-800 text-4xl font-bold">1.</h2>
              <h2 className="text-gray-800 text-2xl font-bold">
                Enter Your Topic
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Simply input the subject you want content about.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 w-96">
            <div className="flex flex-col items-center">
              <h2 className="text-gray-800 text-4xl font-bold">2.</h2>
              <h2 className="text-gray-800 text-2xl font-bold">
                AI Generation
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Our AI analyzes and creates content based on your input.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 w-96">
            <div className="flex flex-col items-center">
              <h2 className="text-gray-800 text-4xl font-bold">3.</h2>
              <h2 className="text-gray-800 text-2xl font-bold">
                Review and Use
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Get your generated content instantly, ready for use or editing.
            </p>
          </div>
        </div>
      </div>


      <div id="pricing" className="flex flex-col justify-center items-center gap-10 mt-32 fade-in" ref={(el) => (fadeInRef.current[2] = el)}>
        <div>
          <h2 className="text-accent text-5xl font-bold">Simple Pricing</h2>
        </div>

        <div className="flex gap-8">
        <div className="flex flex-col justify-between bg-purple-100 p-6 gap-6 rounded-lg w-96 hover:scale-105 transition-all">
          <div className="flex flex-col gap-2">
            <h2 className="text-accent text-2xl font-bold">Basic</h2>
            <h2 className="text-4xl font-bold">Free</h2>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <i class="bi bi-check2 text-xl"></i>
                <p className="text-gray-600 text-lg">100 generations per month</p>
              </div>
              <div className="flex items-center gap-1">
                <i class="bi bi-check2 text-xl"></i>
                <p className="text-gray-600 text-lg">Basic customization</p>
              </div>
            </div>
          </div>
          <Button className={"w-full text-white"} text={"Choose Plan"}/>
        </div>
        <div className="flex flex-col justify-between bg-purple-100 p-6 gap-6 rounded-lg w-96 border-2 border-accent hover:scale-105 transition-all">
          <div className="flex flex-col gap-2">
            <h2 className="text-accent text-2xl font-bold">Pro</h2>
            <h2 className="text-4xl font-bold">$9.99<span className="text-base font-normal text-gray-600">/month</span></h2>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <i class="bi bi-check2 text-xl"></i>
                <p className="text-gray-600 text-lg">Unlimited generations</p>
              </div>
              <div className="flex items-center gap-1">
                <i class="bi bi-check2 text-xl"></i>
                <p className="text-gray-600 text-lg">Advanced customization</p>
              </div>
              <div className="flex items-center gap-1">
                <i class="bi bi-check2 text-xl"></i>
                <p className="text-gray-600 text-lg">Priority Support</p>
              </div>
            </div>
          </div>
          <Button className={"w-full text-white"} text={"Choose Plan"}/>
        </div>
        <div className="flex flex-col justify-between bg-purple-100 p-6 gap-6 rounded-lg w-96 hover:scale-105 transition-all">
          <div className="flex flex-col gap-2">
            <h2 className="text-accent text-2xl font-bold">Enterprise</h2>
            <h2 className="text-4xl font-bold">$14.99<span className="text-base font-normal text-gray-600">/month</span></h2>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <i class="bi bi-check2 text-xl"></i>
                <p className="text-gray-600 text-lg">Custom solutions</p>
              </div>
              <div className="flex items-center gap-1">
                <i class="bi bi-check2 text-xl"></i>
                <p className="text-gray-600 text-base">Dedicated account manager</p>
              </div>
              <div className="flex items-center gap-1">
                <i class="bi bi-check2 text-xl"></i>
                <p className="text-gray-600 text-lg">24/7 premium support</p>
              </div>
            </div>
          </div>
          <Button className={"w-full text-white"} text={"Choose Plan"}/>
        </div>
        </div>
        
      </div>

      <Footer className={"mt-20"}/>

    </div>
  );
}
