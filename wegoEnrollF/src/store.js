import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      message:{},
      navIndex:0,
      isUpdate:false,
      collapsed:false,
      nav:[{title:'报名名单',icon:'pie-chart',path:'managelist',key:'1'},
        ],
      key:1,
      interviewee:'',
  },
  mutations: {
      update(state,val){
        for(let i in val){
            state.message[i]=val[i];
        }
      }
  },
  actions: {

  }
})
