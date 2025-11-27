import moment from "moment";
import assets, { messagesDummyData } from "../../public/assets";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { CloudUploadIcon, Send } from "lucide-react";

function ChatContainer({ selectedUser, setSelectedUser }) {
  const scrollEnd = useRef();

  useEffect(() => {
    scrollEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesDummyData]);

  return selectedUser ? (
    <div className="flex flex-col h-[90vh] md:h-[85vh]">
      {/* Chat Headers */}
      <div className="border-b p-4 flex items-center gap-3 shrink-0">
        <Image
          src={assets?.profile_martin}
          height={40}
          width={40}
          className="rounded-full"
          alt="user"
        />
        <h2 className="font-semibold">Martin</h2>
      </div>

      {/* Chat Area - Scrollable */}
      <div className="flex-1 overflow-y-auto md:py-5 py-2 px-2 scrollbar-hide min-h-0">
        {messagesDummyData?.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 mb-4 ${
              msg?.senderId === "680f50e4f10f3cd28382ecf9"
                ? "flex-row-reverse justify-start"
                : "justify-start"
            }`}
          >
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <Image
                src={
                  msg?.senderId === "680f50e4f10f3cd28382ecf9"
                    ? assets?.avatar_icon
                    : assets?.profile_martin
                }
                height={30}
                width={30}
                className="rounded-full"
                alt="user"
              />
              <span className="text-xs text-gray-400 mt-1">
                {moment(msg?.createdAt).format("h:mm a")}
              </span>
            </div>

            {/* Message content */}
            {msg?.image ? (
              <div className="rounded-lg overflow-hidden max-w-xs">
                <Image
                  src={msg?.image}
                  alt="message"
                  height={200}
                  width={300}
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg?.senderId === "680f50e4f10f3cd28382ecf9"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg?.text}
              </div>
            )}
          </div>
        ))}

        {/* Scroll target */}
        <div ref={scrollEnd} />
      </div>

      {/* Input field - Fixed at bottom */}
      <div className="border-t p-3 flex items-center gap-3 shrink-0">
        <div className="flex-1 relative flex items-center">
          <input
            type="text"
            placeholder="Write your msg.........."
            className="w-full p-2 pr-12 outline-none bg-gray-900 text-white rounded-full px-5"
          />
          <input id="file" type="file" className="hidden" />
          <label
            htmlFor="file"
            className="absolute right-2 cursor-pointer bg-gray-500 p-1 rounded-full hover:bg-gray-600 transition"
          >
            <CloudUploadIcon size={20} />
          </label>
        </div>
        <button className="bg-purple-600 p-2 rounded-full flex items-center cursor-pointer hover:bg-purple-700 transition">
          <Send size={20} />
        </button>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Chat anytime, anywhere</h2>
      </div>
    </div>
  );
}

export default ChatContainer;