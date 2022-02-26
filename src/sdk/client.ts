import { GraphQLClient } from 'graphql-request';
import { getSdk } from './graphql';

/**
 * SdkClient for GraphQL api.
 * @author astamiviswakarma
 */
export default class SdkClient {
    user: any;
    endpoint: string;

    /**
     * Constructor
     * @param endpoint string
     * @param user FirebaseUser
     */
    constructor(endpoint: string, user?: any) {
        this.user = user;
        this.endpoint = endpoint;
    }

    /**
     * get User from SdkClient.
     * @returns FirebaseUser
     */
    getUser() {
        return this.user;
    }

    /**
     * returns specified graphql endpoint
     * @returns String
     */
    getEndpoint() {
        return this.endpoint;
    }

    /**
     * returns headers for GraphQL requests.
     * @returns Object{ headers }
     */
    getAuthHeaders() {
        return {headers: {authorization: `Bearer ${this.getUser().idToken}`}};
    }

    /**
     * get GraphQLClient based upon if user is there or not.
     * @returns GraphQLClient
     */
    getClient() {
        if(this.getUser())
            return new GraphQLClient(this.getEndpoint(), this.getAuthHeaders());

        return new GraphQLClient(this.getEndpoint())
    }

    /**
     * generate sdkClient
     * @returns Sdk
     */
    getSdk() {
        return getSdk(this.getClient());
    }
}