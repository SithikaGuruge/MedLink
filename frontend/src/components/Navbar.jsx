import React from "react";
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
import cover from "../assets/person.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
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

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" className="bg-white font-bold ">
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
            <h1 className="text-black text-base pr-4 pt-1.5">Hi User!</h1>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={cover} />
              </IconButton>
            </Tooltip>
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
