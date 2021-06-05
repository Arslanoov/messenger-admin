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
            <b-menu-item icon="logout" label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<style lang="sass" scoped></style>
