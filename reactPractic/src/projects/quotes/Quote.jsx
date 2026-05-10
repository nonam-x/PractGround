import React, { useState, useEffect } from "react";

const Quote = () => {
  // Mock data structure based on FreeAPI response with tags
  const [quote, setQuote] = useState({ 
    content: "Get Random Qoute", 
    author: "Click",
    tags: ["Random", "Qoutes"] 
  });
  const [isFlipped, setIsFlipped] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");
      const data = await response.json();
      setTimeout(() => {
        setQuote(data.data);
      }, 150);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    fetchQuote();
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background UI - Matching download.jpg */}
      <div className="absolute -left-20 top-0 h-[600px] w-[600px] rounded-full bg-red-900/30 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-[600px] w-[600px] rounded-full bg-red-600/20 blur-[120px]" />

      <div 
        className="group h-[550px] w-[420px] [perspective:1500px] cursor-pointer"
        onClick={handleFlip}
      >
        <div className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
          <CardFace quote={quote} isBack={false} />
          <CardFace quote={quote} isBack={true} />
        </div>
      </div>
    </div>
  );
};

const CardFace = ({ quote, isBack }) => (


  <div className={`absolute inset-0 flex flex-col justify-between p-12 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl [backface-visibility:hidden] ${isBack ? "[transform:rotateY(180deg)]" : ""}`}>
    
    {/* Top Section: Tags Replacement */}
    <div className="flex justify-start items-start">
      <div className="flex flex-wrap gap-2">
        {quote.tags && quote.tags.map((tag, index) => (
     
            <div className="text-white/40 text-[10px]  italic" key={index}>{tag}</div>
         
        ))}
      </div>
    </div>

    {/* Center Section: The Quote */}
    <div className="flex-1 flex items-center">
      <p style={{ fontFamily: 'inter' }} className="text-2xl font-medium leading-[1.2] tracking-tight text-white/95">
        {quote.content}
      </p>
    </div>

    {/* Bottom Section: Signature */}
    <div className="mt-6">
      <div/>
      <p style={{  fontFamily: "'Cedarville Cursive', cursive" }} className=" font-light text-2xl text-end text-red-400/30">
        {quote.author}
      </p>

    </div>
  </div>

  
);

export default Quote;