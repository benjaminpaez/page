import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import HouseSidingOutlinedIcon from "@mui/icons-material/HouseSidingOutlined";

import styles from "./Navbar.module.css";
import { Grid, ListItemButton, ListItemIcon } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Logo } from "./Logo";
import { Link as ScrollLink } from "react-scroll";
import "./navbar.css";

export const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <AppBar position="relative" className={styles.background}>
        <Toolbar>
          {isMobile ? (
            <div>
              <nav
                className={`navbar ${
                  scrolled ? "header-scrolled" : "header-scrolled"
                }`}
              >
                <Logo />
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={toggleDrawer(true)}
                  className={`menu-icon-button ${scrolled ? "scrolled" : ""}`}
                >
                  <MenuIcon />
                </IconButton>
              </nav>
            </div>
          ) : (
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item lg={6}>
                <Logo />
              </Grid>
              <Grid item lg={6}>
                <nav
                  style={{ flex: 1, textAlign: "right" }}
                  className={`navbar ${
                    scrolled ? "header-scrolled" : "navbar-container"
                  }`}
                >
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      fontWeight: "bold",
                      display: "flex",
                      margin: "0 15px",
                      cursor: "pointer",
                    }}
                  >
                    <li>
                      <ScrollLink
                        to="inicio"
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        Inicio
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="servicios"
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        Servicios
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="productos"
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        Productos
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="contactos"
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        Contactos
                      </ScrollLink>
                    </li>
                  </ul>
                </nav>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        className={styles.navbar}
      >
        <List className={styles.listnav}>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <RestartAltOutlinedIcon />
              </ListItemIcon>
              <li>
                <ScrollLink
                  to="inicio"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={toggleDrawer(false)}
                >
                  Inicio
                </ScrollLink>
              </li>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <ConstructionOutlinedIcon />
              </ListItemIcon>
              <li>
                <ScrollLink
                  to="servicios"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={toggleDrawer(false)}
                >
                  Servicios
                </ScrollLink>
              </li>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <HouseSidingOutlinedIcon />
              </ListItemIcon>
              <li>
                <ScrollLink
                  to="productos"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={toggleDrawer(false)}
                >
                  Productos
                </ScrollLink>
              </li>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <ConnectWithoutContactOutlinedIcon />
              </ListItemIcon>
              <li>
                <ScrollLink
                  to="contactos"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={toggleDrawer(false)}
                >
                  Contactos
                </ScrollLink>
              </li>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
