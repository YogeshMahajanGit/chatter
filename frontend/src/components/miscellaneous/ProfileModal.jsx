/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 20,
  p: 4,
};

function ProfileModal({ user, children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              textTransform: "uppercase",
              fontFamily: "Work sans",
              fontSize: "35px",
            }}
          >
            {user.name}
          </Typography>
          <div className="img">
            <img src={user.name} alt={user.name} style={{ width: "150px" }} />
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {user.email}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ProfileModal;
