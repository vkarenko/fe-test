<template>
  <div class="start">
    <app-header></app-header>

    <main class="main">
      <div class="container">
        <span>{{ msg }}</span>

        <section class="parkings">
          <div class="parking parking_a"></div>

          <div class="parking parking_b"></div>

          <div class="parking parking_c"></div>
        </section>

        <section class="workers">
          <div class="workers__box">
            <div class="worker worker_a"></div>

            <div class="worker worker_b"></div>

            <div class="worker worker_c"></div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import appHeader from './Header'
export default {
  name: 'Start',
  components: { appHeader },
  data () {
    return {
      msg: 'Start page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .start {
    // height: 100%;
  }
</style>
