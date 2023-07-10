import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { AuthorsModule } from 'src/authors/authors.module';
import { AuthorsService } from 'src/authors/authors.service';
import { PubSubModule } from 'src/modules/pub-sub.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/schemas/post/post.schema';

@Module({
  imports: [
    AuthorsModule,
    PubSubModule,
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  providers: [PostsService, PostsResolver, AuthorsService],
  exports: [PostsService],
})
export class PostsModule {}
