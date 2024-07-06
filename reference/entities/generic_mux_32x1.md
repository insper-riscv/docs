---
outline: 2
---

# Multiplexador 32x1

<a href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_MUX_32X1.vhd" target="blank"><Badge type="tip" text="GENERIC_MUX_32X1.vhd &boxbox;" /></a>

Atribui saída conforme entrada selecionada dentre trinta e duas.

## Topologia

<pan-container>

![alt text](/images/reference/entities/generic_mux_32x1_topology.mermaid.drawio.svg){.w-full .dark-invert}

</pan-container>

## Interface

```vhdl
entity GENERIC_MUX_4X1 is

    generic (
        DATA_WIDTH : natural := 8
    );

    port (
        selector    : in  std_logic_vector(4 downto 0)                := (others => '0');
        source_1    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_2    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_3    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_4    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_5    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_6    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_7    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_8    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_9    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_10   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_11   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_12   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_13   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_14   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_15   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_16   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_17   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_18   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_19   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_20   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_21   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_22   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_23   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_24   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_25   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_26   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_27   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_28   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_29   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_30   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_31   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_32   : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        destination : out std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0')
    );

end entity;
```

- `DATA_WIDTH`: Largura dos vetores de dados.
- `selector`: Seletor dos vetores de dados.
- `source_1`: Vetor de dados.
- `source_2`: Vetor de dados.
- `source_3`: Vetor de dados.
- `source_4`: Vetor de dados.
- `source_5`: Vetor de dados.
- `source_6`: Vetor de dados.
- `source_7`: Vetor de dados.
- `source_8`: Vetor de dados.
- `source_9`: Vetor de dados.
- `source_10`: Vetor de dados.
- `source_11`: Vetor de dados.
- `source_12`: Vetor de dados.
- `source_13`: Vetor de dados.
- `source_14`: Vetor de dados.
- `source_15`: Vetor de dados.
- `source_16`: Vetor de dados.
- `source_17`: Vetor de dados.
- `source_18`: Vetor de dados.
- `source_19`: Vetor de dados.
- `source_20`: Vetor de dados.
- `source_21`: Vetor de dados.
- `source_22`: Vetor de dados.
- `source_23`: Vetor de dados.
- `source_24`: Vetor de dados.
- `source_25`: Vetor de dados.
- `source_26`: Vetor de dados.
- `source_27`: Vetor de dados.
- `source_28`: Vetor de dados.
- `source_29`: Vetor de dados.
- `source_30`: Vetor de dados.
- `source_31`: Vetor de dados.
- `source_32`: Vetor de dados.
- `destination`: Vetor de dados selecionado.

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

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_COMPARATOR.py" target="blank"><Badge type="tip" text="test_GENERIC_COMPARATOR.py &boxbox;" /></a>

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_generic_mux_32x1_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do mux 32x1](/images/reference/entities/tb_generic_mux_32x1_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
