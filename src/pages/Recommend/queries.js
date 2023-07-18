import { gql } from '@apollo/client';

export const MOVIES_BY_IDS_QUERY = gql`
    query ($ids: [Int]) {
        moviesByIds(ids: $ids) {
            title
            image: posterPath
            releaseDate
            id
        }
    }
`;
