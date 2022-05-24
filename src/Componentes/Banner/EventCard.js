import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, Button, Paper, Typography } from "@material-ui/core";

const EventCard = ({ src, title,  backColor}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.fiesta} elevation={0}  style={{borderRadius:20,  height: 350 }}>
        <Card
          className={classes.wrapper}
          style={{ borderRadius: 20, backgroundColor: backColor, height: 350 }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          direction={{ xs: 'column', sm: 'row' }}
        >
          <CardMedia component="img" height="200" image={src} alt={title} />
          <CardContent className={classes.typography}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "#FEFCF3" }}
            >
              {title}
            </Typography>
          </CardContent>
          <CardActions className={classes.button}>
            <Button size="small" variant="inherit" fullWidth>
              Más información
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  fiesta: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "250px",
    backgroundColor: "#FEFCF3",
    overflow: "hidden",
  },
  typography: {
    textAlign:'center',
  },
  wrapper: {
    objectFit: "cover",
    transform: "scale(1.1)",
    transition: ".4s ease-in-out",
    "&:hover": {
      transform: "scale(1)",
    },
  },
  button: {
    "& button": {
      color:"#FEFCF3",
      textTransform: "inherit",
      fontSize: "0.9rem",
      fontWeight: "bold",
      textAlign:'center',
    },
  },
}));
export default EventCard;
