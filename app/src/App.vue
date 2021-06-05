<template>
  <main class="main">
    <div class="container is-fluid">
      <Header />
      <div class="columns">
        <Sidebar class="column" />
        <div class="column is-three-quarters">
          <div class="notification is-primary">
            This container is <strong>centered</strong> on desktop and larger viewports.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </main>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

import Header from '@/components/layouts/Header.vue';
import Sidebar from '@/components/layouts/Sidebar.vue';
import Footer from '@/components/layouts/Footer.vue';

@Component({
  components: {
    Header,
    Sidebar,
    Footer,
  },
})

export default class HelloWorld extends Vue {

}
</script>

<style lang="sass" scoped>
</style>
