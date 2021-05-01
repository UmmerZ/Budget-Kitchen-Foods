import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Button, makeStyles, List } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import MenuIcon from "@material-ui/icons/Menu"
import { useAuth } from "./auth/AuthContext"

export default function Navbar() {
  const { logout } = useAuth()
  const useStyle = makeStyles(theme => ({
    buttons: {
      margin: "0 10px 0 5px",
      marginRight: "10px",
      textDecoration: "none",
      "&:hover": {
        backgroundColor: "grey",
      },
    },
    navbar: {
      boxShadow: "none",
    },
    scrolled: {
      position: "fixed",
      top: "10px",
      backgroundColor: "#1C1C1C",
      transition: "all .7s ease-in",
    },
    list: {
      width: "80%",
      marigin: "auto",
    },
    link: {
      textDecoration: "none",
      color: "#ffffff",
      "&:hover": {
        textDecoration: "none",
      },
    },
    mobilebutton: {
      display: "block",
      color: "#ffffff",
    },
    navLeft: {},
    navRight: {
      float: "right",
    },
    navContainer: {
      flexGrow: 1,
    },
  }))
  const classes = useStyle()
  const [scrolled, setScrolled] = useState(false)
  const [ismobileMenu, setIsMobileMenu] = useState(false)

  const [isMobile, setIsMobile] = useState(window.innerWidth)
  const breakPoint = 750

  const handleResize = () => {
    setIsMobile(window.innerWidth)
  }
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const mobileMenu = (
    <div className={classes.navContainer}>
      <AppBar>
        <Button className={classes.mobilebutton} color="inherit">
          <Link className={classes.link} to="/">
            Home
          </Link>
        </Button>
        <hr />
        <Button className={classes.mobilebutton} color="inherit">
          <Link className={classes.link} to="/sales">
            Sales
          </Link>
        </Button>
        <hr />
        <Button className={classes.mobilebutton} color="inherit">
          <Link className={classes.link} to="/ingredients">
            Ingredients
          </Link>
        </Button>
        <hr />
        <Button
          className={classes.mobilebutton}
          color="inherit"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </AppBar>
    </div>
  )

  const fullWidthMenu = (
    <div className={classes.navContainer}>
      <List>
        <Button className={classes.buttons} color="inherit">
          <Link className={classes.link} to="/">
            <HomeIcon />
          </Link>
        </Button>
        <Button className={classes.buttons} color="inherit">
          <Link className={classes.link} to="/ingredients">
            Ingredients
          </Link>
        </Button>
        <Button className={classes.buttons} color="inherit">
          <Link className={classes.link} to="/sales">
            Sales
          </Link>
        </Button>

        <div className={classes.navRight}>
          <Button
            className={classes.buttons}
            color="inherit"
            onClick={() => logout()}
          >
            Log Out
          </Button>
        </div>
      </List>
    </div>
  )
  const mobileNavbar = (
    <List className={classes.list}>
      <Button className={classes.buttons} color="inherit">
        <MenuIcon onClick={() => setIsMobileMenu(value => !value)} />
      </Button>
    </List>
  )
  return (
    <div style={{ marginTop: "20px" }}>
      <AppBar
        position="static"
        className={scrolled ? classes.scrolled : classes.navbar}
      >
        <Toolbar variant="dense">
          {isMobile < breakPoint ? mobileNavbar : fullWidthMenu}
        </Toolbar>
      </AppBar>
      {ismobileMenu && isMobile < breakPoint ? mobileMenu : ""}
    </div>
  )
}
