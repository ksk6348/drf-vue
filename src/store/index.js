import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '@/services/api.service'

import spots from './spots.module'

Vue.use(Vuex);
ApiService.init();

export default new Vuex.Store({
  modules: {
    spots
  }
})
