import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthorsService } from 'src/authors/authors.service';
import { PostsService } from './posts.service';
import { PubSub } from 'graphql-subscriptions';
import { Inject } from '@nestjs/common';

@Resolver('Posts')
export class PostsResolver {
  constructor(
    @Inject('PUB_SUB') private pubSub: PubSub,
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}
  @Mutation()
  async addComment(
    @Args('postId') postId: number,
    @Args('content') content: string,
  ) {
    const newComment = await this.postsService.addComment({ postId, content });
    this.pubSub.publish('commentAdded', { commentAdded: newComment });
    return newComment;
  }
}
