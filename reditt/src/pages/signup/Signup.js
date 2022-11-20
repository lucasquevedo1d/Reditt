import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ContainerButton, Font, FontButton } from './styled';
import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/UseForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/URL';


const Signup = () => {

  const navigate = useNavigate()
  const [form, onchange, clear]= useForm({username:"",email:"", password:""})
  console.log("Form:",form)
  const Copyright = () => {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="/feed">
          Library Social
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const body={
      username:form.username,
      email:form.email,
      password:form.password
    }

    console.log("body",body)

    await axios.post(`https://labeddit-2.herokuapp.com/users/signup`, body)
    .then((res) =>{
      window.localStorage.setItem("token", res.data.token)
      console.log(res)
    })
    .catch((err) =>{
      console.log(err)
    })
  };
  React.useEffect(() =>{
    handleSubmit()
  },[])
  return (
    <div>
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
            <Font><h1>Cadastrar</h1></Font>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  label="Nome"
                  autoFocus
                  value={form.username}
                  onChange={onchange}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Endereço de e-mail"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  autoComplete="new-password"
                  value={form.password}
                  onChange={onchange}
                />
              </Grid>
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <FontButton>Cadastrar</FontButton>
            </Button>
            <ContainerButton>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              margin="normal"
            >
             <FontButton>Voltar e fazer login</FontButton> 
            </Button>
            </ContainerButton>
          
          </Box>
        </Box>
      </Container>
      <br></br>
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 5,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          
          <FontButton>Libary Social</FontButton>  
          <Copyright/>
        </Container>
      </Box>
      </div>
  );
}

export default Signup