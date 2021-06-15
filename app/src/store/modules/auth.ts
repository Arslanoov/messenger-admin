import {
  VuexModule,
  Module,
  Mutation,
  Action,
} from 'vuex-module-decorators';

import { AuthFormInterface } from '@/types/forms/auth';
import UserInterface from '@/types/user';

import AuthService from '@/api/v1/auth';
import axios from 'axios';
const service = new AuthService();

@Module({
  namespaced: true,
  name: process.env.NODE_ENV === 'test' ? 'auth' : undefined,
})

class User extends VuexModule {
  public token: string | null = null
  public user: UserInterface | null = null

  public authForm: AuthFormInterface = {
    username: null,
    password: null,
    error: null,
  }

  @Mutation
  public setToken(token: string): void {
    this.token = token;
  }

  @Mutation
  public setAuthFormUsername(username: string): void {
    this.authForm.username = username;
  }

  @Mutation
  public setAuthFormPassword(password: string): void {
    this.authForm.password = password;
  }

  @Mutation
  public setAuthFormError(error: string): void {
    this.authForm.error = error;
  }

  @Mutation
  public clearAuthFormError(): void {
    this.authForm.error = null;
  }

  @Mutation
  public clearAuthForm(): void {
    this.authForm = {
      username: null,
      password: null,
      error: null,
    };
  }

  @Mutation
  public setUser(user: UserInterface): void {
    this.user = user;
  }

  @Mutation
  public deleteUser(): void {
    this.user = null;
  }

  @Action({ rawError: true })
  public async logIn(): Promise<{user: UserInterface}> {
    return new Promise((resolve, reject) => {
      this.context.commit('deleteUser');

      service.auth(this.authForm.username || '', this.authForm.password || '')
        .then(response => {
          const user = response.data;
          localStorage.setItem('user', JSON.stringify(user));
          this.context.commit('clearAuthForm');
          this.context.commit('setUser', user);
          axios.defaults.headers.common.Authorization = this.context.getters.authToken;
          resolve(user);
        })
        .catch(error => {
          this.context.commit('deleteUser');
          this.context.commit('setAuthFormError', error.response.data.error);
          localStorage.removeItem('user');
          reject(error);
        });
    });
  }

  @Action({ rawError: true })
  public logOut(): void {
    this.context.commit('deleteUser');
    localStorage.removeItem('user');
  }

  public get authToken(): string {
    return `Bearer ${this.token}`;
  }
}

export default User;
