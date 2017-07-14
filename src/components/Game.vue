<template>
  <div class="game">
    <h1>{{ msg }}</h1>
    <button @click.once='startGame'>开始</button>
    <div>
      <span v-for="(val, key)  in panes" v-bind:key="key" :class="'span_'+key" :style="{width:pane_size+'px',height:pane_size+'px',background:'url('+val.value+'.jpg)'}"> {{val.value ? val.value:'&nbsp'}}
      </span>
  
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'game',
  data() {
    return {
      msg: 'Welcome to Vue.js 2048 Game'
    }
  },
  computed: mapState(['count', 'pane_size', 'panes']),
  created() {
    this.$store.commit('initPanes');
    this.$store.commit('increment');
    this.$store.commit('initPaneSize');
    this.$store.commit('keyEvent');
  },mounted(){

// this.keyEvent()
  },
  methods: {
    ...mapMutations([
      'increment',// 映射 this.increment() 为 this.$store.commit('increment'),
      'startGame',
      'keyEvent'
    ])
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

span {
  background: #42b983;
  display: inline-block;
  margin: 1px;
  border-radius: 4px;
}

.span_0_0,
.span_0_1,
.span_0_2,
.span_0_3 {
  /* margin-top:10px; */
}

.span_1_0,
.span_1_1,
.span_1_2,
.span_1_3 {
  /* margin-top:10px; */
}

.span_2_0,
.span_2_1,
.span_2_2,
.span_2_3 {}

.span_3_0,
.span_3_1,
.span_3_2,
.span_3_3 {}
</style>
