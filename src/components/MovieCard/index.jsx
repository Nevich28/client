import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// import { CardMenu } from './components';
import { convertDate } from '../../helpers/helpers';
import { CardMenu } from '../CardMenu';

const CardInfo = styled(CardContent)(({ theme }) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(2),
        // paddingBottom: '16px',
    },
}));

export const MovieCard = ({
    movie,
    onCardSelect,
    isPreviewMode = false,
}) => {
    return (
        <Card
            sx={{
                width: '100%',
                height: '100%',
                // width: '200px',
                position: 'relative',
            }}>
            {!isPreviewMode && (
                <CardMenu
                    onCardSelect={() => onCardSelect(movie)}
                    menuItems={['select']}
                />
            )}

            <Box>
                <CardMedia
                    component="img"
                    height="250"
                    image={movie.image}
                    alt={movie.title}
                    sx={{ height: '100%', objectFit: 'cover' }}
                />
            </Box>
            <CardInfo>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    gutterBottom>
                    {movie.title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div">
                    {convertDate(movie.releaseDate)}
                </Typography>
            </CardInfo>
        </Card>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string,
    }).isRequired,
    onCardSelect: PropTypes.func,
    isPreviewMode: PropTypes.bool,
};
