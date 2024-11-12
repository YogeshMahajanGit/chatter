import { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  // Password show/hide toggle
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Stack spacing={2} component="form" onSubmit={handleSubmit}>
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
      <Box
        mt={2}
        sx={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}
      >
        <Button variant="contained" color="primary" fullWidth type="submit">
          Login
        </Button>
        <Button variant="outlined" color="warning" fullWidth type="submit">
          Get Guest User Credentials
        </Button>
      </Box>
    </Stack>
  );
}

export default Login;
