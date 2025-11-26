import moment from "moment";
import assets, { messagesDummyData } from "../../public/assets";
import Image from "next/image";
import { useEffect, useRef } from "react";

function ChatContainer({ selectedUser, setSelectedUser }) {
  const scrollEnd = useRef();

  useEffect(() => {
    scrollEnd.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return selectedUser ? (
    <div className="md:p-5 p-3 ">
      {/* Chat Headers */}
      <div className="border-b border-gray-500 pb-5 flex items-center justify-between">
        <div className="flex gap-5 items-center ">
          <Image
            alt="user img"
            src={assets?.profile_martin}
            width={35}
            height={35}
            className="rounded-full"
          />
          <p className="flex-1 flex items-center gap-2">
            Martin <span className="w-2 h-2  bg-green-500 rounded-full"></span>
          </p>
        </div>
        <div className="cursor-pointer">
          <Image alt="icon" src={assets?.help_icon} width={30} height={30} />
        </div>
      </div>

      {/* Chat Area */}
      {/* Chat Area */}
      <div className="flex flex-col overflow-y-scroll scrollbar-hide p-3 pb-6 h-[calc(100%-120px)] gap-4">
        {messagesDummyData?.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${
              msg?.senderId === "680f50e4f10f3cd28382ecf9"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            {/* Show avatar on left for receiver, right for sender */}
            {msg?.senderId !== "680f50e4f10f3cd28382ecf9" && (
              <div className="text-center text-xs">
                <Image
                  alt="img"
                  src={assets?.profile_martin}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p className="text-gray-400 text-[10px]">
                  {moment(msg?.createdAt).format("h:mm a")}
                </p>
              </div>
            )}

            {/* Message content */}
            {msg?.image ? (
              <div className="max-w-[60%]">
                <Image
                  alt="img"
                  src={msg?.image}
                  width={150}
                  height={30}
                  className="overflow-hidden"
                />
              </div>
            ) : (
              <p
                className={`p-3 max-w-[60%]  wrap-break-word text-white font-light text-sm rounded-lg ${
                  msg?.senderId === "680f50e4f10f3cd28382ecf9"
                    ? "bg-violet-500/30 rounded-br-none"
                    : "bg-gray-600/50 rounded-bl-none"
                }`}
              >
                {msg?.text}
              </p>
            )}

            {/* Show avatar on right for sender */}
            {msg?.senderId === "680f50e4f10f3cd28382ecf9" && (
              <div className="text-center text-xs">
                <Image
                  alt="img"
                  src={assets?.avatar_icon}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p className="text-gray-400 text-[10px]">
                  {moment(msg?.createdAt).format("h:mm a")}
                </p>
              </div>
            )}
          </div>
        ))}

        <div ref={scrollEnd}></div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center  h-[90%] w-full">
      <div className="flex flex-col items-center">
        <Image alt="img" src={assets?.logo_icon} width={100} height={100} />
        <p className="text-white text-base text-start">
          Chat anytime, anywhere
        </p>
      </div>
    </div>
  );
}

export default ChatContainer;
