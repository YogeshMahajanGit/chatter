import { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  Box,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pic, setPic] = useState(null);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword, pic });
  };

  // Profile Pic Details
  const PostDetails = (file) => {
    setPic(file);
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
        <Button variant="contained" component="label">
          Upload Profile
          <input
            type="file"
            accept="image/*"
            hidden
            name="profilePic"
            onChange={(e) => PostDetails(e.target.files[0])}
          />
        </Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="primary" fullWidth type="submit">
          Submit
        </Button>
      </Box>
    </Stack>
  );
}

export default SignUp;
