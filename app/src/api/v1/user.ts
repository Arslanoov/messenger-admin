import axios from 'axios';

export default class UserService {
  public getUsersList(page = 1) {
    return axios.get(`/admin/users?page=${page}`);
  }
}
