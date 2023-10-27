import { gql } from "@apollo/client";

export const GET_USER_PLAYLIST = gql`
query GetUserPlaylist($equalTo: Int!) {
    allPlaylists(filter: {userId: {equalTo: $equalTo}}) {
      nodes {
        id
        name
        userId
      }
    }
  }`