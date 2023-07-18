import {
    Box,
    Grid,
    Pagination,
    Paper,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import {
    ConfirmModal,
    MovieCard,
    MovieCardSelected,
    SearchAndButton,
} from '../../components';
import { MOVIES_QUERY } from './queries';
import { useState } from 'react';
import { useMovies } from '../../hooks/useMovies/useMovies';

const SelectedMovies = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 140px)',
    position: 'sticky',
    top: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    gap: '10px',
    overflowY: 'auto',
}));

export const Home = () => {
    const [page, setPage] = useState(1);
    const [listName, setListName] = useState('');
    const [link, setLink] = useState('');

    const { loading, error, data } = useQuery(MOVIES_QUERY, {
        variables: { page },
    });
    const { selectedMovies, selectMovie, deleteMovie } = useMovies();

    const handleChangePage = (e, page) => {
        setPage(page);
    };

    if (error) {
        return 'Error';
    }
    const onSubmit = ({ listName }) => {
        const ids = selectedMovies.map(({ id }) => id);
        const link = `/recommend?title=${listName}&ids=${ids.join(
            ',',
        )}`;
        // debugger;
        setLink(link);
        setListName(listName);
    };
    const onCloseConfirmModal = () => {
        setLink('');
    };
    return (
        <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper>Filters section</Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper>
                        {loading && 'Loading...'}
                        {data && (
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    p: 1,
                                    justifyItems: 'center',
                                    gridTemplateColumns: {
                                        xs: 'repeat(1, 1fr)',
                                        sm: 'repeat(2, 1fr)',
                                        md: 'repeat(3, 1fr)',
                                        lg: 'repeat(4, 1fr)',
                                    },
                                }}
                                display="grid"
                                gap={2}>
                                {data.movies.results.map((movie) => (
                                    <Box
                                        key={movie.id}
                                        sx={{ height: '100%' }}>
                                        <MovieCard
                                            movie={movie}
                                            onCardSelect={(m) =>
                                                selectMovie(m)
                                            }
                                        />
                                    </Box>
                                ))}
                            </Box>
                        )}
                        <Pagination
                            showFirstButton
                            showLastButton
                            count={500}
                            page={page}
                            onChange={handleChangePage}
                            color="primary"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SelectedMovies>
                        {selectedMovies.length === 0 && (
                            <Typography>
                                No select movies...
                            </Typography>
                        )}
                        {selectedMovies.map((movie) => (
                            <MovieCardSelected
                                key={movie.id}
                                movie={movie}
                                onCardDelete={() =>
                                    deleteMovie(movie)
                                }
                            />
                        ))}
                        {selectedMovies.length !== 0 && (
                            <SearchAndButton onSubmit={onSubmit} />
                        )}
                        <ConfirmModal
                            url={link}
                            title={listName}
                            open={!!link}
                            onClose={onCloseConfirmModal}
                        />
                    </SelectedMovies>
                </Grid>
            </Grid>
        </Box>
    );
};
