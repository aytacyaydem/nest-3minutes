import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Post } from '../post/post.schema';

export type AuthorDocument = mongoose.HydratedDocument<Author>;

@Schema()
export class Author {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
  posts: Post[]; // veya ObjectId[] veya Post[] (Post tipi için ayrı bir tanım yapmanız gerekmektedir)
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
