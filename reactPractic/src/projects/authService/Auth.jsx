import React, { useState } from "react";
import HookForm from "./HookForm";
import Manual from "./Manual";

const Auth = () => {
  const [tab, setTab] = useState("manual");
  
 
  

  return <div>
    <div className="flex items-center justify-center py-2 bg-gray-400 gap-2"> 
      <button className="bg-gray-200 px-4 py-1 rounded-xl border border-gray-300" onClick={()=>setTab("manual")}>Manual</button>
      <button className="bg-gray-200 px-4 py-1 rounded-xl border border-gray-300" onClick={()=>setTab("hook")}>Hook Form</button>
    </div>
    {tab === "hook" ? <HookForm /> : <Manual />}

    </div>;
};

export default Auth;
