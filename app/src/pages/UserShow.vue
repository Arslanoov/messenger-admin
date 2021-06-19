<template>
  <div class="card user-show">
    <div class="card-content" v-if="manageUser">
      <div class="media">
        <div class="media-left" v-if="manageUser.avatar">
          <figure class="image is-48x48">
            <img
              :src="imageUrl(manageUser.avatar)"
              alt=""
            >
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ manageUser.username }}</p>
          <p class="subtitle is-6">@{{ manageUser.username }}</p>
          <div class="tags">
            <div
              @click="toggleStatus"
              class="tags__item"
            >
              <b-tag class="tag" :type="statusTypes[manageUser.status]">
                {{ manageUser.status }}
              </b-tag>
            </div>
            <div
              @click="toggleRole"
              class="tags__item"
            >
              <b-tag class="tag" :type="roleTypes[manageUser.role]">
                {{ manageUser.role }}
              </b-tag>
            </div>
            <div
              @click="onRemove"
              class="tags__item"
            >
              <b-tag class="tag" type="is-danger">
                Remove
              </b-tag>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <p>{{ manageUser.about }}</p>
        <p>
          Latest activity: <time>{{manageUser.latestActivity }}</time>
          <br />
          Wrote {{manageUser.messagesCount }} messages
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { getStorageImageUrl } from '@/tools/image';
import { roleTypes, statusTypes } from '@/const/classes';

import UsersStoreModule from '@/store/manage/users';
import { ProfileInterface } from '@/types/user';

const usersModule = namespace('users');

@Component({
  name: 'UserShow'
})

export default class Users extends Vue {
  @usersModule.State('manageUser') manageUser!: ProfileInterface

  @usersModule.Action('fetchManageUser') fetchManageUser!: typeof UsersStoreModule.prototype.fetchManageUser
  @usersModule.Action('activateManageUser') activate!: typeof UsersStoreModule.prototype.activateManageUser
  @usersModule.Action('draftManageUser') draft!: typeof UsersStoreModule.prototype.draftManageUser
  @usersModule.Action('makeManageUserAsAdmin') makeAdmin!: typeof UsersStoreModule.prototype.makeManageUserAsAdmin
  @usersModule.Action('fireManageUser') fire!: typeof UsersStoreModule.prototype.fireManageUser
  @usersModule.Action('removeManageUser') remove!: typeof UsersStoreModule.prototype.removeManageUser

  public statusTypes = statusTypes
  public roleTypes = roleTypes

  public mounted(): void {
    this.fetchManageUser(this.$route.params.id)
      .catch(() => this.$router.push('/users'));
  }

  public toggleStatus(): void {
    this.manageUser.status === 'Active' ? this.draft() : this.activate();
  }

  public toggleRole(): void {
    this.manageUser.role === 'Admin' ? this.fire() : this.makeAdmin();
  }

  public onRemove(): void {
    confirm('Are you sure?') && this.remove()
      .then(() => this.$router.push('/users'));
  }

  public imageUrl(url: string): string {
    return getStorageImageUrl(url);
  }
}
</script>

<style lang="sass" scoped>
.tags
  display: flex
  align-items: center

  &__item
    &:hover
      cursor: pointer

    &:not(:last-of-type)
      margin-right: .5rem
</style>
