import { Box, Container, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    ApolloLink,
    from,
} from '@apollo/client';

import { Navigation } from './components';
import { Home, Settings, Recommend } from './pages';
import { AppContext } from './context/appContext';
import { useContext } from 'react';

const theme = createTheme();

function App() {
    const { state, dispatch } = useContext(AppContext);
    const httpLink = new HttpLink({ uri: 'http://localhost:4000' });
    const localMiddleware = new ApolloLink((operation, forward) => {
        const customHeaders = operation
            .getContext()
            .hasOwnProperty('headers')
            ? operation.getContext().headers
            : {};
        operation.setContext({
            headers: { ...customHeaders, locale: state.locale },
        });
        return forward(operation);
    });
    const client = new ApolloClient({
        link: from([localMiddleware, httpLink]),
        cache: new InMemoryCache(),
        connectToDevTools: true,
    });
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <CssBaseline />
                    <Navigation />

                    <Box
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.grey[100],
                        }}>
                        <Container maxWidth="xl">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="settings"
                                    element={<Settings />}
                                />
                                <Route
                                    path="recommend"
                                    element={<Recommend />}
                                />
                            </Routes>
                        </Container>
                    </Box>
                </BrowserRouter>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;
