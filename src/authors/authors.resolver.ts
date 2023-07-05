import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { PostsService } from 'src/posts/posts.service';
import { PubSub } from 'graphql-subscriptions';
import { Inject } from '@nestjs/common';

@Resolver('Author')
export class AuthorsResolver {
  constructor(
    @Inject('PUB_SUB') private pubSub: PubSub,
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query('author')
  async getAuthor(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField('posts')
  async getPosts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }

  @Mutation()
  async upvotePost(@Args('postId') postId: number) {
    return this.postsService.upvoteById({ id: postId });
  }

  @Subscription('commentAdded')
  commentAdded() {
    return this.pubSub.asyncIterator('commentAdded');
  }
}
