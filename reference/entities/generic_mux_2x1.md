---
outline: 2
---

# Multiplexador 2x1 <Badge type="info" text="WORK.GENERIC_MUX_2X1" />

[<Badge type="tip" text="Arquivo: GENERIC_MUX_2X1.vhd &boxbox;" />](https://github.com/insper-riscv/core/blob/main/src/GENERIC_MUX_2X1.vhd)

Atribui saída conforme entrada selecionada dentre duas

## Topologia

<pan-container>

![Diagram](/images/reference/entities/GENERIC_MUX_2X1.svg){.w-full .dark-invert}

</pan-container>

## Genericos

| Nome         | Tipo    | Valor | Descrição                    |
| ------------ | ------- | ----- | ---------------------------- |
| `DATA_WIDTH` | natural | 8     | Largura dos vetores de dados |

## Portas

| Nome          | Direção | Tipo                         | Descrição                    |
| ------------- | ------- | ---------------------------- | ---------------------------- |
| `selector`    | input   | std_logic                    | Seletor dos vetores de dados |
| `source_1`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 1             |
| `source_2`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados 2             |
| `destination` | output  | std_logic_vector<DATA_WIDTH> | Vetor de dados selecionado   |

## Usagem

```vhdl
MUX_1 : entity WORK.GENERIC_MUX_2X1
    generic map (
        DATA_WIDTH_0 => 8
    )
    port map (
        source_1    => signal_source_1,
        source_2    => signal_source_2,
        selector    => signal_selector,
        destination => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do mux 2x1](/images/reference/entities/generic_mux_2x1_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_MUX_2X1.py" target="blank"><Badge type="tip" text="test_GENERIC_MUX_2X1.py &boxbox;" /></a>

### Caso 1 <Badge type="info" text="tb_GENERIC_MUX_2X1_case_1" />

<pan-container>

![Forma de caso de teste 1 do comparador](/images/reference/entities/tb_generic_mux_2x1_case_1.svg){.w-full .dark-invert}

</pan-container>
