<template>
  <div class="content">
    <b-table :data="users" :columns="columns">
      <b-table-column field="uuid" label="ID" v-slot="props">
        {{ props.row.uuid }}
      </b-table-column>

      <b-table-column field="username" label="Username" v-slot="props">
        {{ props.row.username }}
      </b-table-column>

      <b-table-column field="status" label="Status" v-slot="props">
        <b-tag :type="statusTypes[props.row.status]">{{ props.row.status }}</b-tag>
      </b-table-column>

      <b-table-column field="role" label="Role" v-slot="props">
        <b-tag :type="roleTypes[props.row.role]">{{ props.row.role }}</b-tag>
      </b-table-column>
    </b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import UsersStoreModule from '@/store/manage/users';
import { ProfileInterface } from '@/types/user';

const usersModule = namespace('users');

@Component({
  name: 'Users'
})

export default class Users extends Vue {
  @usersModule.State('users') users!: ProfileInterface[]

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
}
</script>
