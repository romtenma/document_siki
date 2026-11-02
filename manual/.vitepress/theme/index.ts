import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'doc-before': () => h('p', { class: 'manual-status' }, [
      h('span', '1.0.0向け'), '作成中のマニュアル'
    ])
  })
}
