import { createStore } from "vuex";

export default createStore({
  state: () => ({
    memories: [
      { id: '1', title: "Memory 1", description: "blabla 1", image: 'https://www.worldatlas.com/r/w960-q80/upload/80/50/11/shutterstock-117040402.jpg' },
      { id: '2', title: "Memory 2", description: "blabla 2", image: 'https://www.worldatlas.com/r/w960-q80/upload/f7/26/7c/shutterstock-70804165.jpg' },
      { id: '3', title: "Memory 3", description: "blabla 3", image: 'https://www.worldatlas.com/r/w960-q80/upload/c5/e9/cc/shutterstock-422482132.jpg' },
    ],
    currentMemoryId: '',
  }),
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state, getters) {
      return getters.memories.find((memory) => memory.id === state.currentMemoryId);
    }
  },
  mutations: {
    setCurrentMemoryId(state, id) {
      state.currentMemoryId = id;
    },
    addOneMemory(state, memory) {
      memory.id = new Date().toString();
      state.memories.push(memory);
    }
  },
  actions: {
    async addMemory({state, commit}, memory) {
      try {
        commit('addOneMemory', memory);
      }
      catch {
        alert('Error!');
      }
    }
  }
});