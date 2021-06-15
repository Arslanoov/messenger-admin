import axios from 'axios';
import qs from 'qs';

export default class AuthService {
  public auth(login: string, password: string) {
    return axios.post('/token', qs.stringify({
      grant_type: 'password',
      username: login,
      password: password,
      client_id: 'app',
      client_secret: '',
      access_type: 'offline'
    }));
  }
}
