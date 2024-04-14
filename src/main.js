import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import pinia from "./store/index"
import "normalize.css"
import "./assets/css/index.css"
// Toast
import { Toast } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { Dialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { Notify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { ImagePreview } from 'vant';
import 'vant/es/image-preview/style';

createApp(App).use(router).use(pinia).mount('#app')
