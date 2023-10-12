import { gql } from '@apollo/client';

export const CREATE_FAVORITE = gql`
mutation createFavorite($songId: Int!, $userId: Int!) {
    createFavorite(input: {favorite: {userId: $userId, songId: $songId}}) {
        clientMutationId
    }
}`;

export const DELETE_FAVORITE = gql`
mutation deleteFavorite($songId: Int!, $userId: Int!) {
    deleteFavoriteByUserIdAndSongId(input: {userId: $userId, songId: $songId}) {
      clientMutationId
      deletedFavoriteId
    } 
  }`;

export const ADD_NEW_SONG = gql`
mutation addNewSong($id: Int!, $duration: Int!, $artistId: Int!, $name: String!) {
  createSong(
    input: {song: {artistId: $artistId, duration: $duration, id: $id, name: $name}}
  ) {
    clientMutationId
    song {
      id
      name
      artistId
      duration
      artistByArtistId {
        name
      }
    }
  }
}

`
