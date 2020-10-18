<template>
  <div id="navbar">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="g-link" :to="{ path: '/' }">
          <img
            src="../assets/logo1_t.png"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="g-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item tag="g-link" :to="{ path: '/photos' }">Photos</b-navbar-item>
        <b-navbar-item tag="g-link" :to="{ path: '/recipes' }">Recipes</b-navbar-item>
        <b-navbar-item tag="g-link" :to="{ path: '/posts' }">Posts</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item tag="g-link" :to="{ path: '/about' }">About</b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </div>
</template>


<style>

</style>