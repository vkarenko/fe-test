<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <a href="/" class="nav__link">Start</a>
        <a href="parkings" class="nav__link">Parkings</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Parkings page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../scss/variables';

  .header {
    padding: 2rem 0;
  }

  .nav {
    &__link {
      color: $baseColor;
      font-size: 1.6rem;
      margin: 0 1rem 0 0;

      &:hover {
        color: $hoverLinkColors;
      }
    }
  }
</style>
