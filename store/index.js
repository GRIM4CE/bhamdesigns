import axios from 'axios'

export const state = () => ({
  projects: [],
  gallery: [],
  category: '',
})

export const getters = {
  gallery: (state) => state.gallery,
  projects: (state) =>
    state.category
      ? state.projects.filter((project) =>
          project.category.includes(state.category)
        )
      : state.projects,
}

export const actions = {
  async fetchProjects({ commit }) {
    try {
      const res = await axios.get(
        `https://bham-9c586.firebaseio.com/projects.json`
      )
      commit('setProjects', res.data)
    } catch (e) {
      console.log(e)
    }
  },
  async fetchGallery({ commit }, title) {
    try {
      const res = await axios.get(
        `https://bham-9c586.firebaseio.com/galleries/${title}.json`
      )
      commit('setGallery', res.data)
    } catch (e) {
      console.log(e)
    }
  },
}

export const mutations = {
  setProjects(state, projects) {
    state.projects = projects
  },
  setGallery(state, gallery) {
    state.gallery = gallery
  },
  setCategory(state, category) {
    state.category = category
  },
}
