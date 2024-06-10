<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { VPDocAsideSponsors } from 'vitepress/theme'

const sponsors = [
    {
        size: 'mini',
        items: [{
                name: 'RISC-V Brazil',
                img: '/docs/images/logo-insper-positivo.png',
                url: 'https://www.insper.edu.br/pfe/',
            }, {
                name: 'Projeto Final de Engenharia Insper',
                img: '/docs/images/RISC-V_Horizontal_Color.svg',
                url: 'https://riscvbr.org/',
            }, {
                name: 'Centro de Tecnologia da Informação Renato Archer',
                img: '/docs/images/logo_cti_renato_archer.png',
                url: 'https://www.gov.br/cti/pt-br',
            }, 
        ],
    },
]

</script>

<template>
  <DefaultTheme.Layout>
    <template #aside-ads-after>
        <VPDocAsideSponsors :data="sponsors"/>
    </template>
  </DefaultTheme.Layout>
</template>
