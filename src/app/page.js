"use client";
import ChatContainer from "@/components/ChatContainer";
import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

function Home() {
  const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className="bg-[url('/bgImage.svg')] w-full min-h-screen md:py-10 bg-center bg-cover bg-no-repeat sm:px-[10%] md:px-[15%] flex items-center justify-center">
      <div
        className={`grid grid-cols-1 relative border h-[9 0vh] md:h-[85vh] w-full border-gray-500 md:rounded-2xl backdrop-blur-2xl overflow-hidden ${
          selectedUser
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-2"
        }`}
      >
        <Sidebar
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />

        <ChatContainer
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />

        {selectedUser && <RightSidebar />}
      </div>
    </div>
  );
}

export default Home;