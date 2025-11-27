import Image from "next/image";
import React from "react";
import assets, { userDummyData } from "../../public/assets";
import { EllipsisVertical, Search } from "lucide-react";

function Sidebar({ selectedUser, setSelectedUser }) {
  return (
    <div className="bg-[#8185B2]/10 md:h-screen">
      {/* Header */}
      <div className="flex gap-2 justify-between items-center p-4">
        <div className="flex gap-2 items-center">
          <Image alt="logo" src={assets?.logo_icon} width={35} height={40} />
          <p className="text-white font-semibold text-lg">Quick Chat</p>
        </div>
        <EllipsisVertical className="text-white cursor-pointer" />
      </div>

      {/* Input for search user */}
      <div className="relative mt-5 px-4">
        <input
          type="text"
          placeholder="Search users..."
          className="border pl-10 backdrop-blur-2xl bg-gray-900 text-white placeholder-gray-400 border-gray-500 py-2 rounded-full outline-none w-full"
        />
        <Search
          className="absolute top-1/2 -translate-y-1/2 left-7 text-gray-400"
          size={20}
        />
      </div>

      {/* User Data */}
      <div className="mt-5 overflow-y-auto md:h-[calc(100vh-180px)] scrollbar-hide">
        {userDummyData?.map((data) => (
          <div
            key={data?._id}
            onClick={() => setSelectedUser(data)}
            className={` hover:bg-gray-800/50 rounded-full transition mx-5 ${
              selectedUser?._id === data?._id ? "bg-gray-800/70" : ""
            }`}
          >
            <div className="flex gap-3 md:py- 3 py-1 md:px-4 px-2 items-center cursor-pointer">
              {/* Profile Picture with Online Indicator */}
              <div className="relative">
                <Image
                  alt="user img"
                  src={data?.profilePic}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                {/* Online Status Indicator */}
                {data?.isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></span>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-base font-medium truncate">
                  {data?.fullName}
                </p>
                <div className="flex items-center gap-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      data?.isOnline ? "bg-green-500" : "bg-gray-500"
                    }`}
                  ></span>
                  <span
                    className={`text-sm ${
                      data?.isOnline ? "text-green-500" : "text-gray-400"
                    }`}
                  >
                    {data?.isOnline ? "Online" : "Offline"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
