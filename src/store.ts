import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    gallery: [],
    category: null,
  },
  getters: {
    activeProjects(state) {
      if (state.category) {
        return state.projects.filter((project: any) => project.category.includes(state.category))
      }
      return state.projects
    },
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects
    },
    setGallery(state, gallery) {
      state.gallery = gallery
    },
    setCategory(state, category) {
      state.category = category
    },
  },
  actions: {
    fetchProjects(context) {
      axios.get(`https://bham-9c586.firebaseio.com/.json`)
        .then((res) => {
          context.commit('setProjects', res.data.projects)
        })
    },
    fetchGallery(context, title) {
      axios.get(`https://bham-9c586.firebaseio.com/galleries/${title}.json`)
        .then((res) => {
          context.commit('setGallery', res.data)
        })
    },
  },
})
