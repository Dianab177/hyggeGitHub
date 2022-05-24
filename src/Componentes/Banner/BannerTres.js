import { Button, makeStyles, Typography } from "@material-ui/core";
import background from "../AssetsBanner/standsome-worklifestyle-o9ZR9u-VSnk-unsplash.jpg";
import logo from "../AssetsBanner/logoHygge.png";

const BannerTres = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography
            variant="h5"
            component="h5"
            align="right"
            className={classes.typographyH5}
          >
            Alquilar tu espacio de forma rápida, <br/> segura y 100% online
          </Typography>
        </div>
      </div>

      <div className={classes.typographyH6}>
        <Typography variant="h6" component="h5" gutterBottom>
          ¿Necesitas ayuda con tu búsqueda de tu{" "}
          <span>
            <img src={logo} alt="logotipo" className={classes.logo} />
          </span>{" "}
          espacio?
        </Typography>
        <Typography>
          No te preocupes, nuestro equipo se encargará de encontrar un lugar
          ideal para el evento que tienes en mente.
        </Typography>
        <Button
          className={classes.button}
          href="/contacto"
          size="medium"
          variant="contained"
          color="success"
        >
          Contáctanos
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "80vh",
  },
  root: {
    position: "relaive",
    width: "inherit",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "50vh",
    display: 'flex',
    justifyContent: 'column',
  },
  title: {
    marginTop: theme.spacing(5),
    width:'100%',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems:'flex-end',

    
  },
  typographyH5: {
    bottom:0,
    right:'50px',
    color: "#FEFCF3",
    fontWeight: "bold",
    margin: theme.spacing(5, 5),
  },
  typographyH6: {
    margin: theme.spacing(6, 3),
    height: "30vh",
  },
  logo: {
    height: "15px",
    verticalAlign: "middle",
  },
  button: {
    backgroundColor: "#4D6113",
    borderRadius: "999px",
    color: "#FEFCF3",
    margin: theme.spacing(10, 4),
    padding: theme.spacing(1, 2),
  },
}));

export default BannerTres;
