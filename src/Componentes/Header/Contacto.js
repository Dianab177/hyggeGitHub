import { makeStyles, Paper, Typography } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import harley from './Assets/harley.png';
import hulk from './Assets/hulk.png';
import america from './Assets/america.png';

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
      <Typography variant="h4" className={classes.title} gutterBottom>Contáctanos</Typography>
      <Typography className={classes.parrafo} gutterBottom>
       
        
        Si estás interesado/a en ponerte en contacto con el personal de hygge,
        consulta nuestros datos de contacto a continuación.
        <br/>
        <br/>
        Estamos aquí para ayudarte de lunes a viernes de 9 a 16 hs.
        <br/><br/> 
        Organizadores de eventos
        <br/> <br/>
        ¿Estás organizando un evento y buscas un espacio?
        Si tienes alguna duda o pregunta relacionada con el sitio web de hygge, 
        contáctanos en:
        <br/><br/>
        support@hygge.com
        <br/><br/> 
        Si estás interesado/a en hacer una reserva u obtener más información 
        obre un espacio determinado, comunícate directamente con el espacio 
        a través del formulario que encontrarás en su perfil.
        <br/><br/>
        <strong>Proveedores de espacios</strong>
        <br/><br/>
        Si eres propietario/a de un espacio que aparece
        en Venuu o que te gustaría incluir, contáctanos en: 
        <br/><br/>
        partners@hygge.com
      </Typography>

      <div className={classes.avatar}>
     <Avatar alt="Remy Sharp" src={harley} className={classes.large}/>
     <Avatar alt="Travis Howard" src={hulk}className={classes.large}/>
     <Avatar alt="Cindy Baker" src={america} className={classes.large}/>
     </div>
      </Paper>
    </div>
  );
};








const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(00,57,95,0.5)",
    minHeight:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  paper: {
    width: '70vw',
    height: '90vh',
    padding: theme.spacing(3),
    backgroundColor: "#FEFCF3",
    
  },
  title:{
    textAlign:'center',
    padding: theme.spacing(4,0,2,0),
    color:'#005795',
    fontWeight:'bold',
  },
  parrafo:{
    color:'#4D4D4D',

  },
  avatar: {
    padding: theme.spacing(5),
    display: 'flex',
    justifyContent:'center',
    '& > *': {
      margin: theme.spacing(1),
    },
    
  },
  large:{
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default Layout;
