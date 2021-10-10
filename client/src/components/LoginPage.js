import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    marginTop: '207px',
    marginLeft: '190px',
    marginRight: '121px',
    marginBottom: '129px',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: '108px',
    backgroundColor: '#3742FA',
    borderRadius: '69px',
    boxShadow: '0px 4px 14px 1px #949AFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '25px',
    lineHeight: '30px',
    color: '#FFFFFF',
  },
}));

export default function LoginPage() {


  const classes = useStyles();

  const [variables, setVariables] = useState({
    localEmail: '',
    password: '',
 });


 const [roles, setRoles] = useState('resp');
 console.log(roles,"responsedeepak")


 
 const {
  localEmail,password
} = variables;

const fetchedEmail = variables.localEmail
console.log(fetchedEmail,"fetchedemail")

const fetchedPassword = variables.password
console.log(fetchedPassword,"fetchedpass")



  // Method handles change in variables
  const handleChange = (event) => {
    const { target: { name, value, checked } } = event;

    setVariables({
      ...variables,
      [name]: value || checked,
    });
  };
  

  // Method to check if password supplied by user confirms by our rules
  // const passwordCheck = (pass) => {
  //   // checking if password is not null and is longer than 8 characters
  //   if (pass.length < 8) {
  //     return false;
  //   }

  //   if (pass.match(/[0-9]+/g) !== null && password.match(/[a-zA-Z]+/g) !== null) {
  //     return true;
  //   }
  //   return false;
  // };

  
  

  const apicall = () => {
      signin(fetchedPassword,fetchedEmail)

  }

  const handleSubmit = () => {
    console.log("handle submit running")
    // if (!localEmail || !password) {
    //   toast.error('Enter email or password');
    //   return;
    // }

    // if (!passwordCheck(password)) {
    //   toast.error('Password should contain at least one character and one number. They should also at least have 8 characters');
    //   return;
    // }

     apicall();
    };



    const signin = async(fetchedPassword,fetchedEmail) => {

      const pswd = {fetchedPassword}
      const loginid = {fetchedEmail}
      
      const options = {
        url: `http://localhost:8000/login`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      await axios.post(`http://localhost:8000/login`, {"id": loginid,"password": pswd},
      options)
      .then(response=>  setRoles(response.data[0].roles))
      .catch((errr) => {
        console.log(errr)
    })
    };
  
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography
            style={{fontFamily: 'Work Sans',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '50px',
                    lineHeight: '59px',
                    color: '#000000',
                    textAlign: 'left',
                    }}>
                Sign In
          </Typography>
          <br/>
          <br/>
          &nbsp;
          <div className={classes.form} noValidate>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Login Id"
              name="localEmail"
              value={localEmail || ''}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <br/>
            <br/>
            <br/>
            &nbsp;
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password || ''}
              onChange={handleChange}
              id="password"
              autoComplete="current-password"
            />
            <br/>
            <br/>
            <Grid container style={{ textAlign: 'right',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                    color: '#102371',}}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
            &nbsp;
            <FormControlLabel
              style={{ float: 'left',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '20px',
                        lineHeight: '24px',
                        color: '#000000',
                        }}
              control={<Checkbox value="remember" color="primary" />}
              label="Keep me signed in"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>s
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
