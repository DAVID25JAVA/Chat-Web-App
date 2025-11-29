import Image from "next/image";
import React from "react";
import assets, { imagesDummyData } from "../../public/assets";

function RightSidebar({ selectedUser }) {
  return (
    <div className=" pt-5 px-2  flex flex-col bg-[#8185B2]/10">
      <div className="mx-auto border-b pb-2 w-full">
        <Image
          alt="img"
          src={
            (selectedUser && selectedUser?.profilePic) || assets?.avatar_icon
          }
          className="mx-auto w-20 rounded-full"
        />

        <h1 className=" mx-auto font-semibold text-base py-1 flex items-center justify-center gap-2 ">
          <div className="w-2 h-2 rounded-full bg-green-600"></div>
          {selectedUser?.fullName}
        </h1>
        <p className="text-white text-sm w-44 mx-auto text-center">
          {selectedUser?.bio}
        </p>
      </div>

      {/* Media Images */}
      <div>
        <p className="text-start px- 2 text-base py-2">Media</p>
        <div className="grid grid-cols-2 gap-2  ">
          {imagesDummyData?.map((url, index) => (
            <div
              key={index}
              onClick={() => window.open(url?.src)}
              className="cursor-pointer"
            >
              <Image alt="img" src={url} className="w-full"   />
            </div>
          ))}
        </div>
      </div>

      {/* logout button */}
      <div className="flex items-center justify-center">
        
      <button className="text-white text-base absolute  bottom-3 text-center bg-purple-500   transform px-20  py-2  cursor-pointer hover:bg-purple-600  rounded-full">
        Logout
      </button>
          </div>
    </div>
  );
}

export default RightSidebar;
