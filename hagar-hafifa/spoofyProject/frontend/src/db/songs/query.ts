import { gql } from "@apollo/client";

export const GET_ALL_SONGS = gql
`query MyQuery2($userId: Int!) {
  allSongs {
    nodes {
      artistId
      duration
      id
      nodeId
      name
      favoritesBySongId(condition: {userId: $userId}) {
        totalCount
      }
      artistByArtistId {
        name
      }
    }
  }
}`
// `query GetAllUsers($userId: Int!) {
//     allSongs {
//       nodes {
//         artistId
//         duration
//         name
//         id
//         artistByArtistId {
//           name
//         }
//         favoritesBySongId(condition: {userId: $userId}) {
//           totalCount
//         }
//       }
//     }
//   }`