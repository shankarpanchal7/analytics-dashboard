import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import ThemeContext from '../../contexts/ThemeContext'
import theme from '../../utils/theme';
import Copyright from '../../components/Common/Copyright';
import { loginApi } from '../../services/api';
import { validateEmail } from '../../utils/validation';
import { authProvider } from '../../services/authProvider';



export default function Login() {
  const navigate  = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get('email')
    let password = data.get('password')
    console.log({
      email,
      password
    });
    if(validateEmail(email)) {
      let res = await loginApi({email, password})
      if(res) {
        authProvider.signin(email)
        navigate()
      }
      else alert("Invalid email ot password")
    } else {
      alert("Invalid email")
    }
  };

  return (
    <ThemeContext theme={theme}>
       <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                <Link href="/signup" variant="body2" align='center'>
                    {"Don't have an account? Sign Up"}
                  </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright lg sx={{ mt: 4, mb: 4 }} />
      </Container>
    </ThemeContext>
  );
}