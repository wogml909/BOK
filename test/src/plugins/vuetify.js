import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import '@mdi/font/css/materialdesignicons.css';
import '@/assets/scss/_index.scss';//_index.scss를

Vue.use(Vueify);

export default new Vuetify({
    icons:{
        iconfont: 'mdi',
    },
});


