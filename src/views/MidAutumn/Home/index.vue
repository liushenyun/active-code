<template>
  <div class="mid-home">
     <transition name='fade' mode="out-in">
        <router-view/>
      </transition>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {},
  methods: {
  },
  beforeRouteLeave(to, from, next) {
    debugger
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  watch: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
