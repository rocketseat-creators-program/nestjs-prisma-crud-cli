import { Post } from '../entities/post.entity';

export class CreatePostDto extends Post {
  title: string;
  content: string;
  authorEmail: string;
}
