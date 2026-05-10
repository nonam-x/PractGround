import React, { useState } from "react";
import { useForm } from "react-hook-form"

const ROLES = ["Fronted", "Backend", "AI Eng"];

const HookForm = () => {
   const [values, setValues] = useState({})
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccess, isSubmitting },
    getValues,
  } = useForm({ defaultValues: { name: "ramu" }, mode: "onTouched" });

  const submit = (data) => {
    return new Promise((res) => { console.log(data), setValues(data)
  });
    
  };

 



  // Ui code starts from her

  // if (isSubmitting) {
  //   return (
  //     <div>
  //       <h1>Submitting.........</h1>
  //     </div>
  //   );
  // }

  if (isSubmitSuccess) {
    return (
      <div>
        <h1>Form Submited Succesfully {values.name}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Register Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            React Hook Form
          </h2>
          {/* yaha pe sari libraries hume handle function deti hai but is data ka kya katna use handle karne ke liye hum
           is handlesubmit ime ek resolver function dete hai jisme hum data ko handle karte hai  */}
           {/* higher order function */}
          <form className="space-y-4" onSubmit={handleSubmit(submit)}>
            <div>
              <label className="block mb-1 font-medium">Full Name</label>

              <input
                {...register("name",{required:"Name is required", minLength:4})}
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
                {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>

              <input
              {...register("email",{required:"Email is required"})}
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
               {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>

              <input
              {...register("password",{required:"password is required"})}
              type="password"
              placeholder="Create password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
             {errors.password && <span>{errors.password.message}</span>}
            </div>

            <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
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
};

export default HookForm;
