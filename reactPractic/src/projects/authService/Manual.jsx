import React, { use, useState } from 'react'


const ROLES = ["Fronted", "Backend", "AI Eng"]


const Manual = () => {
  //statss
  const [value, setValue] = useState({
    name:"",
    email:"",
    role:"frontend",
   experience: "",
    cover:""
  })

   const [errors, setErrors ] = useState({})

  const [submited , setSubmited] = useState(false)

  // to get and value from input and set it in value
  function set(field){
      return (e)=> setValue((v)=>({...v, [field]: e.target.value }))
  }
  
  // validation

  function validate(v){
      const err = {}
      if(!v.name.trim()) err.name = "Name is requied"
      if(!v.email.trim()) err.email = "Email is requied"
      if(!v.email.length <=8 ) err.email = "Email must be 8 character long"
      return err
  }

   // on the submission
  function submit(ev){
      ev.preventDefault()
       const e = validate(value)
       setErrors(e)
       if(Object.keys(e).length === 0) setSubmited(true)
        console.log(value)
      setSubmited(true)
  }

  //after submit
  if(submited){
    return(
      <div>
        <h1>data submitted succesfully {value.name}</h1>
      </div>
    )
  }
  





//  ui Starts from Here
return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        
        {/* Register Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
           Manual Form
          </h2>
 
          <form onSubmit={submit} noValidate className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">
                Full Name
              </label>

              <input
              value={value.name}
              onChange={set("name")}  // yaha ye {(e)=>{}}
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
           {errors.name && <span>{errors.name}</span>}
      
       
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Email
              </label>

              <input
              value={value.email}
               onChange={set("email")}  // yaha ye {(e)=>{}}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
               {errors.email && <span>{errors.email}</span>}
            </div>
{/* 
            <div>
              <label className="block mb-1 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </div> */}

            <button  type='submit' className="w-full bg-black text-white border border-gray-100/80  py-2 rounded-lg hover:bg-gray-800 transition">
              Register
            </button>
          </form>
        </div>

        {/* Login Form */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Login
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Login
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
}

export default Manual
