import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query {
        users {
            email,
            roles {
                name
            }
        }
    }
`;