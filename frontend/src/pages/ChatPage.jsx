import { useEffect, useState } from "react";

function ChatPage() {
  const [chat, setChat] = useState([]);
  async function fetchChats() {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/chat`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setChat(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch chats:", error);
    }
  }

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chat.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
}

export default ChatPage;
