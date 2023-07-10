
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AuthorInput {
    firstName: string;
    lastName: string;
}

export class Author {
    _id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    posts?: Nullable<Nullable<Post>[]>;
}

export class Post {
    _id: string;
    title: string;
    votes?: Nullable<number>;
    authorId: number;
}

export class Comment {
    id?: Nullable<string>;
    content?: Nullable<string>;
}

export abstract class ISubscription {
    abstract commentAdded(): Nullable<Comment> | Promise<Nullable<Comment>>;
}

export abstract class IQuery {
    abstract author(id: string): Nullable<Author> | Promise<Nullable<Author>>;

    abstract authors(): Nullable<Nullable<Author>[]> | Promise<Nullable<Nullable<Author>[]>>;
}

export abstract class IMutation {
    abstract upvotePost(postId: string): Nullable<Post> | Promise<Nullable<Post>>;

    abstract addComment(postId: string, content: string): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract createAuthor(author: AuthorInput): Nullable<Author> | Promise<Nullable<Author>>;
}

type Nullable<T> = T | null;
