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
import { AuthorInput } from 'src/graphql';

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

  @Query('authors')
  async getAuthors() {
    return this.authorsService.findAll();
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

  @Mutation('createAuthor')
  async create(@Args('author') author: AuthorInput) {
    const createdAuthor = await this.authorsService.create(author);
    this.pubSub.publish('authorAdded', { authorAdded: createdAuthor });
    return createdAuthor;
  }

  @Subscription('commentAdded')
  commentAdded() {
    return this.pubSub.asyncIterator('commentAdded');
  }
}
