import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import implicitFigures from 'markdown-it-image-figures'
import table_captions from 'markdown-it-table-captions'

import { pt, search as ptSearch } from '../config'
import { en } from '../en/config'


// https://vitepress.dev/reference/site-config
export default defineConfig(withMermaid({
  title: 'Insper RISC-V',
  base: '/docs/',

  locales: {
    root: {
      label: 'Português',
      lang: 'pt',
      ...pt,
    },
    en: {
      label: 'English',
      lang: 'en',
      ...en,
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/docs/images/RISC-V_Stacked_Color.svg' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/images/RISC-V_Stacked_Color.svg',
      dark: '/images/RISC-V_Stacked_White_Yellow.svg',
      alt: 'RISC-V',
    },

    search: {
      provider: 'local',
      options: {
        placeholder: 'Pesquisar documentos',
        translations: {
          ...(ptSearch.pt.translations),
        },
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/insper-riscv' }
    ],

    lastUpdated: true,
  },

  markdown:  {
    config(md) {
      md.use(implicitFigures, {
        figcaption: true,
      })
      md.use(table_captions)
    }
  },
}))
