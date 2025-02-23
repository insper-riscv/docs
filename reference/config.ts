import { type DefaultTheme } from 'vitepress'


export const sidebar : DefaultTheme.Sidebar = {
  '/reference/': [
    {
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
    }, {
      text: 'Pacotes',
      items: [
        {
          text: 'CPU',
          link: '/reference/packages/cpu.md',
        }, {
          
          text: 'RISC-V',
          items: [
            {
              text: 'Inteiros 32-bit',
              link: '/reference/packages/rv32i.md',
            }, {
              text: 'Extensão M',
              link: '/reference/packages/rv32m.md',
            }
          ]
        }, {
          text: 'Genéricos',
          link: '/reference/packages/generics.md',
        },
      ]
    }, {
      text: 'Entidades',
      items: [
        {
          text: 'Top Level',
          link: '/reference/entities/',
        }, {
          text: 'CPU',
          link: '/reference/entities/cpu_top_level',
          collapsed: true,
          items: [
            {
              text: 'Estágios',
              collapsed: true,
              items: [
                {
                  text: 'IF - Busca Instrução',
                  link: '/reference/entities/cpu_stage_if',
                }, {
                  text: 'ID - Decodifica Instrução',
                  link: '/reference/entities/cpu_stage_id',
                }, {
                  text: 'EX - Executa',
                  link: '/reference/entities/cpu_stage_ex',
                }, {
                  text: 'MEM - Acessa à Memória',
                  link: '/reference/entities/cpu_stage_mem',
                }, {
                  text: 'WB - Escreve o Retorno',
                  link: '/reference/entities/cpu_stage_wb',
                },
              ]
            }, {
              text: 'Unidade de Encaminhamento de Dados para Execução',
              link: '/reference/entities/cpu_execution_forwarding_unit',
            }, {
              text: 'Unidade de Encaminhamento de Dados para Desvio',
              link: '/reference/entities/cpu_branch_forwarding_unit',
            }, {
              text: 'Unidade de Controle de Hazards',
              link: '/reference/entities/cpu_hazard_control_unit',
            },
          ],
        },  {
          text: 'Módulos',
          collapsed: true,
          items: [
            {
              text: 'Contador de Programa',
              link: '/reference/entities/module_program_counter',
            }, {
              text: 'Unidade de Controle',
              link: '/reference/entities/module_control_unit',
            }, {
              text: 'Arquivo de Registradores',
              link: '/reference/entities/module_register_file',
            }, {
              text: 'Controlador da Execução',
              link: '/reference/entities/module_execution_unit_controller',
            }, {
              text: 'Execução',
              link: '/reference/entities/module_execution_unit',
            }, {
              text: 'Seletor de Escrita',
              link: '/reference/entities/module_write_back',
            }, {
              text: 'Comparação para Desvio',
              link: '/reference/entities/module_branch_compare_unit',
            }, {
              text: 'Desvio',
              link: '/reference/entities/module_branch_unit',
            }, {
              text: 'Interface de Memória',
              link: '/reference/entities/module_memory_interface',
            },
          ],
        }, {
          text: 'RV32I',
          collapsed: true,
          items: [
            {
              text: 'Arquivo de Registradores',
              link: '/reference/entities/rv32i_register_file',
            }, {
              text: 'Unidade Lógica e Aritmética',
              link: '/reference/entities/rv32i_alu',
            }, {
              text: 'Conversor de Tipo',
              link: '/reference/entities/rv32i_type_converter',
            }, {
              text: 'Deslocador da ULA',
              link: '/reference/entities/rv32i_alu_shifter',
            }, {
              text: 'Controlador de Desvio',
              link: '/reference/entities/rv32i_branch_controller',
            },
          ],
        }, {
          text: 'Genéricos',
          collapsed: true,
          items: [
            {
              text: 'Carry Lookahead',
              link: '/reference/entities/generic_carry_lookahead',
            }, {
              text: 'Somador',
              link: '/reference/entities/generic_adder',
            }, {
              text: 'Comparador',
              link: '/reference/entities/generic_comparator',
            }, {
              text: 'Multiplexador 2x1',
              link: '/reference/entities/generic_mux_2x1',
            }, {
              text: 'Multiplexador 4x1',
              link: '/reference/entities/generic_mux_4x1',
            }, {
              text: 'Multiplexador 32x1',
              link: '/reference/entities/generic_mux_32x1',
            }, {
              text: 'RAM',
              link: '/reference/entities/generic_ram',
            }, {
              text: 'Registrador',
              link: '/reference/entities/generic_register',
            }, {
              text: 'ROM',
              link: '/reference/entities/generic_rom',
            }, {
              text: 'Extensor de Sinal',
              link: '/reference/entities/generic_signal_extender',
            },
          ],
        },
      ],
    }, {
      text: 'Testes',
      items: [
        {
          text: 'Dispositivosob Teste',
          link: '/reference/tests/dispositivo-sob-teste'
        }, {
          text: 'Síntese e Elaboração',
          link: '/reference/tests/sintese-e-elaboracao'
        }, {
          text: 'Testes lógicos',
          link: '/reference/tests/testes-de-logica'
        }, {
          text: 'Teste de cobertura',
          link: '/reference/tests/testes-de-cobertura'
        },
      ],
    },
  ],
}
