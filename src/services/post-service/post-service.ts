import { Post } from '@modules/common/interface/post';
import { axios } from '@setup/axios/axios';

export class PostService {
  static async getAll() {
    const path = 'posts';

    const { data } = await axios.get<Post[]>(path);

    return data;
  }

  static async getById(id: number) {
    const path = `posts/${id}`;

    const { data } = await axios.get<Post>(path);

    return data;
  }

  static async createPost({ userId, post }: { userId: number; post: Post }) {
    const path = 'posts';

    const params = { userId, post };

    const { data } = await axios.post(path, { params });

    return data;
  }
}
