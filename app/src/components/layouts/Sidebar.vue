<template>
  <section class="sidebar-layout">
    <b-sidebar
      :reduce="false"
      position="static"
      mobile="reduce"
      type="is-white"
      expand-on-hover
      open
    >
      <div class="p-1">
        <b-menu class="is-custom-mobile">
          <b-menu-list label="Menu">
            <b-menu-item
              icon="home"
              label="Home"
              tag="router-link"
              to="/"
              active
            ></b-menu-item>
            <b-menu-item
              icon="account"
              label="Users"
              tag="router-link"
              to="/users"
            ></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item @click="onLogOut" icon="logout" label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<script lang="ts">
/* TODO: Pages, SSH Key */
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';

import AuthStoreModule from '@/store/modules/auth';

const authModule = namespace('auth');

@Component({
  name: 'Sidebar',
})

export default class Login extends Vue {
  @authModule.Action('logOut') logOut!: typeof AuthStoreModule.prototype.logOut

  public onLogOut(): void {
    this.logOut();
    this.$router.push('/login');
  }
}
</script>

<style lang="sass" scoped></style>
