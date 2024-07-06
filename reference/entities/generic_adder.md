---
outline: 2
---

# Somador

<a href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_ADDER.vhd" target="blank"><Badge type="tip" text="GENERIC_ADDER.vhd &boxbox;" /></a>

Realiza operação aritmética de soma entre dois inteiros codificados em vetores booleanos.

## Topologia

<pan-container>

![alt text](/images/reference/entities/generic_adder_topology.mermaid.drawio.svg){.w-full .dark-invert}

</pan-container>

## Interface

```vhdl
entity GENERIC_ADDER is

    generic (
        DATA_WIDTH       : natural := 8;
        DEFAULT_SOURCE_2 : integer := 1
    );

    port (
        source_1    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_2    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := std_logic_vector(to_signed(DEFAULT_SOURCE_2, DATA_WIDTH));
        destination : out std_logic_vector((DATA_WIDTH - 1) downto 0)
    );

end entity;
```

- `DATA_WIDTH`: Largura dos vetores de dados.
- `DEFAULT_SOURCE_2`: Dispensa necessidade de atribuir entrada `source_2`.
- `source_1`: Dados da soma.
- `source_2`: Dados da soma.
- `destination`: Resultado da soma `source_1 + source_2`.

## Usagem

### Incremento constante

```vhdl
CONSTANT_ADDER : entity WORK.GENERIC_ADDER
    generic map (
        DATA_WIDTH_      => 32,
        DEFAULT_SOURCE_2 => 1
    )
    port map (
        source_1    => signal_source_1,
        destination => signal_destination
    );
```

### Somador

```vhdl
ADDER : entity WORK.GENERIC_ADDER
    generic map (
        DATA_WIDTH => 32
    )
    port map (
        source_1    => signal_source_1,
        source_2    => signal_source_2,
        destination => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do somador](/images/reference/entities/generic_adder_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_ADDER.py" target="blank"><Badge type="tip" text="test_GENERIC_ADDER.py &boxbox;" /></a>

### Caso 1 <Badge type="info" text="tb_GENERIC_ADDER_case_1" />

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do somador](/images/reference/entities/tb_generic_adder_case_1.svg){.w-full .dark-invert}

</pan-container>
