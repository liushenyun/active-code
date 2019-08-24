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
  watch: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
