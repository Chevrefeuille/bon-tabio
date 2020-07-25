<template>
  <div id="navbar">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="g-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="g-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item tag="g-link" :to="{ path: '/photos' }">Photos</b-navbar-item>
        <b-navbar-item tag="g-link" :to="{ path: '/recipes' }">Recipes</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item tag="g-link" :to="{ path: '/about' }">About</b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </div>
</template>