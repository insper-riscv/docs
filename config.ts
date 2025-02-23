import { defineConfig, type DefaultTheme } from 'vitepress'

import { sidebar as guideSidebar } from './guide/config'
import { sidebar as referenceSidebar } from './reference/config'
import { sidebar as reportSidebar } from './report/config'

// https://vitepress.dev/reference/site-config
export const pt = defineConfig({
  description: 'Documentação',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Guia',
        link: '/guide/',
      }, {
        text: 'Referência',
        link: '/reference/',
      }, {
        text: 'Mais',
        items: [
          {
            text: 'Relatórios',
            link: '/reports/'
          }, {
            text: 'Insper Capstone',
            link: 'https://www.insper.edu.br/pfe/'
          }, {
            text: 'RISC-V Brazil',
            link: 'https://riscvbr.org/'
          }, {
            text: 'CTI Renato Archer',
            link: 'https://www.gov.br/cti/pt-br'
          }
        ],
      },
    ],

    sidebar: {
      ...guideSidebar,
      ...referenceSidebar,
    },

    editLink: {
      pattern: 'https://github.com/insper-riscv/docs/edit/main/:path',
      text: 'Edite esta página no GitHub'
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Próximo'
    },

    outline: 'deep',
    outlineTitle: 'Tópicos',

    lastUpdated: {
      text: 'Atualizado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Alterar Idioma',
    returnToTopLabel: 'Voltar ao Topo',
    sidebarMenuLabel: 'Menu Lateral',
    darkModeSwitchLabel: 'Tema Escuro',
    lightModeSwitchTitle: 'Mudar para Modo Claro',
    darkModeSwitchTitle: 'Mudar para Modo Escuro',
  
    footer: {
      message: 'Publicado sob a Licença MIT.',
      copyright: 'Copyright © 2025 Insper RISC-V',
    },
  },
})

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  pt: {
    placeholder: 'Pesquisar documentos',
    translations: {
      button: {
        buttonText: 'Pesquisar',
        buttonAriaLabel: 'Pesquisar'
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Limpar pesquisa',
          resetButtonAriaLabel: 'Limpar pesquisa',
          cancelButtonText: 'Cancelar',
          cancelButtonAriaLabel: 'Cancelar',
        },
        startScreen: {
          recentSearchesTitle: 'Histórico de Pesquisa',
          noRecentSearchesText: 'Nenhuma pesquisa recente',
          saveRecentSearchButtonTitle: 'Salvar no histórico de pesquisas',
          removeRecentSearchButtonTitle: 'Remover do histórico de pesquisas',
          favoriteSearchesTitle: 'Favoritos',
          removeFavoriteSearchButtonTitle: 'Remover dos favoritos',
        },
        errorScreen: {
          titleText: 'Não foi possível obter resultados',
          helpText: 'Verifique a sua conexão de rede',
        },
        footer: {
          selectText: 'Selecionar',
          navigateText: 'Navegar',
          closeText: 'Fechar',
          searchByText: 'Pesquisa por',
        },
        noResultsScreen: {
          noResultsText: 'Não foi possível encontrar resultados',
          suggestedQueryText: 'Você pode tentar uma nova consulta',
          reportMissingResultsText: 'Deveriam haver resultados para essa consulta?',
          reportMissingResultsLinkText: 'Clique para enviar feedback',
        },
      },
    },
  },
}
