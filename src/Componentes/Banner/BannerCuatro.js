import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import carrito from "../AssetsBanner/carrito.png";
import disponibilidad from "../AssetsBanner/disponibilidad.png";
import hotel from "../AssetsBanner/hotel.png";

const BannerCuatro = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.title}>
        <Typography variant="h4">¿Cómo funciona?</Typography>
      </div>

      <div className={classes.root}>
        <div className={classes.card}>
          <Card
            sx={{ maxWidth: 250 }}
            elevation={0}
            style={{ backgroundColor: "#4D6113" }}
          >
            <CardMedia
              component="img"
              image={hotel}
              alt="icono busqueda hotel"
              className={classes.img}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "#FEFCF3" }}
              >
                1. Encuentra tu espacio
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ color: "#FEFCF3" }}
              >
                Encuentra el Hygge que se adapte a las necesidades de tu
                actividad.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className={classes.card}>
          <Card
            sx={{ maxWidth: 250 }}
            elevation={0}
            style={{ backgroundColor: "#4D6113" }}
           
          >
            <CardMedia
              component="img"
              image={disponibilidad}
              alt="icono disponibilidad"
              className={classes.img}
              
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "#FEFCF3" }}
              >
                2. Verificamos la disponibilidad
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ color: "#FEFCF3" }}
              >
                Céntanos cuando necesitas el espacio y solicita verificar
                disponibilidad.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className={classes.card}>
          <Card
            sx={{ maxWidth: 250 }}
            elevation={0}
            style={{ backgroundColor: "#4D6113" }}
          >
            <CardMedia
              component="img"
              image={carrito}
              alt="icono carrito"
              className={classes.img}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "#FEFCF3" }}
              >
                3. Pagas en linea
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ color: "#FEFCF3" }}
              >
                Paga en linea una vez verificada la disponibilidad. ¡Y disfruta
                del evento!
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "75vh",
    backgroundColor: "#4D6113",
    color: "#FEFCF3",
    padding: theme.spacing(5, 0),
    margin: theme.spacing(5, 0),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    textAlign: "center",
    margin: theme.spacing(5),
  },
  card: {
    width: "250px",
    margin: theme.spacing(4),
    padding: theme.spacing(2),
  },
  img:{
    
  },
}));

export default BannerCuatro;
