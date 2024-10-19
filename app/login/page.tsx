// "use client";
// import { FormEvent, useState } from "react";
// import Image from "next/image";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (password.length < 8) {
//       setPasswordError("Password must be at least 8 characters");
//       return;
//     }
//     setPasswordError("");
//     console.log("Form submitted", { email, password });
//     // Logic to handle the login 
//   };


  
//   return (
//     <div className="flex flex-col xl:flex-row items-center w-full px-8 py-20 xl:px-0 ">
//       <div className="w-96 xl:w-1/2 flex items-center justify-center">
//         <h1 className="text-5xl xl:text-5xl font-bold text-center ">
//           Log In
//         </h1>
//         <Image
//           src="/logo-new.png"
//           alt="project Logo"
//           width={90}
//           height={90}
//         />
//       </div>

//       <div className="w-full xl:min-h-[100vh] xl:flex xl:flex-col xl:justify-center xl:drop-shadow-md bg-white xl:w-1/2 xl:pr-6 p-6">
        
//         <p className="sm:text-sm md:text-lg  lg:text-lg text-base 2xl:text-lg xl:text-xl text-center text-text_inputs_grey mb-5">
//           Please fill out the form below to continue
//         </p>
//         <form onSubmit={handleSubmit} className="flex flex-col items-center">
//           <div className="w-[90%] lg:w-[55%] flex justify-center">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="drop-shadow-md w-full xl:w-3/4 px-5 py-3 mb-5 rounded-lg text-gdg-gray"
//             />
//           </div>
//           <div className="lg:w-[55%]  w-[90%]  flex justify-center flex-col items-center mb-10">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your Password"
//               className="drop-shadow-md w-full xl:w-3/4 px-5 py-3 rounded-lg text-gdg-gray"
//             />
//             {passwordError && (
//               <div className="text-red-500 my-2">{passwordError}</div>
//             )}
//           </div>
//           <button
//             className="lg:w-[55%]  w-[90%]  xl:w-3/4 text-center font-bold px-5 py-3 mb-8 xl:mb-11 text-white bg-purple_button rounded-lg shadow-lg"
//             type="submit"
//           >
//             Continue
//           </button>
//         </form>

//         <div className="flex flex-col items-center ">
//             <p className="text-text_inputs_grey">
//                 Or
//             </p>

//             <p
//             className="w-[55%] text-base xl:w-3/4 text-center font-base px-5 py-3 xl:mb-11 text-text_inputs_grey "
           
//           >
//             Support@entrprisename.dz
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import api from "@/lib/axios"; // Make sure this path points to your axios configuration

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate password length
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }
    setPasswordError("");

    try {
      // Send login request to the API
      const response = await api.post("/api/auth/login", {
        email,
        password,
      });

      // Handle successful login, e.g., save the token
      const { token } = response.data;
      localStorage.setItem("token", token);

      // Redirect to a different page after login
      router.push("/Dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-center w-full px-8 py-20 xl:px-0">
      <div className="w-96 xl:w-1/2 flex items-center justify-center">
        <h1 className="text-5xl xl:text-5xl font-bold text-center">Log In</h1>
        <Image src="/logo-new.png" alt="project Logo" width={90} height={90} />
      </div>

      <div className="w-full xl:min-h-[100vh] xl:flex xl:flex-col xl:justify-center xl:drop-shadow-md bg-white xl:w-1/2 xl:pr-6 p-6">
        <p className="sm:text-sm md:text-lg lg:text-lg text-base 2xl:text-lg xl:text-xl text-center text-text_inputs_grey mb-5">
          Please fill out the form below to continue
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="w-[90%] lg:w-[55%] flex justify-center">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="drop-shadow-md w-full xl:w-3/4 px-5 py-3 mb-5 rounded-lg text-gdg-gray"
            />
          </div>
          <div className="lg:w-[55%] w-[90%] flex justify-center flex-col items-center mb-10">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="drop-shadow-md w-full xl:w-3/4 px-5 py-3 rounded-lg text-gdg-gray"
            />
            {passwordError && (
              <div className="text-red-500 my-2">{passwordError}</div>
            )}
            {loginError && (
              <div className="text-red-500 my-2">{loginError}</div>
            )}
          </div>
          <button
            className="lg:w-[55%] w-[90%] xl:w-3/4 text-center font-bold px-5 py-3 mb-8 xl:mb-11 text-white bg-purple_button rounded-lg shadow-lg"
            type="submit"
          >
            Continue
          </button>
        </form>

        <div className="flex flex-col items-center">
          <p className="text-text_inputs_grey">Or</p>
          <p className="w-[55%] text-base xl:w-3/4 text-center font-base px-5 py-3 xl:mb-11 text-text_inputs_grey">
            Support@entrprisename.dz
          </p>
        </div>
      </div>
    </div>
  );
}
