import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PostsService } from 'src/posts/posts.service';
import { PubSubModule } from 'src/modules/pub-sub.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from 'src/schemas/author/author.schema';

@Module({
  imports: [
    PubSubModule,
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
  ],
  providers: [AuthorsResolver, AuthorsService, PostsService],
  exports: [AuthorsService, MongooseModule],
})
export class AuthorsModule {}
