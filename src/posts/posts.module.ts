import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { AuthorsModule } from 'src/authors/authors.module';
import { AuthorsService } from 'src/authors/authors.service';
import { PubSubModule } from 'src/modules/pub-sub.module';

@Module({
  imports: [AuthorsModule, PubSubModule],
  providers: [PostsService, PostsResolver, AuthorsService],
  exports: [PostsService],
})
export class PostsModule {}
