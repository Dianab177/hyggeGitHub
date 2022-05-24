import {Grid, makeStyles, Typography} from '@material-ui/core';
import marcaData from '../../marcaData';
import logo from "../AssetsBanner/logoHygge.png";



export default function BannerSeis() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Typography variant='h4' className={classes.title}>Utilizan {" "}
          <span>
            <img src={logo} alt="logotipo" className={classes.logo} />
          </span>
        </Typography>
      <Grid className={classes.container}>
          {marcaData.map(({ src, title }, index) => (
        <Grid item component="img" height="100px" spacing={4} 
        src={src}
        title={title}
        key={index}
        className={classes.item}
        />
        ))}
      </Grid>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root:{
    minHeight:'25vh',
    backgroundColor:'#FEFCF3',
    flexGrow: 1,
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'column',
    margin: theme.spacing(3),
    
  },
  container:{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    marginTop: theme.spacing(2),
  },
  item:{
    padding: theme.spacing(2),
  },
  title:{
    color:'#005795',
    textAlign:'center',

  },
  logo: {
    height: "25px",
    verticalAlign: "middle",
  },
}))
