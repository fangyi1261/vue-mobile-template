import CompApi from '@/api/common/index';

const state = {};

const getters = {};

const mutations = {};

const actions = {
  getMenu(context, payload) {
    return new Promise((resolve, reject) => {
      $http.post(CompApi.getMenu, payload).then(res => {
        // context.commit('');
        resolve(res.result);
      }).catch(error => {
        reject(error);
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
