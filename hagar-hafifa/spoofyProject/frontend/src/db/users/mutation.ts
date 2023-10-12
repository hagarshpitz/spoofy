import { gql } from '@apollo/client';

export const DELETE_USER_BY_ID = gql`
mutation DeleteUserById($id: Int!) {
    deleteUserById(input: {id: $id}){
        clientMutationId
        deletedUserId
    }
}`
