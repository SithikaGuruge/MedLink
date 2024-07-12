import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import logo from "../assets/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const settings = ["Profile", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const serviceList = [
    "Scans",
    "Tests",
    "Pharmaceuticals",
    "Clinics",
    "Channeling",
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = () => {
    window.location.href = "/Profile";
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  const handleServiceClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      handleCloseNavMenu();
      handleCloseServicesMenu();
    }
  };

  const [user, setUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    photo: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        return;
      }
      try {
        const res = await axios.get(
          "http://localhost:5000/protected/getUserbyID",
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        setUser({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.contactNumber,
          address: res.data.address,
          age: res.data.age,
          photo: res.data.picture,
        });
      } catch (err) {
        //console.error(err);
      }
    };

    fetchData();
  }, []);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        '2xl': 2560, // Custom breakpoint
      },
    },
  });

  return (
    <AppBar position="fixed">
      <Container maxWidth ="2xl" className="bg-white font-bold">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="text-black " />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  window.location.href = "/";
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  window.location.href = "#about";
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  window.location.href = "/company";
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">Company</Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenServicesMenu}>
                <Typography textAlign="center">Services</Typography>
                <ArrowDropDownIcon />
              </MenuItem>
              <Menu
                id="services-menu"
                anchorEl={anchorElServices}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElServices)}
                onClose={handleCloseServicesMenu}
              >
                {serviceList.map((service, index) => (
                  <MenuItem
                    key={index}
                    onClick={(event) =>
                      handleServiceClick(event, `section-${index}`)
                    }
                  >
                    <Typography textAlign="center">{service}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <MenuItem
                onClick={() => {
                  window.location.href = "/pages";
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">Pages</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <Button
              className="hover:color-red-500"
              onClick={() => {
                window.location.href = "/";
              }}
              sx={{
                my: 2,
                mx: 1,
                color: "black",
                display: "block",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Home
            </Button>
            <Button
              className="hover:color-red-500"
              onClick={() => {
                window.location.href = "#about";
              }}
              sx={{
                my: 2,
                mx: 1,
                color: "black",
                display: "block",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              About
            </Button>
            <Button
              className="hover:color-red-500"
              onClick={() => {
                window.location.href = "/company";
              }}
              sx={{
                my: 2,
                mx: 1,
                color: "black",
                display: "block",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Company
            </Button>
            <Button
              className="hover:color-red-500"
              onClick={handleOpenServicesMenu}
              sx={{
                my: 2,
                mx: 1,
                color: "black",
                display: "block",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Services
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="services-menu"
              anchorEl={anchorElServices}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PopperProps={{
                disablePortal: true,
              }}
              open={Boolean(anchorElServices)}
              onClose={handleCloseServicesMenu}
            >
              {serviceList.map((service, index) => (
                <MenuItem
                  key={index}
                  onClick={(event) =>
                    handleServiceClick(event, `section-${index}`)
                  }
                >
                  <Typography textAlign="center">{service}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Button
              className="hover:color-red-500"
              onClick={() => {
                window.location.href = "/pages";
              }}
              sx={{
                my: 2,
                mx: 1,
                color: "black",
                display: "block",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Pages
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }} className="flex flex-row">
            {user.email ? (
              <div className="flex flex-row">
                <h1 className="text-black text-base pr-1 pt-1.5">
                  Hi {user.name.split(" ")[0] || "user"}!
                </h1>
                <Tooltip title="View Your Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user.photo} />
                  </IconButton>
                </Tooltip>
                <div className="pl-2">
                  <Button variant="contained" onClick={handleClickOpen}>
                    Logout
                  </Button>
                </div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Logout Confirmation"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are You sure you want to logout?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleLogOut} autoFocus>
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            ) : (
              <React.Fragment>
                <Button
                  variant="contained"
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                  sx={{
                    my: 2,
                    mx: 1,

                    display: "block",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#0f3970",
                    },
                  }}
                >
                  Login
                </Button>
              </React.Fragment>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    window.location.href = `/${setting}`;
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
