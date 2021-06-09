import {
  VuexModule,
  Module,
  Mutation,
} from 'vuex-module-decorators';

import { AuthFormInterface } from '@/types/forms/auth';

@Module({
  namespaced: true,
  name: process.env.NODE_ENV === 'test' ? 'auth' : undefined,
})

class User extends VuexModule {
  public token: string | null = null

  authForm: AuthFormInterface = {
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

  public get authToken(): string {
    return `Bearer ${this.token}`;
  }
}

export default User;
