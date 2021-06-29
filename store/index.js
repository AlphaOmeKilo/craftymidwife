import Vuex from 'vuex'
import bucket from '../plugins/cosmic'

const createStore = () => {
  return new Vuex.Store({
    state: {
      crafts: []
    },
    mutations: {
      setCrafts (state, payload) {
        state.crafts = payload
      }
    },
    actions: {
      nuxtServerInit ({ dispatch }) {
        return dispatch('getCrafts')
      },
      async getCrafts ({ commit }) {
        const getObjects = new Promise((resolve) => {
          resolve(bucket.getObjects({
            query: {
              type: 'crafts'
            },
            props: 'slug,title,metadata'
          }))
        })

        await getObjects.then((data) => {
          commit('setCrafts', data.objects)
        })
      }
    }
  })
}

export default createStore
