import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  TextField,
  Box,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { showToast } from "../Toast";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pic, setPic] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
      showToast("warning", "All Fields are Required!");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      showToast("error", "Wrong Password!");
      setLoading(false);
      return;
    }

    // post call
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      showToast("success", "Register Successful!");

      // store in local storage
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      console.log(error);
      showToast("error", `${error.responce.data.message}`);
      setLoading(false);
    }
  };

  // Profile Pic Details
  const PostDetails = (pic) => {
    setLoading(true);
    if (pic === undefined) {
      showToast("warning", "Please Select Profile Pic");
      return;
    }

    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "do5sjxvjl");
      fetch("https://api.cloudinary.com/v1_1/do5sjxvjl/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      showToast("warning", "Somthing Wrong!");
    }
  };

  // Password show/hide toggle
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Stack spacing={2} component="form" onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          name="name"
          required
          size="small"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          required
          size="small"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box mb={2}>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel required htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            size="small"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
      <Box mb={2}>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel required htmlFor="outlined-adornment-confirm-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            size="small"
            id="outlined-adornment-confirm-password"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
      </Box>
      <Box mb={2}>
        <LoadingButton variant="contained" component="label">
          Upload Profile
          <input
            type="file"
            accept="image/*"
            hidden
            name="profilePic"
            loading={loading ? "true" : undefined}
            onChange={(e) => PostDetails(e.target.files[0])}
          />
        </LoadingButton>
      </Box>
      <Box mt={2}>
        <LoadingButton
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          loading={loading}
          onClick={handleSubmit}
        >
          Sign Up
        </LoadingButton>
      </Box>
    </Stack>
  );
}

export default SignUp;
