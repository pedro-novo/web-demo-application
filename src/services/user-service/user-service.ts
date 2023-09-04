import { User } from '@modules/common/interface/user';
import { axios } from '@setup/axios/axios';

export class UserService {
  static async getAll() {
    const path = 'users';

    const { data } = await axios.get<User[]>(path);

    return data;
  }

  static async getById(id: number) {
    const path = `users/${id}`;

    const { data } = await axios.get<User>(path);

    return data;
  }
}
