import { InputBase, makeStyles, Typography } from "@material-ui/core";
import background from "../AssetsBanner/jose-leon-Q6XEyE3mm-8-unsplash.jpg";
import SearchIcon from "@material-ui/icons/Search";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PeopleIcon from "@material-ui/icons/People";
import Box from "@material-ui/core/Box";
import BannerTres from "./BannerTres";
import BannerDos from "./BannerDos";
import BannerCuatro from "./BannerCuatro";
import BannerCinco from "./BannerCinco";
import BannerSeis from "./BannerSeis";

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.root}>
        <div className={classes.banner}>
          <Typography variant="h3" component="h1" className={classes.title}>
            <Box sx={{ fontWeight: "bold", m: 2 }}>
              Espacios para todo tipo de eventos
            </Box>
          </Typography>
          <Typography variant="h6" component="h6" className={classes.subTitle}>
            ¡Festeja tu boda o celebra reuniones donde más te guste!
          </Typography>

          <div className={classes.search}>
            <div className={classes.center}>
              <InputBase
                fullWidth
                placeholder="Donde festejamos ..."
                inputProps={{ className: classes.input }}
              />
              <LocationOnIcon className={classes.SearchIcon} />
            </div>

            <div className={classes.center}>
              <InputBase
                fullWidth
                placeholder="Cuando va a ser ..."
                inputProps={{ className: classes.input }}
              />
              <CalendarTodayIcon className={classes.SearchIcon} />
            </div>

            <div className={classes.center}>
              <InputBase
                fullWidth
                placeholder="Cuantos vienen ..."
                inputProps={{ className: classes.input }}
              />
              <PeopleIcon className={classes.SearchIcon} />
            </div>

            <div className={classes.inputsearch}>
              <InputBase
                fullWidth
                placeholder="Busca tu espacio ..."
                inp
                utProps={{ className: classes.inputSearch }}
              />
              <SearchIcon className={classes.SearchIcon} />
            </div>
          </div>
        </div>
      </div>
      <BannerDos />
      <BannerTres />
      <BannerCuatro />
      
      <BannerSeis />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  root: {
    width: "inherit",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "50vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  banner: {
    textAlign: "center",
    color: "#FEFCF3",
  },
  title: {
    [theme.breakpoints.down("md")]: {
      variant: "h6",
    },
  },
  subTitle: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    justifyContent: "center",
    alignItems: "space-between",
    "&: div:lastOfType": {
      backgroundColor: "#ccc",
    },
  },
  input: {
    borderRadius: "7px",
    padding: theme.spacing(1),
  },
  center: {
    display: "flex",
    alignItems: "center",
    height: "35px",
    minWidth: "200px",
    color: "#E1CA9B",
    padding: theme.spacing(1, 2),
    margin: theme.spacing(4),
    borderRadius: "999px",
    backgroundColor: "#FEFCF3",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  inputsearch: {
    display: "flex",
    alignItems: "center",
    height: "35px",
    minWidth: "200px",
    color: "#E1CA9B",
    padding: theme.spacing(1, 2),
    margin: theme.spacing(4, 2),
    borderRadius: "999px",
    backgroundColor: "#4D6113",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#FEFCF3",
    },
  },
  inputSearch: {
    color: "#FEFCF3",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#FEFCF3",
      color: "#4D4D4D",
    },
  },
 
}));

export default Banner;
