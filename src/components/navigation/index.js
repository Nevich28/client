import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Hidden,
    Menu,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';

const Navigation = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const list = (anchor) => (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Hidden only={['lg', 'xl']}>
                        <IconButton
                            onClick={() => setIsDrawerOpen(true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}>
                        Movies recommendation
                    </Typography>
                    <Box
                        sx={{
                            display: { xs: 'none', lg: 'flex' },
                        }}>
                        <Button
                            sx={{
                                my: 2,
                                color: 'white',
                                display: 'block',
                            }}>
                            Settings
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}>
                {list()}
            </Drawer>
        </Box>
    );
};

export default Navigation;
