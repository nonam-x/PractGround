import React, { useState, useEffect } from "react";
import bgImage from "./download (2).jpg";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);

  // SVG Circle Loader Math
  const circumference = 2 * Math.PI * 16;
  const strokeDashoffset = jokes.length > 0 
    ? circumference - ((currentIndex + 1) / jokes.length) * circumference 
    : circumference;

  const fetchJokes = async () => {
    setLoading(true);
    try {
      // Get a random page out of 100 to get a fresh batch of 10 jokes
      const randomPage = Math.floor(Math.random() * 100) + 1;
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomjokes?limit=10&page=${randomPage}`
      );
      const data = await response.json();
      setJokes(data.data.data);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Failed to fetch jokes", error);
      setJokes([{ content: "Oops! Failed to fetch jokes. The internet is taking a break." }]);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchJokes();
  }, []);

  const handleCardClick = () => {
    if (isAnimating || loading || jokes.length === 0) return;
    
    // Start exit animation
    setIsAnimating(true);
    
    setTimeout(() => {
      if (currentIndex < jokes.length - 1) {
        // Move to next joke in array
        setCurrentIndex(prev => prev + 1);
        setIsAnimating(false); // Enter animation
      } else {
        // Reached end of array, fetch 10 new ones
        fetchJokes().then(() => setIsAnimating(false));
      }
    }, 300); // 300ms matches the CSS transition duration
  };

  // Allow spacebar to trigger next joke
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleCardClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex justify-center items-start bg-white">
        <div className="min-h-screen bg-[#1a1a1a] bg-[#FFFFFF] flex items-center justify-center p-4 md:p-8 select-none relative overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-start gap-8 lg:gap-16">
        
        {/* Character */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end order-2 lg:order-1">
          <div className="">
            <img 
              src={bgImage} 
              alt="Character" 
              className="w-64 md:w-80 lg:w-96 h-auto object-contain"
            />
          </div>
        </div>

        {/* Card Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center order-1 lg:order-2 max-w-md z-10">
          
   
          {/* Clickable Card */}
          <div 
            onClick={handleCardClick}
            className={`relative cursor-pointer group w-full ${loading ? 'pointer-events-none' : ''}`}
          >
            {/* Stack layers */}
            <div className="absolute inset-0 bg-white border-2 border-gray-900 rounded-2xl translate-x-4 translate-y-4 -z-20 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5" />
            <div className="absolute inset-0 bg-white border-2 border-gray-900 rounded-2xl translate-x-2 translate-y-2 -z-10 transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
            
            {/* Main card */}
            <div className="bg-white rounded-2xl border-2 border-gray-900 p-8 md:p-10 shadow-xl relative overflow-hidden">
              {/* Grid bg */}
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="relative z-10">
                {/* Logo */}
                <div className="mb-8 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded font-mono text-sm font-bold">
             J
                  </div>
                  <span className="font-mono font-bold text-xl tracking-tighter text-gray-900">
                  <span className="text-gray-400">JOKES</span>
                  </span>
                </div>

                {/* Joke text */}
                <div className={`min-h-[160px] flex items-center transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
                    {loading ? "Loading..." : (jokes[currentIndex]?.content || "No jokes available.")}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-sm text-gray-500">
                    <span className="text-gray-900">{'>'}</span>
                    <span>CLICK CARD FOR NEXT</span>
                    <span className="animate-[blink_1s_step-end_infinite]">_</span>
                  </div>
                  
                  <div className="text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hint */}
          <p className="mt-6 font-mono text-xs text-gray-500 text-center">
            Press <kbd className="px-2 py-1 bg-gray-800 text-white rounded text-xs mx-1">SPACE</kbd> or click the card
          </p>
        </div>
      </div>

      {/* Float animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
    </div>
  );
};

export default Jokes;
