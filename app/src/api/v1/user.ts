import axios from 'axios';

export default class UserService {
  public getUsersList(page = 1) {
    return axios.get(`/admin/users?page=${page}`);
  }

  public getUser(uuid: string) {
    return axios.get(`/admin/user/${uuid}`);
  }

  public activate(uuid: string) {
    return axios.patch(`/admin/user/activate/${uuid}`);
  }

  public draft(uuid: string) {
    return axios.patch(`/admin/user/draft/${uuid}`);
  }

  public makeAdmin(uuid: string) {
    return axios.patch(`/admin/user/make-admin/${uuid}`);
  }

  public fire(uuid: string) {
    return axios.patch(`/admin/user/fire/${uuid}`);
  }

  public remove(uuid: string) {
    return axios.delete(`/admin/user/remove/${uuid}`);
  }
}
