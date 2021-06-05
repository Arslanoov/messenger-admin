<template>
  <header class="header">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          >
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>

<style lang="sass" scoped>
.header
  margin: 1rem 0
</style>
