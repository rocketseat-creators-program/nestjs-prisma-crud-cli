import { Post } from '../entities/post.entity';

export class CreatePostDto extends Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorId: number;
}
