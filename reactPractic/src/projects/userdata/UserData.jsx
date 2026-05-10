import { useEffect, useState } from "react";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [userById, setUserById] = useState({});
  const [page , setPage]= useState(1)



  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=10`
      );
      const data = await response.json();
      setUsers(data.data.data);
    }


    async function getDataId() {
      const response = await fetch(
        'https://api.freeapi.app/api/v1/public/randomusers/13'
      );
      const data = await response.json();
      setUserById(data.data);
    }

    getData();
    getDataId();
  }, [page]);

return (
  <div className="min-h-screen bg-white p-10 font-sans">
    <h1 className="mb-12 text-center text-5xl font-bold tracking-tight text-slate-900">
      Users
    </h1>
     
      <div className="flex justify-between items-center mb-2
      ">
        <div className="bg-gray-200/50 rounded-xl px-2 py-1 text-gray-900">User data</div>
       <div className="flex items-center justify-end gap-3 mb-3 "> <button className="bg-gray-200/50 rounded-xl px-2 py-1 text-gray-900" disabled={page<=1} onClick={()=>setPage((p)=> p-1)}>Previous</button>
        <div className="bg-gray-200/50 rounded-xl px-2 py-1 text-gray-900">{page}</div>
        <button className="bg-gray-200/50 rounded-xl px-2 py-1 text-gray-900" onClick={()=>setPage((p)=> p+1)}>Next</button></div>
      </div>

    {/* Grid Layout - Using Grid for better alignment than flex-wrap */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
      {users.map((user) => (
        <div key={user.login.uuid} className="group relative h-[400px] w-full max-w-[380px] overflow-hidden rounded-[1.5rem] bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] hover:-translate-y-1">
          
          {/* Header/Cover Image Section */}
          <div className="absolute top-0 h-32 w-full overflow-hidden transition-all duration-700 ease-in-out group-hover:h-full">
            <img
              src={user.picture.large}
              alt="cover"
              className="h-full w-full object-cover scale-110 blur-[10px] saturate-150 transition-all duration-700 group-hover:blur-0 group-hover:scale-100 group-hover:brightness-50"
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/60 group-hover:to-black/20" />
          </div>

          {/* Profile Image - Minimalist Glass Effect */}
          <div className="relative z-10 mt-16 flex flex-col items-center px-6 transition-all duration-500 group-hover:mt-24">
            <div className="h-28 w-28 overflow-hidden rounded-full border-[2px] border-white/50 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:border-white/30 group-hover:shadow-2xl">
              <img
                src={user.picture.large}
                alt={user.name.first}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold tracking-tight text-slate-800 transition-colors duration-500 group-hover:text-white">
                {user.name.first}
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-500 transition-colors duration-500 group-hover:text-slate-200">
                {user.email}
              </p>
              
              {/* Location Badge */}
              <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 transition-all duration-500 group-hover:bg-white/20 group-hover:backdrop-blur-md">
                <span className="text-[4px] font-semibold uppercase tracking-widest text-slate-600 group-hover:text-white">
                  {user.location.country}
                </span>
              </div>
            </div>

            {/* Action Button - Premium Bento Style */}
            <div className="mt-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <a
                href={`mailto:${user.email}`}
                className="rounded-xl bg-white px-8 py-2.5 text-sm font-bold text-slate-900 shadow-lg transition-all hover:scale-105 hover:bg-slate-50 active:scale-95"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      ))}

  </div>


    </div>
);
};

export default UserData;
