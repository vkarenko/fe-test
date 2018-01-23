<template>
  <div id="app" class="wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'reset-css/reset.css'; // Eric Meyer's CSS reset

  // Base app styles
  @import 'scss/app';
</style>
