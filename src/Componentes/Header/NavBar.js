import { AppBar, Avatar, Drawer, IconButton, InputBase, List, ListItem, makeStyles, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { useEffect, useState } from 'react';
import logo from './Assets/hygge.png';
import { Link } from 'react-router-dom';


const NavBar = () => {

  const [tablet, setTablet] = useState(true)
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  useEffect(()=>{
    const responsiveness = () => window. innerWidth < 900 ? setTablet(true) : setTablet(false)
    responsiveness();
    window.addEventListener('resize', ()=>responsiveness())
  }, [])

  const displayTablet = () => {
    const handleDrawerOpen = () => {
      setDrawerOpen(true)
    }
    const handleDrawerClose = () => {
      setDrawerOpen(false)
    }

    const headersData = [ <Link to='/login' className={classes.link}>My account</Link>,
    <Link to='/somos'  className={classes.link}>¿Qué es Hygge?</Link>,
    <Link to='/contacto' className={classes.link}>Contacto</Link>,<Link to='/logOut' className={classes.link}>Log out</Link> ]
    const getDrawerChoices = () => {
      return headersData.map((data) => {
        return(
          <List>
            <ListItem>{data}</ListItem>
          </List>
        )
      })
    }

    return(
    <Toolbar className={classes.toolbar}>
      <IconButton {...{edge: 'start', color: '#4D4D4D',
       'aria-label': 'menu', 'aria-haspopup': 'true',
       onClick: handleDrawerOpen,}}>
        <MenuIcon className={classes.menuIcon} fontSize='large' />
      </IconButton>
      <Drawer 
      {...{
        anchor: 'left',
        open: drawerOpen,
        onClose: handleDrawerClose,
    } } >

      <div style={{backgroundColor:'#FEFCF3',minHeight:'100vh', paddingTop: '30px' }}> {getDrawerChoices()} </div>
      </Drawer>
      <Link to='/'>
      <img src={logo} className={classes.logo} alt='imagen logo'/>
      </Link>
      <div className={classes.right}>
          <Link to='/logIn'className={classes.right}>
            <Typography>Sing in</Typography>
            <Avatar className={classes.avatar}/>
          </Link>
      </div>
    </Toolbar>
    )
  }

  const displayDesktop = () => (
      <Toolbar className={classes.toolbar}>
        <Link to='/'>
      <img src={logo} className={classes.logo} alt='imagen logo'/>
      </Link>
        <div className={classes.center}>
        <Link to='/somos' variant='h5' className={classes.link} >¿Qué es Hygge?</Link>
        <Link to='/contacto'variant='h5' className={classes.link}>hygge Blog</Link>
        <Link to='/contacto'variant='h5' className={classes.link}>Contacto</Link>
        </div>
        <div className={classes.right}>
          <Link to='/logIn' className={classes.right}>
          <Typography>Sing in</Typography>
          <Avatar className={classes.avatar}/>
          </Link>
        </div>
       
      </Toolbar>
      )

  return (
    <AppBar className={classes.root} elevation='0'>
      {tablet ? displayTablet() : displayDesktop()}
      <div className={classes.blue}></div>
    </AppBar>
  )
}



const useStyles = makeStyles((theme) => ({
    root:{
      position: 'sticky',
      top: 0,
      zIndex: 99,
      width: '100vw',
    },
    toolbar:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FEFCF3',
    },
    blue:{
      backgroundColor: '#005795',
      height:'5px',
    },
    logo:{
      height: '30px',
      margin: theme.spacing(1,0,0,2),
      objectFit: 'contain',
    },
    center:{
      display: 'flex',
      alignItems:'center',
      minWidth: '200px',
      padding: theme.spacing(1,3),
      margin:theme.spacing(1),
    },
    input:{
      fontSize: '1.2rem',
      padding: theme.spacing(1,5,1,5)
    },
    SearchIcon:{
      color: '#4D4D4D',
      height: '30px',
    },
    right:{
      display: 'flex',
      alignItems: 'center',
      color: '#4D4D4D',
      marginLeft: theme.spacing(2),
      textDecoration: 'none',
    },
    avatar:{
      color: '#4D4D4D',
      backgroundColor: '#FEFCF3',
      marginLeft: theme.spacing(1),
      
    },
    link: {
      textDecoration: 'none',
      color: '#4D4D4D', 
      padding: theme.spacing(0,3),
      fontSize:'1.2rem'
      
    }
  }))

export default NavBar;