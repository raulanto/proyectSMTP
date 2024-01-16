import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import router from './router'
import { generateClasses } from '@formkit/tailwindcss'
const app = createApp(App)
app
    .use(
        plugin,
        defaultConfig({
            config: {
                classes: generateClasses({
                    text: {
                        outer: 'mb-5',
                        label: 'block mb-1 font-bold text-sm',
                        inner: 'bg-white max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
                        input: 'w-full h-10 px-3 bg-transparent border-none focus:outline-none text-base text-gray-700 placeholder-gray-400 focus:outline-none',
                        help: 'text-xs text-gray-500',
                        messages: 'list-none p-0 mt-1 mb-0',
                        message: 'text-red-500 mb-1 text-xs',
                    },
                }),
            },
        })
    )
    .use(createPinia())
    .use(router)
    .mount('#app');
