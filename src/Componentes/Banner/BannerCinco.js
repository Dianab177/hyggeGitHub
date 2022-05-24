import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import marcaData from '../../marcaData';
import logo from "../AssetsBanner/logoHygge.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);




function BannerCinco() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.section}>
      <Typography variant='h4' className={classes.title}>Utilizan {" "}
          <span>
            <img src={logo} alt="logotipo" className={classes.logo} />
          </span></Typography>
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{marcaData[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {marcaData.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.src} alt={step.title} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  section:{
    
  },
  root: {
    marginLeft:'auto',
    marginRight:'auto',
    maxWidth: 100,
    flexGrow: 1,
    
  },
  header: {
    
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    display: 'block',
    maxWidth: 200,
    overflow: 'hidden',
    width: '100%',
  },
  title:{
    
    color:'#005795',
    textAlign:'center',
  },
  logo: {
    height: "25px",
    verticalAlign: "middle",
  },
}));

export default BannerCinco;
