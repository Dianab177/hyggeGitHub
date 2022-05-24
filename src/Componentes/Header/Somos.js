import { List, ListItemText, makeStyles, Paper, Typography } from "@material-ui/core";

const Somos = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.espacio}></div>
     
      <Paper className={classes.paper} elevation={0}>
      <Typography variant="h4" className={classes.title} gutterBottom>¿Quienes somos?</Typography>
        <Typography variant="body2" className={classes.parrafo} gutterBottom>
          Sobre nosotros hygge hace que la laboriosa búsqueda del espacio sea
          fácil al conectar a los organizadores de eventos con los mejores
          proveedores de su zona, ofreciendo a las personas la oportunidad de
          entusiasmarse con su próximo evento.
          <br/>
          <br/>
          Ya sea una fiesta, una boda o un
          día de team building con la empresa, muchos de nuestros mejores
          recuerdos se crean en eventos junto con otras personas.
          <br/>
          <br/>
           Pero planificar un evento puede ser un verdadero dolor de cabeza. Empiezas
          a planificar el día con grandes esperanzas y sueños, pero rápidamente
          te das cuenta de que es increíblemente difícil y requiere mucho tiempo
          encontrar el lugar perfecto. 
          <br/>
          <br/>
          No conoces los lugares de tu zona y la
          información que puedes encontrar es escasa e insuficiente. Terminas
          haciendo docenas de llamadas telefónicas y al final acabas yendo de un
          sitio para otro buscando la ubicación deseada.
          <br/>
          <br/>
          No debería ser tan complicado. 
          <br/>
          <br/>
          hygge es el lugar ideal para descubrir los mejores
          espacios que se ajustan a tus necesidades. 
          <br/>
          <br/>
          Con hygge, no pasarás interminables horas navegando entre cientos de alternativas aburridas
          y desperdiciando tiempo y dinero con intermediarios o tarifas
          engañosas. Simplemente explora nuestras recomendaciones de espacios,
          comunícate con tus opciones favoritas y confirma la reserva
          directamente con el propietario.
          <br/>
          <br/>
          Entonces, por qué no evitar todo el estrés y problemas para que centres tu energía en lo que realmente
          importa - el evento en sí. 
          <br/>
          <br/>
          </Typography>

          <List component='nav' arial-label='HYGGE EN NÚMEROS: '>
            
            <ListItemText primary=' Fundado en 2021'/>
            <ListItemText primary=' 50,000+ usuarios mensuales'/>
            <ListItemText primary=' 10,000+ espacios a nivel mundial'/>
            <ListItemText primary=' 20,000+ eventos organizados '/>
            <ListItemText primary=' 1M+ recuerdos inolvidables'/>
         
          </List>

        
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
  espacio:{
    height: theme.spacing(10),
    backgroundColor:'#fff',
  
  },
  paper: {
    width: '70vw',
    height: '80vh',
    padding: theme.spacing(5, 5),
    backgroundColor: "#FEFCF3",
    overflow:'auto',
  },
  title:{
    textAlign:'center',
    fontWeight:'bold',
    padding: theme.spacing(5),
    color:'#005795',
  },
  parrafo:{
    color:'#4D4D4D',

  }
}));

export default Somos;
