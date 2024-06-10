import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  description: 'Documentation',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'More',
        items: [
          {
            text: 'CTI Renato Archer',
            link: 'https://www.gov.br/cti/pt-br'
          }, {
            text: 'PFE Insper',
            link: 'https://www.insper.edu.br/pfe/'
          }
        ],
      },
    ],

    sidebar: {
    },

    outline: 'deep',
    outlineTitle: 'Topics',

    editLink: {
      pattern: 'https://github.com/insper-riscv/docs/edit/main/:path',
      text: 'Edit this page'
    },

    lastUpdated: {
      text: 'Last modified at',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    darkModeSwitchLabel: 'Appearence',
    returnToTopLabel: 'Back to top',
    langMenuLabel: 'Change language',
  
    footer: {
      message: 'Published under the MIT License.',
      copyright: 'Copyright © 2024'
    },
  },
})
