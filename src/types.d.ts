export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Mutation = {
    __typename?: 'Mutation';
    changePassword: Scalars['String'];
    createUser: User;
};


export type MutationChangePasswordArgs = {
    confirmNew: Scalars['String'];
    current: Scalars['String'];
    new: Scalars['String'];
};


export type MutationCreateUserArgs = {
    user: UserInput;
};

export type Query = {
    __typename?: 'Query';
    currentUser: User;
    users: Array<User>;
};

export type Role = {
    __typename?: 'Role';
    name: Scalars['String'];
};

export type User = {
    __typename?: 'User';
    email: Scalars['String'];
    id: Scalars['Int'];
    roles: Array<Role>;
};

export type UserInput = {
    email: Scalars['String'];
    password: Scalars['String'];
};
