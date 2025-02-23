---
outline: 2
---

# _Carry Lookahead_ <Badge type="info" text="WORK.GENERIC_CARRY_LOOKAHEAD" />

[<Badge type="tip" text="Arquivo: GENERIC_CARRY_LOOKAHEAD.vhd &boxbox;" />](https://github.com/insper-riscv/core/blob/main/src/GENERIC_CARRY_LOOKAHEAD.vhd)

Auxilia a implementação do
[CLA](https://en.wikipedia.org/wiki/Carry-lookahead_adder) para ganhos de
performance em circuitos somadores como o Somador Genérico e a Unidade de Lógica
Aritmética.

## Topologia

<pan-container>

![Diagram](/images/reference/entities/GENERIC_CARRY_LOOKAHEAD.svg){.w-full .dark-invert}

</pan-container>

## Genericos

| Nome         | Tipo    | Valor | Descrição                    |
| ------------ | ------- | ----- | ---------------------------- |
| `DATA_WIDTH` | natural | 8     | Largura dos vetores de dados |

## Portas

| Nome              | Direção | Tipo                         | Descrição                  |
| ----------------- | ------- | ---------------------------- | -------------------------- |
| `carry_in`        | in      | std_logic                    | Carry de entrada da soma   |
| `carry_generate`  | in      | std_logic_vector<DATA_WIDTH> | Carry de geração do CLA    |
| `carry_propagate` | in      | std_logic_vector<DATA_WIDTH> | Carry de propagação do CLA |
| `carry_out`       | out     | std_logic_vector<DATA_WIDTH> | Carry de saída da soma     |

## Usagem

```vhdl
CARRY_LOOKAHEAD : entity WORK.GENERIC_CARRY_LOOKAHEAD
    generic map (
        DATA_WIDTH => 8
    )
    port map(
        carry_in        => carry_in,
        carry_generate  => source_and,
        carry_propagate => source_xor,
        carry_out       => carry_out
    );
```

## Diagrama RTL

<pan-container>

![Diagrama RTL do Carry Lookahead](/images/reference/entities/generic_carry_lookahead_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_CARRY_LOOKAHEAD.py" target="blank"><Badge type="tip" text="test_GENERIC_CARRY_LOOKAHEAD.py &boxbox;" /></a>

::: warning ATENÇÃO!

To do

:::
