import { type DefaultTheme } from 'vitepress'


export const sidebar : DefaultTheme.Sidebar = {
  '/reference/': [
    {
      text: 'Organização',
      link: '/reference/components/',
      collapsed: false,
      items: [
        /* {
          text: 'Estruturas de dados',
        }, {
          text: 'Constantes Globais',
        },  */{
          text: 'Top Level',
          link: '/reference/components/',
        }, {
          text: 'CPU',
          link: '/reference/components/cpu_top_level',
          collapsed: true,
          items: [
            {
              text: 'Pipeline',
              collapsed: false,
              items: [
                {
                  text: 'IF - Busca Instrução',
                  link: '/reference/components/cpu_stage_if',
                }, {
                  text: 'ID - Decodifica Instrução',
                  link: '/reference/components/cpu_stage_id',
                }, {
                  text: 'EX - Executa',
                  link: '/reference/components/cpu_stage_ex',
                }, {
                  text: 'MEM - Acessa à Memória',
                  link: '/reference/components/cpu_stage_mem',
                }, {
                  text: 'WB - Escreve o Retorno',
                  link: '/reference/components/cpu_stage_wb',
                },
              ]
            }, {
              text: 'Unidade de Encaminhamento de Dados para Execução',
              link: '/reference/components/cpu_execution_forwarding_unit',
            }, {
              text: 'Unidade de Encaminhamento de Dados para Desvio',
              link: '/reference/components/cpu_branch_forwarding_unit',
            }, {
              text: 'Unidade de Controle de Hazards',
              link: '/reference/components/cpu_hazard_control_unit',
            },
          ],
        },  {
          text: 'Módulos',
          collapsed: true,
          items: [
            {
              text: 'Contador de Programa',
              link: '/reference/components/module_program_counter',
            }, {
              text: 'Unidade de Controle',
              link: '/reference/components/module_control_unit',
            }, {
              text: 'Arquivo de Registradores',
              link: '/reference/components/module_register_file',
            }, {
              text: 'Controlador da Unidade de Execução',
              link: '/reference/components/module_execution_unit_controller',
            }, {
              text: 'Unidade de Execução',
              link: '/reference/components/module_execution_unit',
            }, {
              text: 'Escrita de Retorno',
              link: '/reference/components/module_write_back',
            }, {
              text: 'Comparação para Desvio',
              link: '/reference/components/module_branch_compare_unit',
            }, {
              text: 'Desvio',
              link: '/reference/components/module_branch_unit',
            }, {
              text: 'Interface de Memória',
              link: '/reference/components/module_memory_interface',
            },
          ],
        }, {
          text: 'RV32I',
          collapsed: true,
          items: [
            {
              text: 'Arquivo de Registradores',
              link: '/reference/components/rv32i_register_file',
            }, {
              text: 'Unidade Lógica e Aritmética',
              link: '/reference/components/rv32i_alu',
            }, {
              text: 'Controlador da ULA',
              link: '/reference/components/rv32i_alu_controller',
            }, {
              text: 'Deslocador da ULA',
              link: '/reference/components/rv32i_alu_shifter',
            }, {
              text: 'Controlador de Desvio',
              link: '/reference/components/rv32i_branch_controller',
            },
          ],
        }, {
          text: 'Genéricos',
          collapsed: true,
          items: [
            {
              text: 'Carry Lookahead',
              link: '/reference/components/generic_carry_lookahead',
            }, {
              text: 'Somador',
              link: '/reference/components/generic_adder',
            }, {
              text: 'Comparador',
              link: '/reference/components/generic_comparator',
            }, {
              text: 'Multiplexador 2x1',
              link: '/reference/components/generic_mux_2x1',
            }, {
              text: 'Multiplexador 4x1',
              link: '/reference/components/generic_mux_4x1',
            }, {
              text: 'Multiplexador 32x1',
              link: '/reference/components/generic_mux_32x1',
            }, {
              text: 'RAM',
              link: '/reference/components/generic_ram',
            }, {
              text: 'Registrador',
              link: '/reference/components/generic_register',
            }, {
              text: 'ROM',
              link: '/reference/components/generic_rom',
            }, {
              text: 'ROM Quartus',
              link: '/reference/components/generic_rom_quartus',
            }, {
              text: 'Extensor de Sinal',
              link: '/reference/components/generic_signal_extender',
            },
          ],
        },
      ],
    }, {
      text: 'Especificação',
      items: [
        {
          text: 'Conjunto de Instruções',
          link: '/reference/isa/',
        }, {
          text: 'Pseudo-instruções',
          link: '/reference/isa/pseudo',
        },
      ],
    }, /* {
      text: 'Testes',
      items: [
        {
          text: 'Estrutura',
        }, {
          text: 'Utilidades',
        },
      ],
    }, */
  ],
}
