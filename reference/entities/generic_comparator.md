---
outline: 2
---

# Comparador

<VPButton theme="alt" text="Abrir arquivo fonte ⧉" href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_COMPARATOR.vhd" style="margin: 1rem 0;" />

Realiza operações aritmética de comparação entre dois inteiros positivos
codificados em vetores booleanos

## Topologia

<pan-container>

![Diagram](/images/reference/entities/GENERIC_COMPARATOR.svg){.w-full .dark-invert}

</pan-container>

## Generics

| Generic name | Tipo    | Valor | Descrição                    |
| ------------ | ------- | ----- | ---------------------------- |
| `DATA_WIDTH` | natural | 8     | Largura dos vetores de dados |

## Ports

| Nome            | Direção | Tipo                         | Descrição                                     |
| --------------- | ------- | ---------------------------- | --------------------------------------------- |
| `source_1`      | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados primário                       |
| `source_2`      | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados secundário                     |
| `flag_equal`    | output  | std_logic                    | Resultado da comparação `source_1 = source_2` |
| `flag_less`     | output  | std_logic                    | Resultado da comparação `source_1 < source_2` |
| `flag_greather` | output  | std_logic                    | Resultado da comparação `source_1 > source_2` |

## Usagem

```vhdl
COMPARATOR : entity WORK.GENERIC_COMPARATOR
    generic map (
        DATA_WIDTH => 8
    )
    port map (
        source_1      => signal_source_1,
        source_2      => signal_source_2,
        flag_equal    => flag_equal,
        flag_less     => flag_less,
        flag_greather => flag_greather
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do comparador](/images/reference/entities/generic_comparator_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

<VPButton theme="alt" text="Abrir arquivo fonte ⧉" href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_COMPARATOR.py" />

### `tb_GENERIC_COMPARATOR_case_1`

<pan-container>

![Forma de caso de teste 1 do comparador](/images/reference/entities/tb_generic_comparator_case_1.svg){.w-full .dark-invert}

</pan-container>
