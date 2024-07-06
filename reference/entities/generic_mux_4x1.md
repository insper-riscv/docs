---
outline: 2
---

# Multiplexador 4x1

<a href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_MUX_4X1.vhd" target="blank"><Badge type="tip" text="GENERIC_MUX_4X1.vhd &boxbox;" /></a>

Atribui saída conforme entrada selecionada dentre quatro.

## Topologia

<pan-container>

![alt text](/images/reference/entities/generic_mux_4x1_topology.mermaid.drawio.svg){.w-full .dark-invert}

</pan-container>

## Interface

```vhdl
entity GENERIC_MUX_4X1 is

    generic (
        DATA_WIDTH : natural := 8
    );

    port (
        selector    : in  std_logic                                   := '0';
        source_1    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_2    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_3    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        source_4    : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0');
        destination : out std_logic_vector((DATA_WIDTH - 1) downto 0)
    );

end entity;
```

- `DATA_WIDTH`: Largura dos vetores de dados.
- `selector`: Seletor dos vetores de dados.
- `source_1`: Vetor de dados.
- `source_2`: Vetor de dados.
- `source_3`: Vetor de dados.
- `source_4`: Vetor de dados.
- `destination`: Vetor de dados selecionado.

## Usagem

```vhdl
MUX_1 : entity WORK.GENERIC_MUX_4X1
    generic map (
        DATA_WIDTH_0 => 8
    )
    port map (
        source_1    => signal_source_1,
        source_2    => signal_source_2,
        source_3    => signal_source_3,
        source_4    => signal_source_4,
        selector    => signal_selector,
        destination => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do mux 4x1](/images/reference/entities/generic_mux_4x1_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_MUX_4X1.py" target="blank"><Badge type="tip" text="test_GENERIC_MUX_4X1.py &boxbox;" /></a>

### Caso 1 <Badge type="info" text="tb_GENERIC_MUX_4X1_case_1" />

<pan-container>

![Forma de caso de teste 1 do comparador](/images/reference/entities/tb_generic_mux_4x1_case_1.svg){.w-full .dark-invert}

</pan-container>
