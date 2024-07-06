---
outline: 2
---

# RAM

<a href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_RAM.vhd" target="blank"><Badge type="tip" text="GENERIC_RAM.vhd &boxbox;" /></a>

Memória de acesso randômico.

## Topologia

<pan-container>

![alt text](/images/reference/entities/generic_ram_topology.mermaid.drawio.svg){.w-full .dark-invert}

</pan-container>

## Interface

```vhdl
entity GENERIC_RAM is

    generic (
        DATA_WIDTH        : natural := 8;
        ADDRESS_WIDTH     : natural := 8;
        ADDRESSABLE_WIDTH : natural := 7
    );

    port (
        clock        : in  std_logic;
        enable       : in  std_logic;
        enable_read  : in  std_logic;
        enable_write : in  std_logic;
        address      : in  std_logic_vector((ADDRESS_WIDTH - 1) downto 0);
        source       : in  std_logic_vector((DATA_WIDTH - 1) downto 0);
        destination  : out std_logic_vector((DATA_WIDTH - 1) downto 0)
    );

end entity;
```

- `DATA_WIDTH`: Largura dos vetores de dados.
- `ADDRESS_WIDTH`: Largura do vetore de endereço.
- `ADDRESSABLE_WIDTH`: Largura do vetor de endereço mapeado na memória.
- `clock`: Sinal de clock.
- `enable`: Habilita a entidade.
- `enable_read`: Habilita leitura. Caso contrário, `destination` assume sinal de alta impedância.
- `enable_write`: Habilita escrita.
- `address`: Vetor de endereço.
- `source`: Vetor de dados para escrita.
- `destination`: Vetor de dados endereçado.

::: warning ATENÇÃO!

`ADDRESSABLE_WIDTH` deve ser menor ou igual a `ADDRESS_WIDTH`.

:::

## Usagem

```vhdl
RAM : entity WORK.GENERIC_RAM
    generic map (
        DATA_WIDTH_0      => 32;
        ADDRESS_WIDTH     => 32;
        ADDRESSABLE_WIDTH => 8
    )
    port map (
        clock        => clock,
        enable       => signal_enable,
        enable_read  => signal_enable_read,
        enable_write => signal_enable_write,
        address      => signal_address,
        source       => signal_source,
        destination  => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL da RAM](/images/reference/entities/generic_ram_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_RAM.py" target="blank"><Badge type="tip" text="test_GENERIC_RAM.py &boxbox;" /></a>

### Caso 1 <Badge type="info" text="tb_GENERIC_RAM_case_1" />

<pan-container :grid="false">

![Forma de onda do caso de teste 1 da RAM](/images/reference/entities/tb_generic_ram_case_1.svg){.w-full .dark-invert}

</pan-container>
