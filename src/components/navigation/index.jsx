import {
    AppBar,
    Box,
    Button,
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
    Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import SettingsIcon from '@mui/icons-material/Settings';
import { useState, useContext, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
import { LOCALES } from '../../const';

const Navigation = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { state, dispatch } = useContext(AppContext);

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: 'setLocale',
            locale,
        });
    }, []);

    const list = (anchor) => (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={RouterLink}
                        onClick={() => setIsDrawerOpen(false)}
                        to="settings">
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
                    <Link
                        component={RouterLink}
                        to="/"
                        sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ color: 'white' }}>
                            Movies recommendation
                        </Typography>
                    </Link>
                    <Box>
                        {state.locale}
                        <Button
                            disabled={
                                state.locale === LOCALES.ENGLISH
                            }
                            sx={{
                                my: 2,
                                color: 'white',
                            }}
                            onClick={() =>
                                setLanguage(LOCALES.ENGLISH)
                            }>
                            ENGLISH
                        </Button>
                        <Button
                            disabled={
                                state.locale === LOCALES.UKRAINIAN
                            }
                            sx={{
                                my: 2,
                                color: 'white',
                            }}
                            onClick={() =>
                                setLanguage(LOCALES.UKRAINIAN)
                            }>
                            Украина
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', lg: 'flex' },
                        }}>
                        <Button
                            component={RouterLink}
                            to="settings"
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
