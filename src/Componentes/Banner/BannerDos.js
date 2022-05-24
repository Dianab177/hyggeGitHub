import React from "react";
import { GridList, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import cardData from "../../CardData";

const BannerDos = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.root}>
        <Link
          to="/buscador"
          style={{ textDecoration: "none" }}
          className={classes.grid}
        >
          <GridList cellHeight={220} className={classes.gridList}>
            {cardData.map(({ src, title, backColor }, index) => (
              <EventCard
                src={src}
                title={title}
                backColor={backColor}
                key={index}
              />
            ))}
          </GridList>
        </Link>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "50vh",
    margin: theme.spacing(4),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
 
}));

export default BannerDos;
