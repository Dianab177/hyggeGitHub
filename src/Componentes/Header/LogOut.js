import { List, ListItemText, makeStyles, Paper, Typography } from "@material-ui/core";
import adios from './Assets/adios.png';
const LogOut = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.espacio}></div>
     
      <Paper className={classes.paper} elevation={0}>
      <Typography variant="h4" className={classes.title}>¡Hasta pronto!</Typography>
      <Typography variant="h6" className={classes.parrafo} gutterBottom>
         Que tengas un día estupendo y ¡te esperamos pronto!
        </Typography>
      <img src={adios}/>
        

          
        
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

export default LogOut ;
