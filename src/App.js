import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from './Componentes/Banner/Banner';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import Footer from './Componentes/Footer/Footer';
import Condiciones from './Componentes/Footer/Condiciones';
import Avisos from './Componentes/Footer/Avisos';
import Politicas from './Componentes/Footer/Politicas';
import Cookies from './Componentes/Footer/Cookies';
import NavBar from './Componentes/Header/NavBar';
import Somos from './Componentes/Header/Somos';
import Contacto from './Componentes/Header/Contacto';
import LogOut from './Componentes/Header/LogOut';
import LogIn from './Componentes/Header/LogIn';


function App() {
  const classes = useStyles();
  const theme = createTheme({
    breakpoints:{
      values:{
        xxs:320,
        xs:480,
        sm:640,
        md:768,
        lg:1024,
        xl:1220,
        xxl:1366,
        xxxl:1620,
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
       <Router>
         <NavBar />
        <Switch>
       <Route path='/avisos'>
         <Avisos />
       </Route> 

       <Route path='/politicas'>
         <Politicas />
       </Route>

       <Route path='/cookies'>
         <Cookies />
        </Route>

         <Route path='/condiciones'>
         <Condiciones />
         </Route> 

         <Route path='/somos'>
         <Somos/>
         </Route>

         <Route path='/contacto'>
         <Contacto/>
         </Route> 

         <Route path='/logout'>
         <LogOut/>
         </Route> 

         <Route path='/logIn'>
         <LogIn/>
         </Route> 

         <Route path='/'>
         <Banner />

         </Route>

         </Switch>
       <Footer />

       </Router>
    </div>
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight:'100vh',
    backgroundColor:'#FEFCF3',
  },
}))

export default App;
