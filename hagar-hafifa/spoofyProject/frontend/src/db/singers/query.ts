import { gql } from "@apollo/client";

export const GET_ALL_SINGERS = gql`
    query allSingers {
        allArtists {
            nodes {
                id
                name
            }
        }
    }
`