import {
  VuexModule,
  Module,
  Mutation,
  Action,
} from 'vuex-module-decorators';

import { ProfileInterface } from '@/types/user';
import { PaginationInterface } from '@/types/tools/pagination';

import UserService from '@/api/v1/user';
const service = new UserService();

@Module({
  namespaced: true,
  name: process.env.NODE_ENV === 'test' ? 'users' : undefined,
})

class User extends VuexModule {
  public users: ProfileInterface[] = []
  public paginationSettings: PaginationInterface = {
    currentPage: 1,
    pageSize: 20,
    totalCount: null
  }

  @Mutation
  public setUsers(users: ProfileInterface[]): void {
    this.users = users;
  }

  @Mutation
  public clearUsers(): void {
    this.users = [];
  }

  @Mutation
  public setTotalCount(count: number): void {
    this.paginationSettings.totalCount = count;
  }

  @Mutation
  public setCurrentPage(page: number): void {
    this.paginationSettings.currentPage = page;
  }

  @Action({ rawError: true })
  public async fetchUsers(): Promise<ProfileInterface[]> {
    return new Promise((resolve, reject) => {
      this.context.commit('clearUsers');
      service.getUsersList(this.paginationSettings.currentPage)
        .then(response => {
          const users: ProfileInterface[] = response.data.items;
          this.context.commit('setUsers', users);
          this.context.commit('setTotalCount', users.length);
          resolve(users);
        })
        .catch(error => reject(error));
    });
  }
}

export default User;
