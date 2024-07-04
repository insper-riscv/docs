---
outline: 2
---

# _Carry Lookahead_

<a href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_CARRY_LOOKAHEAD.vhd" target="blank"><Badge type="tip" text="GENERIC_CARRY_LOOKAHEAD.vhd &boxbox;" /></a>

Auxilia a implementação do [CLA](https://en.wikipedia.org/wiki/Carry-lookahead_adder) para ganhos de performance em circuitos somadores como o [Somador Genérico](/reference/entities/generic_adder) e a [Unidade de Lógica Aritmética](/reference/entities/rv32i_alu). 

## Topologia

<pan-container>

![Topologia do Carry Lookahead](/images/reference/entities/generic_carry_lookahead_topology.mermaid.drawio.svg){.w-full .dark-invert}

</pan-container>

## Interface

```vhdl
entity GENERIC_CARRY_LOOKAHEAD is

    generic(
        DATA_WIDTH : natural := 8
    );

    port (
        carry_in        : in  std_logic                                   := '0';
        carry_generate  : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        carry_propagate : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        carry_out       : out std_logic_vector((DATA_WIDTH - 1) downto 0)
    );

end entity;
```

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

::: warning ATENÇÃO!

To do

:::
