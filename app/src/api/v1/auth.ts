import axios from 'axios';
import qs from 'qs';

export default class AuthService {
  public auth(login: string, password: string) {
    return axios.post('/token', qs.stringify({
      grant_type: 'password',
      username: login,
      password: password,
      client_id: 'oauth',
      client_secret: 'secret',
      access_type: 'offline'
    }));
  }

  public profile() {
    return axios.get('/profile');
  }
}
