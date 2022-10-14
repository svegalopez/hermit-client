import { ApolloClient, InMemoryCache } from "@apollo/client";
import getHost from "./utils/getHost";

export default new ApolloClient({
    uri: `${getHost()}/graphql`,
    cache: new InMemoryCache(),
});