"use client";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  useCreateChatClient,
} from "stream-chat-react";
import React from "react";

import 'stream-chat-react/dist/css/v2/index.css';

const Chatforum = ({ clerkUser, slug }) => {

    const apiKey = "Stream_Api_key";
      const userId = clerkUser.id;
      const userName = clerkUser.name;
      const userToken = clerkUser.token;

    //   const filters = { members: { $in: [userId] }, type: "messaging" };
const options = { presence: true, state: true };
const sort = { last_message_at: -1 };
    
      const user = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`,
      };
      const [channel, setChannel] = useState();
      const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
      });
    
      useEffect(() => {
        if (!client) return;
    
        const channel = client.channel("messaging", slug, {
          image: "https://getstream.io/random_png/?name=react",
          name: `${slug} Forum`,
          members: [userId],
        });
    
        setChannel(channel);
      }, [client]);
    
      if (!client) {
        return (
          <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="text-center">
              {/* Spinner */}
              <svg
                className="animate-spin h-12 w-12 mx-auto text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
      
              {/* Loading Text */}
              <h1 className="mt-4 text-2xl font-semibold">Setting up client...</h1>
              <p className="mt-2 text-gray-400">
                Please wait while we establish the connection.
              </p>
            </div>
          </div>
        );
      }
      
    
  return (
  <Chat client={client}>
  <ChannelList sort={sort} options={options} />
      <Channel channel={channel}>

        <Window>
      <div className="sticky top-16 z-10">
          <ChannelHeader />
          </div>

          <MessageList />
          <div className="sticky bottom-0">
  <MessageInput/>
</div>

        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}

export default Chatforum
