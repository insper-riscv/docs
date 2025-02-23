---
outline: 2
---

# Multiplexador 32x1

<VPButton theme="alt" text="Abrir arquivo fonte ⧉" href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_MUX_32X1.vhd" style="margin: 1rem 0;" />

Atribui saída conforme entrada selecionada dentre trinda e duas

## Topologia

<pan-container>

![Diagram](/images/reference/entities/GENERIC_MUX_32X1.svg){.w-full .dark-invert}

</pan-container>

## Genericos

| Nome         | Tipo    | Valor | Descrição                    |
| ------------ | ------- | ----- | ---------------------------- |
| `DATA_WIDTH` | natural | 8     | Largura dos vetores de dados |

## Portas

| Nome          | Direção | Tipo                         | Descrição                    |
| ------------- | ------- | ---------------------------- | ---------------------------- |
| `selector`    | input   | std_logic_vector<5>          | Seletor dos vetores de dados |
| `source_1`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 1             |
| `source_2`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 2             |
| `source_3`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 3             |
| `source_4`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 4             |
| `source_5`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 5             |
| `source_6`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 6             |
| `source_7`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 7             |
| `source_8`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 8             |
| `source_9`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 9             |
| `source_10`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 10            |
| `source_11`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 11            |
| `source_12`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 12            |
| `source_13`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 13            |
| `source_14`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 14            |
| `source_15`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 15            |
| `source_16`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 16            |
| `source_17`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 17            |
| `source_18`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 18            |
| `source_19`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 19            |
| `source_20`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 20            |
| `source_21`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 21            |
| `source_22`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 22            |
| `source_23`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 23            |
| `source_24`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 24            |
| `source_25`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 25            |
| `source_26`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 26            |
| `source_27`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 27            |
| `source_28`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 28            |
| `source_29`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 29            |
| `source_30`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 30            |
| `source_31`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 31            |
| `source_32`   | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 32            |
| `destination` | output  | std_logic_vector<DATA_WIDTH> | Vetor de dados selecionado   |

## Usagem

```vhdl
MUX_32X1 : entity WORK.GENERIC_MUX_32X1
    generic map (
        DATA_WIDTH => 8
    )
    port map (
        selector    => signal_selector,
        source_1    => data_array(0),
        source_2    => data_array(1),
        source_3    => data_array(2),
        source_4    => data_array(3),
        source_5    => data_array(4),
        source_6    => data_array(5),
        source_7    => data_array(6),
        source_8    => data_array(7),
        source_9    => data_array(8),
        source_10   => data_array(9),
        source_11   => data_array(10),
        source_12   => data_array(11),
        source_13   => data_array(12),
        source_14   => data_array(13),
        source_15   => data_array(14),
        source_16   => data_array(15),
        source_17   => data_array(16),
        source_18   => data_array(17),
        source_19   => data_array(18),
        source_20   => data_array(19),
        source_21   => data_array(20),
        source_22   => data_array(21),
        source_23   => data_array(22),
        source_24   => data_array(23),
        source_25   => data_array(24),
        source_26   => data_array(25),
        source_27   => data_array(26),
        source_28   => data_array(27),
        source_29   => data_array(28),
        source_30   => data_array(29),
        source_31   => data_array(30),
        source_32   => data_array(31),
        destination => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do mux 32x1](/images/reference/entities/generic_mux_32x1_netlist.svg){.w-full .dark-invert .image-fit}

</pan-container>

## Casos de teste

<VPButton theme="alt" text="Abrir arquivo fonte ⧉" href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_COMPARATOR.py" />

::: danger TO DO

```md
### `tb_generic_mux_32x1_case_1`

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do mux 32x1](/images/reference/entities/tb_generic_mux_32x1_case_1.svg){.w-full .dark-invert}

</pan-container>
```

:::
