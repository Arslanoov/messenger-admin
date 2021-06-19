<template>
  <div class="users">
    <b-table :data="users">
      <b-table-column width="40%" field="uuid" label="ID" v-slot="props">
        {{ props.row.uuid }}
      </b-table-column>

      <b-table-column width="20%" field="username" label="Username" v-slot="props">
        {{ props.row.username }}
      </b-table-column>

      <b-table-column width="10%" field="status" label="Status" v-slot="props">
        <b-tag :type="statusTypes[props.row.status]">{{ props.row.status }}</b-tag>
      </b-table-column>

      <b-table-column width="10%" field="role" label="Role" v-slot="props">
        <b-tag :type="roleTypes[props.row.role]">{{ props.row.role }}</b-tag>
      </b-table-column>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total="paginationSettings.totalCount"
      :per-page="paginationSettings.pageSize"
      class="pagination"
      order="is-right"
    >
    </b-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import UsersStoreModule from '@/store/manage/users';
import { ProfileInterface } from '@/types/user';
import { PaginationInterface } from '@/types/tools/pagination';

const usersModule = namespace('users');

@Component({
  name: 'Users'
})

export default class Users extends Vue {
  @usersModule.State('users') users!: ProfileInterface[]
  @usersModule.State('paginationSettings') paginationSettings!: PaginationInterface

  @usersModule.Mutation('setCurrentPage') setPage!: typeof UsersStoreModule.prototype.setCurrentPage

  @usersModule.Action('fetchUsers') fetchUsers!: typeof UsersStoreModule.prototype.fetchUsers

  public statusTypes = {
    Active: 'is-success',
    Draft: 'is-danger'
  }

  public roleTypes = {
    User: 'is-primary is-light',
    Admin: 'is-danger is-light'
  }

  public mounted(): void {
    this.fetchUsers();
  }

  public get currentPage(): number {
    return this.paginationSettings.currentPage;
  }

  public set currentPage(page: number) {
    this.setPage(page);
    this.fetchUsers();
  }
}
</script>

<style lang="sass">
.users
  .pagination
    margin-top: .5rem

  .pagination-previous,
  .pagination-next
    display: none
</style>
