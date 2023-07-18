import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { convertDate } from '../../helpers/helpers';
import { CardMenu } from '../CardMenu';

export const MovieCardSelected = ({ movie, onCardDelete }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                position: 'relative',
                // minHeight: 'fit-content',
                minHeight: '160px',
            }}>
            <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={movie.image}
                alt={movie.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {movie.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div">
                        {convertDate(movie.releaseDate)}
                    </Typography>
                </CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        p: 2,
                        pt: 0,
                    }}>
                    {movie.genres?.length && (
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div">
                            {convertDate(movie.genres[0].name)}
                        </Typography>
                    )}
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div">
                        Length: {movie.runtime}
                    </Typography>
                </Box>
            </Box>
            <CardMenu
                onCardSelect={onCardDelete}
                menuItems={['delete']}
            />
        </Card>
    );
};

MovieCardSelected.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string,
        genres: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
            }),
        ),
        runtime: PropTypes.number,
    }).isRequired,
    onCardDelete: PropTypes.func,
};
