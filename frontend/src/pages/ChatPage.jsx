import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../context/chatProvider";
import { Box } from "@mui/material";

function ChatPage() {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        sx={{
          width: "97%",
          height: "90vh",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
}

export default ChatPage;
