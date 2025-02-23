import DefaultTheme, { VPButton } from 'vitepress/theme'

import panContainer from './components/pan-container.vue'
import Layout from './layout.vue'

import './style.css'

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    Layout,

    enhanceApp({ app }) {
        app.component('pan-container', panContainer)
        app.component('VPButton', VPButton)
    }
}
