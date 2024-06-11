import { type DefaultTheme } from 'vitepress'


export const sidebar : DefaultTheme.Sidebar = {
  '/report/': [
    {
      text: '♺ Imprimir',
      link: 'javascript:print()',
      target: '_top',
    }, {
      text: 'Documentos',
      items: [
        {
          text: 'Relatório 2024_1',
          link: '/report/2024_1/',
        },
      ],
    },
  ],
}
