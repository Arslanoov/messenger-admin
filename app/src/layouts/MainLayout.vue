<template>
  <main class="main page-wrapper">
    <div class="container is-fluid">
      <div class="content-wrapper">
        <Header />
        <div class="columns">
          <Sidebar class="column" />
          <div class="column is-three-quarters">
            <router-view />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </main>
</template>

<script lang="ts">
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

export default class MainLayout extends Vue {

}
</script>
