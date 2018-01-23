<template>
  <div class="parkings">
    <app-header></app-header>

    <main class="main">
      <div class="container">
        <span>{{ msg }}</span>
      </div>
    </main>
  </div>
</template>

<script>
import appHeader from './Header'

export default {
  name: 'Parkings',
  components: { appHeader },
  data () {
    return {
      msg: 'Parkings page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  //
</style>
