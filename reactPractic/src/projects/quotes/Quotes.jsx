import  { useEffect, useState } from "react";

const Quotes = () => {

  const [quotes, setQuotes] = useState([]);
  

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human",
      );
      const data = await response.json();
      setQuotes(data.data.data);
    }
    getData();
  }, []);

  // return (
  //   <div>
  //     <h1>Hallo</h1>
  //     {quotes.map((quote)=>(
  //        <div key={quote.id}>
  //         <h2>{quote.content}</h2>
  //         <h2>{quote.author}</h2>
  //       </div>
  //     ))}
  //   </div>
  // );


  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Decorative Circles (UI/UX touch) */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-red-900/40 blur-[100px]" />
      <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-red-600/20 blur-[100px]" />
      <div className="absolute h-[500px] w-[500px] rounded-full bg-red-700/30 blur-[120px]" />

      {/* Flip Card Container */}
      <div 
        className="group h-[500px] w-[400px] [perspective:1000px] cursor-pointer"
        onClick={handleFlip}
      >
        <div 
          className={`relative h-full w-full rounded-[2.5rem] transition-all duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* FRONT SIDE & BACK SIDE (Same UI, different text) */}
          <CardSide quote={quote} isBack={false} />
          <CardSide quote={quote} isBack={true} />
        </div>
      </div>
    </div>
  );
};

// Reusable Card Face
const CardSide = ({ quote, isBack }) => (
  <div className={`absolute inset-0 flex flex-col justify-between p-10 
    rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-xl 
    shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] [backface-visibility:hidden]
    ${isBack ? "[transform:rotateY(180deg)]" : ""}`}>
    
    <div className="flex justify-between items-start">
      <div className="text-white/80 uppercase tracking-widest text-[10px] font-bold">
        Glass <br /> morphic effect
      </div>
      <div className="text-white/60 text-[10px]">Let's create</div>
    </div>

    <div className="flex-1 flex items-center">
      <h2 className="text-5xl font-bold leading-tight tracking-tight text-white">
        {quote.content}
      </h2>
    </div>

    <div className="mt-4 flex flex-col gap-1">
      <span className="text-sm font-medium text-white/50">@_{quote.author.toLowerCase().replace(/\s/g, '')}</span>
      <div className="h-1 w-12 bg-red-600 rounded-full" />
    </div>
  </div>
);


export default Quotes;
