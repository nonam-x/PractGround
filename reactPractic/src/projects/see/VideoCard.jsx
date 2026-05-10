import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const categories = [
  'All', 'Technology', 'Design', 'Productivity', 'Creators', 
  'Tutorials', 'Technique', 'Users', 'Computers', 'Designs', 'Production'
];


  <div className="flex flex-col cursor-pointer group">
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-3">
      {/* Placeholder for video thumbnail */}
      <img 
        src="/api/placeholder/400/225" 
        alt="Thumbnail" 
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-out"
      />
      <div className="absolute bottom-1.5 right-1.5 bg-black/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[11px] font-medium text-white tracking-wide">
        14:32
      </div>
    </div>
    
    <div className="pr-4">
      <h3 className="text-[15px] font-semibold text-[#1d1d1f] leading-snug line-clamp-2 mb-1">
        Designing intuitive User Interfaces with Apple's Principles
      </h3>
      <div className="flex items-center text-xs text-[#515154] mb-0.5">
        <span>Design Masters</span>
        <svg className="w-3.5 h-3.5 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="text-xs text-[#86868b]">
        45k views • 2 days ago
      </div>
    </div>
  </div>


export default function Dashboard() {

    const [videos , setVideos] = useState([])

    useState(()=>{
     async function getData() {
         const response = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos?page=2&limit=10&query=javascript&sortBy=keep%2520one%253A%2520mostLiked%2520%257C%2520mostViewed%2520%257C%2520latest%2520%257C%2520oldest')
         const data = await response.json()
         setVideos(data.data.data)
     }
     getData()
    }, [])

 function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1).replace(".0", "") + "M";
  }

  if (views >= 1000) {
    return (views / 1000).toFixed(1).replace(".0", "") + "K";
  }

  return views.toString();
}



function timeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);

  const diffInSeconds = Math.floor((now - past) / 1000);

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} year ago`;
  }

  if (months > 0) {
    return `${months} month ago`;
  }

  if (days > 0) {
    return `${days} day ago`;
  }

  if (hours > 0) {
    return `${hours} hour ago`;
  }

  if (minutes > 0) {
    return `${minutes} minute ago`;
  }

  return "Just now";
}




  return (
    <div className="flex min-h-screen bg-white font-sans antialiased">
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0">
        <Navbar />
        
        {/* Category Pills */}
        <div className="flex overflow-x-auto gap-2 px-8 py-4 border-b border-gray-50 scrollbar-hide">
          {categories.map((category, idx) => (
            <button 
              key={category}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                idx === 0 
                  ? 'bg-[#1d1d1f] text-white' 
                  : 'bg-[#f5f5f7] text-[#515154] hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
            {/* Generating 12 cards to match the visual density of the reference image */}
        {videos.map((vedio)=>(
            <div key={vedio.id} className="flex flex-col cursor-pointer group">
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-3">
      {/* Placeholder for video thumbnail */}
      <img 
        src={vedio.items.snippet.thumbnails.high.url} 
        alt="Thumbnail" 
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-out"
      />
      <div className="absolute bottom-1.5 right-1.5 bg-black/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[11px] font-medium text-white tracking-wide">
 
      </div>
    </div>
    
    <div className="pr-4">
      <h3 className="text-[15px] font-semibold text-[#1d1d1f] leading-snug line-clamp-2 mb-1">
       {vedio.items.snippet.title} 
      </h3>
      <div className="flex items-center text-xs text-[#515154] mb-0.5">
        <span>{vedio.items.snippet.channelTitle}</span>
        <svg className="w-3.5 h-3.5 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="text-xs text-[#86868b]">
        {formatViews(vedio.items.statistics.viewCount)} • {timeAgo(vedio.items.snippet.publishedAt)}
      </div>
    </div>
  </div>

        ))}
          </div>
        </div>
      </main>
    </div>
  );
}