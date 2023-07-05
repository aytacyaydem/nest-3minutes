import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PostsModule } from 'src/posts/posts.module';
import { PostsService } from 'src/posts/posts.service';

@Module({
  imports: [PostsModule],
  providers: [AuthorsResolver, AuthorsService, PostsService],
})
export class AuthorsModule {}
