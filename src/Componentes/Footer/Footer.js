import {
  CssBaseline,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "./Assets/logoBlanco.png";
import facebookH from "./Assets/icono-face-hygge.png";
import instagramH from "./Assets/icono-insta-hygge.png";
import twitterH from "./Assets/icono-twitter-hygge.png";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <IconButton className={classes.logo}>
              <img
                src={logo}
                alt="logotipo"
                height="20px"
                className={classes.logo}
              />
            </IconButton>
          </Link>
          <Typography variant="subtitle1" gutterBottom>
            {" "}
            <Link to="/politicas" className={classes.link}>
              Política de privacidad
            </Link>{" "}
            |{" "}
            <Link to="/condiciones" className={classes.link}>
              Condiciones de Uso
            </Link>{" "}
            |{" "}
            <Link to="/cookies" className={classes.link}>
              Cookies
            </Link>{" "}
            |{" "}
            <Link to="/avisos" className={classes.link}>
              Avisos legales
            </Link>{" "}|{" "}
              Copiryght ©{new Date().getFullYear()}
           </Typography>
           <div className={classes.redes}>
           <Link to="/">
           <IconButton className={classes.logo}>
              <img
                src={facebookH}
                alt="logotipo"
                height="30px"
                className={classes.logo}
              />
            </IconButton>  
            </Link>{" "}
            <Link to="/" className={classes.link}>
            <IconButton className={classes.logo}>
              <img
                src= {instagramH}
                alt="logotipo"
                height="30px"
                className={classes.logo}
              />
            </IconButton>
             
            </Link>{" "}
            <Link to="/" className={classes.link}>
            <IconButton className={classes.logo}>
              <img
                src=  {twitterH}
                alt="logotipo"
                height="30px"
                className={classes.logo}
              />
            </IconButton>
             
            </Link>{" "}
           </div>
        </Toolbar>
      </div>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "10vh",
    position: "sticky",
    bottom: 0,
    zIndex: 99,
    width: "100vw",
    textAlign: "center",
    color: "#E1CA9B",
    background: "#005795",
    padding: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "#E1CA9B",
    textDecoration: "none",
  },
  
}));

export default Footer;
