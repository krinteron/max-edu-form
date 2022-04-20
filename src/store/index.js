import { createStore } from 'vuex';

export default createStore({
  state: {
    cities: [],
    subjectOptions: [
      'Недоволен качеством услуг',
      'Расторжение договора',
      'Не приходит письмо активации на почту',
      'Не работает личный кабинет',
    ],
    sending: false,
  },
  getters: {},
  mutations: {
    addCities(state, cities) {
      state.cities = [...cities];
    },
    setSendStatus(state, status) {
      state.sending = status;
    },
  },
  actions: {
    fetchCities({ commit }) {
      return fetch('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/cities')
        .then((response) => response.json())
        .then((data) => {
          const cities = data.map((city) => {
            const { id, title } = city;
            return {
              id,
              value: title,
            };
          });
          commit('addCities', cities);
        });
    },

    sendForm({ commit }, data) {
      commit('setSendStatus', true);
      const formData = new FormData();
      formData.append('city', data.city);
      formData.append('subject', data.subject);
      formData.append('issue', data.issue);
      formData.append('attachment', data.attachment);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: formData,
      };
      return fetch(
        'https://625ed9533b039517f1fd701c.mockapi.io/api/edu/success',
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          commit('setSendStatus', false);
          if (data.success) return true;
          throw new Error('error');
        })
        .catch(() => false);
    },
  },
  modules: {},
});
