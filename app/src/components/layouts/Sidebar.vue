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
            <b-menu-item active expanded icon="account" label="Users"></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item icon="logout" label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<style lang="sass" scoped></style>
