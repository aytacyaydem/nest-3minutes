import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  findAll({ authorId }) {
    return [
      {
        id: 1,
        title: 'Nest Internals',
        votes: 1,
        authorId: 1,
      },
      {
        id: 2,
        title: 'GraphQL Resolvers',
        votes: 2,
        authorId: 1,
      },
      {
        id: 3,
        title: 'Nest LifeCycle Events',
        votes: 3,
        authorId: 2,
      },
    ].filter((post) => post.authorId === authorId);
  }
  upvoteById({ id }) {
    return {
      id,
      title: 'Nest Internals',
      votes: 1,
      authorId: 1,
    };
  }
  addComment({ postId, content }) {
    return {
      id: 1,
      title: 'Nest Internals',
      votes: 1,
      authorId: 1,
      comments: [
        {
          id: 1,
          content,
        },
      ],
    };
  }
}
