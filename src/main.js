import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
// vuex implementation 
const store = createStore({
	state() {
		return {
			bpm: null,
			mood: null,
		};
	},
  mutations: {
    setBpm(state, bpm) {
      state.bpm = bpm
    },
    setMood(state, mood) {
      state.mood = mood
    }
  }
});
app.use(store)
app.use(router).mount("#app");
