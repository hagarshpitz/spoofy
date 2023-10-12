import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
query GetAllUsers {
    allUsers {
        nodes {
            firstName
            lastName
            id
        }
    }
}`