import {makeStyles, Paper, Typography } from "@material-ui/core";
import holas from './Assets/holas.png';



const LogIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.espacio}></div>
     
      <Paper className={classes.paper} elevation={0}>
      <Typography variant="h4" className={classes.title}>¡Hola! es estupendo verte de nuevo</Typography>
      <Typography variant="h6" className={classes.parrafo} gutterBottom>
        ¿Que festejamos?
        </Typography>
      <img src={holas} style={{ height: '350px', width:'200px'}}/>
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
    alignContent:'center',
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
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
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
    textAlign:'center',
    paddingBottom: theme.spacing(5),
  },
 
}));

export default LogIn ;
