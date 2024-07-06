---
outline: 2
---

# Comparador

<a href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_COMPARATOR.vhd" target="blank"><Badge type="tip" text="GENERIC_COMPARATOR.vhd &boxbox;" /></a>

Realiza operações aritmética de comparação entre dois inteiros positivos codificados em vetores booleanos.

## Topologia

<pan-container>

![alt text](/images/reference/entities/generic_comparator_topology.mermaid.drawio.svg){.w-full .dark-invert}

</pan-container>

## Interface

```vhdl
entity GENERIC_COMPARATOR is

    generic (
        DATA_WIDTH : natural := 8
    );

    port (
        source_1      : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_2      : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        flag_equal    : out std_logic;
        flag_less     : out std_logic;
        flag_greather : out std_logic
    );

end entity;
```

- `DATA_WIDTH`: Largura dos vetores de dados.
- `source_1`: Dados da comparação.
- `source_2`: Dados da comparação.
- `flag_equal`: Resultado da comparação `source_1 = source_2`.
- `flag_less`: Resultado da comparação `source_1 < source_2`.
- `flag_greather`: Resultado da comparação `source_1 > source_2`.

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

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_COMPARATOR.py" target="blank"><Badge type="tip" text="test_GENERIC_COMPARATOR.py &boxbox;" /></a>

### Caso 1 <Badge type="info" text="tb_GENERIC_COMPARATOR_case_1" />

<pan-container>

![Forma de caso de teste 1 do comparador](/images/reference/entities/tb_generic_comparator_case_1.svg){.w-full .dark-invert}

</pan-container>
