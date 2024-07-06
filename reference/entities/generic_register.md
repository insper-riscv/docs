---
outline: 2
---

# Registrador

<a href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_REGISTER.vhd" target="blank"><Badge type="tip" text="GENERIC_REGISTER.vhd &boxbox;" /></a>

Registrador de uso geral.

## Topologia

<pan-container>

![alt text](/images/reference/entities/generic_register_topology.mermaid.drawio.svg){.w-full .dark-invert}

</pan-container>

## Interface

```vhdl
entity GENERIC_REGISTER is

    generic (
        DATA_WIDTH : natural := 8
    );

    port (
        clock       : in  std_logic;
        clear       : in  std_logic := '1';
        enable      : in  std_logic := '0';
        source      : in  std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => 'X');
        destination : out std_logic_vector((DATA_WIDTH - 1) downto 0) := (others => '0')
    );

end entity;
```
- `DATA_WIDTH`: Largura dos vetores de dados.
- `clock`: Sinal de clock.
- `clear`: Limpa os dados da entidade.
- `enable`: Habilita a entidade.
- `source`: Vetor de dados para escrita.
- `destination`: Vetor de dados regisrados.

## Usagem

```vhdl
REGISTER_1 : entity WORK.GENERIC_REGISTER
    generic map (
        DATA_WIDTH => 32
    )
    port map (
        clock       => clock,
        clear       => signal_clear,
        enable      => signal_enable,
        source      => signal_source,
        destination => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Registrador](/images/reference/entities/generic_register_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_REGISTER.py" target="blank"><Badge type="tip" text="test_GENERIC_REGISTER.py &boxbox;" /></a>

### Caso 1 <Badge type="info" text="tb_GENERIC_REGISTER_case_1" />

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Registrador](/images/reference/entities/tb_generic_register_case_1.svg){.w-full .dark-invert}

</pan-container>
