// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

// 引入vant组件 和 样式 
import Vant from 'vant';
import 'vant/lib/index.css';

//引入 amfe-flexible 自动设置 rem 布局适配（html 标签字体大小）
import 'amfe-flexible'

import './styles/index.less' // 加载全局样式 

const store = createStore({
    state () {
      return {
        user: null
      }
    },
    mutations: {
        setUser(state, data){
            state.user = data
        }
    }
  })

const app = createApp(App)

app.use(router)
app.use(Vant) // 全局注册vant button 
app.use(store);

app.mount('#app')
