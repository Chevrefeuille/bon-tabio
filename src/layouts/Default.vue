<template>
  <div class="layout">
    <header class="header">
      <Navbar />
    </header>
    <div class="page-content">
      <slot/>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  height: 100vh;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.page-content {
  height: calc(100% - 80px);
  overflow: scroll;
}
</style>
