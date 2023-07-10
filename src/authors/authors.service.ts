import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthorInput } from 'src/graphql';
import { Author } from 'src/schemas/author/author.schema';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}
  findOneById(id: number) {
    return {
      id,
      firstName: 'John',
      lastName: 'Doe',
      posts: [],
    };
  }
  findAll(): Promise<Author[]> {
    // Find all authors by mongoose and return them as a Promise
    return this.authorModel.find().exec();
  }
  create(author: AuthorInput): Promise<Author> {
    // Create a new document from the JSON input
    const newAuthor = new this.authorModel(author);
    console.log({ newAuthor });
    newAuthor.posts = [];
    return newAuthor.save();
  }
}
