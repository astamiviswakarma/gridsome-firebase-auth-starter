import { GraphQLClient } from 'graphql-request';
import { getSdk } from './graphql';

export default class SdkClient {
    user: any;
    endpoint: string;
    
    constructor(endpoint: string, user?: any) {
        this.user = user;
        this.endpoint = endpoint;
    }
    
    getUser() {
        return this.user;
    }

    getEndpoint() {
        return this.endpoint;
    }

    getAuthHeaders() {
        return {headers: {authorization: "Bearer "+ this.getUser().idToken}};
    }

    getSdk() {
        const client = (this.getUser()) ? new GraphQLClient(this.getEndpoint(), this.getAuthHeaders()) : new GraphQLClient(this.getEndpoint());
        return getSdk(client);
    }
}