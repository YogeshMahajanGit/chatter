import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TabsPage from "../components/TabsPage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/chats");
    }
  }, [navigate]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
      }}
      className="app"
    >
      <div className="center">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "white",
            color: "black",
            width: "50%",
            height: "2vh",
            borderRadius: "4px",
            fontSize: "26px",
            fontFamily: "Work sans",
            letterSpacing: 3,
          }}
        >
          <div>Chatter-Chat</div>
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            color: "black",
            width: "50%",
            padding: "20px",
            borderRadius: "4px",
          }}
        >
          <TabsPage />
        </Box>
      </div>
    </Container>
  );
}

export default Homepage;
