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
  public manageUser: ProfileInterface | null = null
  public paginationSettings: PaginationInterface = {
    currentPage: 1,
    pageSize: 20,
    totalCount: 0
  }

  @Mutation
  public setUsers(users: ProfileInterface[]): void {
    this.users = users;
  }

  @Mutation
  public setTotalCount(count: number): void {
    this.paginationSettings.totalCount = count;
  }

  @Mutation
  public setCurrentPage(page: number): void {
    this.paginationSettings.currentPage = page;
  }

  @Mutation
  public setPageSize(size: number): void {
    this.paginationSettings.pageSize = size;
  }

  @Mutation
  public setUserForManage(user: ProfileInterface): void {
    this.manageUser = user;
  }

  @Mutation
  public clearManageUser(): void {
    this.manageUser = null;
  }

  @Action({ rawError: true })
  public async fetchUsers(): Promise<ProfileInterface[]> {
    return new Promise((resolve, reject) => {
      service.getUsersList(this.paginationSettings.currentPage)
        .then(response => {
          const users: ProfileInterface[] = response.data.items;
          this.context.commit('setTotalCount', response.data.totalCount);
          this.context.commit('setPageSize', response.data.perPage);
          this.context.commit('setUsers', users);
          resolve(users);
        })
        .catch(error => reject(error));
    });
  }

  @Action({ rawError: true })
  public async fetchManageUser(uuid: string): Promise<ProfileInterface> {
    return new Promise((resolve, reject) => {
      this.context.commit('clearManageUser');
      service.getUser(uuid)
        .then(response => {
          const user: ProfileInterface = response.data;
          this.context.commit('setUserForManage', user);
          resolve(user);
        })
        .catch(error => reject(error));
    });
  }
}

export default User;
