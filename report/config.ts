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
          text: 'Relatório 2024.1',
          link: '/report/2024_1/',
        },
        {
          text: 'Relatório 2024.2',
          link: '/docs/documents/2024_2-report.pdf',
        },
      ],
    },
  ],
}
