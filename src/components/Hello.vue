<template>
  <div class="hello">
    <router-link to="game">开始游戏</router-link>
    {{pane_size}}
    {{this.$store.state.pane_size}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapState(['count','pane_size']),
  mounted(){
    this.$store.commit('initPaneSize')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
