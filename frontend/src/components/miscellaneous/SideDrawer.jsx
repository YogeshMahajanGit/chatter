import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Profile from "./Profile";

function SideDrawer() {
  // const [search, setSearch] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [loadingChat, setLoadingChat] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          width: "99%",
          padding: "5px 10px 5px 10px",
          borderWidth: "5px",
        }}
      >
        <Tooltip title="Search users here" placement="bottom" arrow>
          <Button
            size="small"
            variant="text"
            sx={{
              paddingTop: "10px",
              paddingLeft: "15px",
            }}
            startIcon={<i className="fas fa-search"></i>}
          >
            Search users
          </Button>
        </Tooltip>

        <div className="chat-text">Chatter-Chat</div>

        <div className="profile">
          <div>
            <i
              className="fa-solid fa-bell fa-xl"
              style={{ color: "#0073E6" }}
            ></i>
          </div>

          <div>
            <Profile />
          </div>
        </div>
      </Box>
    </>
  );
}

export default SideDrawer;
