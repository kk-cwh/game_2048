import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    pane_size: 0,
    panes: {}
  },
  mutations: {
    increment(state) {
      state.count++
    },
    initPaneSize(state) {
      state.pane_size = Math.round(document.body.clientWidth / 4 - 8)
    },
    initPanes(state) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          Vue.set(state.panes, i + '_' + j, {
            x: i,
            y: j,
            value: 0,
            img: ''
          })
        }
      }

    },
    startGame(state) {
      let x1 = parseInt(Math.random() * 4);
      let x2 = parseInt(Math.random() * 4);
      let y1 = parseInt(Math.random() * 4);
      let y2 = parseInt(Math.random() * 4);

      while (x1 === x2 && y1 === y2) {
        y2 = parseInt(Math.random() * 4);
      }
      state.panes[x1 + '_' + y1]['value'] = 2;
      state.panes[x2 + '_' + y2]['value'] = 4;
    },
    randomValue(state) {
      let spaceArray = [];
      for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
          if (state.panes[x + '_' + y].value == 0) {
            spaceArray.push(x + '_' + y)
          }
        }
      }
      console.log(spaceArray.length)
      // alert(spaceArray.length)
      if (spaceArray.length) {
        let n = parseInt(Math.random() * (spaceArray.length));
        let k = spaceArray[n];
        let r = Math.random() * 100;
        state.panes[k].value = r > 50 ? 2 : 4;
      }else{
        
      }


    },
    keyEvent(state) {
      window.addEventListener('keyup', function (event) {
        switch (event.key) {
          case "ArrowLeft":
            store.commit('leftMethod')
            break;
          case "ArrowRight":
            store.commit('rightMethod')
            break;
          case "ArrowUp":
            store.commit('upMethod')
            break;
          case "ArrowDown":
            store.commit('downMethod')
            break;
        }
      })
    },
    leftMethod(state) {
      for (let x = 0; x < 4; x++) {
        let h1 = []
        for (let y = 0; y < 4; y++) {
          if (state.panes[x + '_' + y].value) {
            if (h1.length && h1[h1.length - 1] == state.panes[x + '_' + y].value) {
              h1[h1.length - 1] = h1[h1.length - 1] * 2
            } else {
              h1.push(state.panes[x + '_' + y].value)
            }
          }
        }
        for (let i = 0; i < 4; i++) {
          state.panes[x + '_' + i].value = i < h1.length ? h1[i] : 0;
        }

      }
      store.commit('randomValue');
      store.commit('randomValue');


    },
    rightMethod(state) {
      for (let x = 0; x < 4; x++) {
        let h1 = []
        for (let y = 3; y >= 0; y--) {
          if (state.panes[x + '_' + y].value) {
            if (h1.length && h1[h1.length - 1] == state.panes[x + '_' + y].value) {
              h1[h1.length - 1] = h1[h1.length - 1] * 2
            } else {
              h1.push(state.panes[x + '_' + y].value)
            }
          }
        }
        for (let i = 3, j = 0; i >= 0; i--, j++) {
          state.panes[x + '_' + i].value = j < h1.length ? h1[j] : 0;
        }

      }
      store.commit('randomValue');
      store.commit('randomValue');
    },
    upMethod(state) {
      for (let x = 0; x < 4; x++) {
        let h1 = []
        for (let y = 0; y < 4; y++) {
          if (state.panes[y + '_' + x].value) {
            if (h1.length && h1[h1.length - 1] == state.panes[y + '_' + x].value) {
              h1[h1.length - 1] = h1[h1.length - 1] * 2
            } else {
              h1.push(state.panes[y + '_' + x].value)
            }
          }
        }
        for (let i = 0; i < 4; i++) {
          state.panes[i + '_' + x].value = i < h1.length ? h1[i] : 0;
        }

      }
      store.commit('randomValue');
      store.commit('randomValue');
    },
    downMethod(state) {
      for (let x = 0; x < 4; x++) {
        let h1 = []
        for (let y = 3; y >= 0; y--) {
          if (state.panes[y + '_' + x].value) {
            if (h1.length && h1[h1.length - 1] == state.panes[y + '_' + x].value) {
              h1[h1.length - 1] = h1[h1.length - 1] * 2
            } else {
              h1.push(state.panes[y + '_' + x].value)
            }
          }
        }
        for (let i = 3, j = 0; i >= 0; i--, j++) {
          state.panes[i + '_' + x].value = j < h1.length ? h1[j] : 0;
        }

      }
      store.commit('randomValue');
      store.commit('randomValue');
    }
  }
})

export default store
