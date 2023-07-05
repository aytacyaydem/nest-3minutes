import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PostsService } from 'src/posts/posts.service';
import { PubSubModule } from 'src/modules/pub-sub.module';

@Module({
  imports: [PubSubModule],
  providers: [AuthorsResolver, AuthorsService, PostsService],
  exports: [AuthorsService],
})
export class AuthorsModule {}
