"use client";
import Image from "next/image";
import React, { useState } from "react";
import assets from "../../../public/assets";

function page() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen bg-center bg-cover   backdrop-blur-2xl flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col   ">
      {/* left image logo */}
      <Image alt="logo" src={assets?.logo_big} width={200} />

      {/* Form */}
      <form>
        <div className="border bg-[#8185B2] px-5 py-10 w-96">
          <h1 className="font-semibold text-lg">
            {!isLogin ? "Sign up" : "Login"}
          </h1>
          <div className="flex flex-col my-5 gap-5">
            {!isLogin ? (
              <>
               <input
              type="text"
              placeholder="Full name"
              className="border border-gray-60 0 rounded-lg px-2 py-2 outline-none   "
              />
            
            <input
              type="email"
              placeholder="Email"
              className="border px-2 py-2 outline-none rounded-lg "
            />
            <input
              type="password"
              placeholder="Password"
              className="border bg-transparent px-2 py-2 outline-none rounded-lg "
            />
              </>
            ) : (
                <>
               <input
              type="email"
              placeholder="Email"
              className="border px-2 py-2 outline-none rounded-lg "
            />
            <input
              type="password"
              placeholder="Password"
              className="border bg-transparent px-2 py-2 outline-none rounded-lg "
              /> 
              </>
            )}
            <button className="px-2 py-2 rounded-md  bg-white  text-purple-600 font-semibold cursor-pointer">
              {!isLogin ? "Create your account" : "Login"}
            </button>
          </div>

          {!isLogin ? (
          
          <p className="text-white text-base pt-5">
            Already have an account?{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-base text-purple-700 hover:text-purple-600 font-semibold cursor-pointer"
            >
                Login here
            </span>
          </p>
          ) : (
              
          <p className="text-white text-base pt-5">
             Don't have acount ?{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-base text-purple-700 hover:text-purple-600 font-semibold cursor-pointer"
            >
               Please  sign up
            </span>
          </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default page;
