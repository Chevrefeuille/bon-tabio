<template>
  <div id="layout">
    <header id="header">
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
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

#layout {
  background-color:mistyrose;
}

#header {
  height: 52px;
}

</style>
