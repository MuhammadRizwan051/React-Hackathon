import * as React from "react";
import { Container } from '@mui/system';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DvrSharpIcon from "@mui/icons-material/DvrSharp";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { logoutUser } from "../../config/firebasemethod";
import { AccountCircle } from "@mui/icons-material";
import AdminProfile from "./adminProfile";
import BookingDetails from "./bookingDetails";
import AddTransport from "./addTransport";
import backgroundImage from '../../assets/adminBackground.webp'


const drawerWidth = 240;


function MainLayout(props) {
    const { window, datasource, routespath, value, nodeName, userId, state, profileNode } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    console.log(datasource)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const logout = () => {
        logoutUser().then(() => {
            navigate('/login')
        }).catch((err) => {
            console.log(err)
        })
    }


    const profile = () => {
        setAnchorEl(null);
        // navigate(`${profileNode}/${userId}`)
        // navigate(`${profileNode}/${state.userId}`)
        navigate(`${profileNode}`)
    };



    const handleClose = () => {
        setAnchorEl(null);
    };


    const drawer = (

        <div style={{}}>
            <Typography variant="h5" sx={{ my: 2, textAlign: "center", fontFamily: 'cursive', }}>
                Admin
            </Typography>
            <Divider />
            <List sx={{ minHeight: '92vh', }}>
                {datasource.length > 0 && datasource.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => { navigate(text.url) }}>
                            <ListItemIcon>
                                {<DvrSharpIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;


    return (
        <Box sx={{ display: "flex", }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    // ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'black'
                }}
            >
                <Toolbar sx={{ justifyContent: { xs: "space-between", sm: "right" } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                        >
                        <MenuIcon />
                    </IconButton>
                        {/* <Typography variant="h6" noWrap component="div" sx={{ justifyContent: { xs: "space-between", sm: "left" } }}>
                            Responsive drawer
                        </Typography> */}

                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={profile}>Profile</MenuItem>
                                <MenuItem onClick={logout}>Log Out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    // backgroundImage: `url(${AdminBackground})`,
                    backgroundRepeat : 'no-repeat',
                    backgroundAttachment : 'fixed',
                    backgroundSize: '100% 100%',
                    backgroundColor: '#16213E',
                    backgroundImage: `url(${backgroundImage})`,
                    backdropFilter: `blur(0px)`,
                    minHeight: '99vh',
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >

                <Box>
                    <Routes>
                        <Route path='addTransport' element={<AddTransport />} />
                        <Route path='bookingDetails' element={<BookingDetails />} />
                        <Route path='profile' element={<AdminProfile />} />
                    </Routes>
                </Box>
            </Box>
        </Box>
    );
}

MainLayout.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default MainLayout;