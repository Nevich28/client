import { useQuery } from '@apollo/client';
import { Box, Typography } from '@mui/material';
// import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOVIES_BY_IDS_QUERY } from './queries';
import { MovieCard } from '../../components';

export const Recommend = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const ids =
        searchParams
            .get('ids')
            .split(',')
            .map((id) => id * 1) || [];
    const title = searchParams.get('title') || '';

    const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
        variables: { ids },
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error :(</div>;
    }
    return (
        <>
            <Typography variant="h1" gutterBottom>
                {searchParams.get('title')}
            </Typography>
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
                    {data.moviesByIds.map((movie) => (
                        <Box key={movie.id} sx={{ height: '100%' }}>
                            <MovieCard
                                movie={movie}
                                isPreviewMode={true}
                                // onCardSelect={(m) => selectMovie(m)}
                            />
                        </Box>
                    ))}
                </Box>
            )}
        </>
    );
};
