<template>
  <form class="login-form">
    <b-field>
      <b-tag
        v-if="form.error"
        @close="clearError"
        type="is-danger"
        aria-close-label="Close"
        closable
        attached
      >
        {{ form.error }}
      </b-tag>
    </b-field>

    <b-field label="Username">
      <b-input :value="form.username" maxlength="32"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input :value="form.password" type="password" maxlength="32"></b-input>
    </b-field>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';

import AuthStoreModule from '@/store/modules/auth';
import { AuthFormInterface } from '@/types/forms/auth';

const authModule = namespace('Auth');

@Component({
  name: 'Login',
})

export default class Login extends Vue {
  @authModule.State('auth') form: AuthFormInterface

  @authModule.Mutation('setAuthFormUsername') setUsername: typeof AuthStoreModule.prototype.setAuthFormUsername

  @authModule.Mutation('setAuthFormPassword') setPassword: typeof AuthStoreModule.prototype.setAuthFormPassword

  @authModule.Mutation('setAuthFormPassword') clearError: typeof AuthStoreModule.prototype.clearAuthFormError
}
</script>
