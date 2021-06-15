<template>
  <div class="columns is-flex is-centered is-vcentered is-fullheight">
    <div class="column is-two-thirds-mobile is-half-tablet is-one-third-desktop">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class AuthLayout extends Vue {

}
</script>

<style lang="scss" scoped>
.columns {
  height: 100vh;
  overflow-y: hidden;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
