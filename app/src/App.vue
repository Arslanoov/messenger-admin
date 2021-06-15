<template>
  <component :is="layout">
  </component>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

@Component({
  components: {
    MainLayout,
    AuthLayout,
  },
})

export default class App extends Vue {
  public get layout(): string {
    return `${this.$route.meta.layout || 'empty'}-layout`;
  }
}
</script>

<style lang="sass" scoped>
</style>
