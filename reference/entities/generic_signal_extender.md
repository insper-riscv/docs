---
outline: 2
---

# Extensor de Sinal

<a href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_SIGNAL_EXTENDER.vhd" target="blank"><Badge type="tip" text="GENERIC_SIGNAL_EXTENDER.vhd &boxbox;" /></a>

Memória de apenas leitura.

## Topologia

<pan-container>

![alt text](/images/reference/entities/generic_signal_extender_topology.mermaid.drawio.svg){.w-full .dark-invert}

</pan-container>

## Interface

```vhdl
entity GENERIC_SIGNAL_EXTENDER is

    generic (
        SOURCE_WIDTH      : natural := 4;
        DESTINATION_WIDTH : natural := 8
    );

    port (
        source          : in  std_logic_vector((SOURCE_WIDTH - 1) downto 0);
        enable_unsigned : in  std_logic := '0';
        destination     : out std_logic_vector((DESTINATION_WIDTH - 1) downto 0)
    );

end entity;
```

- `SOURCE_WIDTH`: Largura do vetor de entrada.
- `DESTINATION_WIDTH`: Largura do vetor de saída.
- `source`: Vetor de entrada.
- `enable_unsigned`: Habilita extensão lógica ao invés de aritmética (sem sinal).
- `destination`: Vetor de saída.

## Usagem

### Extensão de Byte

Extende um sinal menor em outro maior. Para valores inteiros com sinal, preenche com o bit mais significativo a esquerda. Ex: de `10101010` para `1111111110101010` ou `0000000010101010` a depender de `enable_unsigned`.

```vhdl
EXTEND_BYTE: entity WORK.GENERIC_SIGNAL_EXTENDER(LOWER_EXTEND)
    generic map (
        SOURCE_WIDTH      => 8,
        DESTINATION_WIDTH => 16
    )
    port map (
        enable_unsigned => enable_signed,
        source          => signal_source,
        destination     => signal_destination
    );
```

### Extensão superior

Extende um sinal menor em outro maior, preenchendo com sinal lógico baixo a direita. Ex: de `10101010` para `1010101000000000`.

```vhdl
EXTEND_HALFWORD: entity WORK.GENERIC_SIGNAL_EXTENDER(LOGICAL_UPPER)
    generic map (
        SOURCE_WIDTH      => 8,
        DESTINATION_WIDTH => 16
    )
    port map (
        source          => signal_source,
        destination     => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Extensor de Sinal](/images/reference/entities/generic_signal_extender_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_SIGNAL_EXTENDER.py" target="blank"><Badge type="tip" text="test_GENERIC_SIGNAL_EXTENDER.py &boxbox;" /></a>

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_generic_signal_extender_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Extensor de Sinal](/images/reference/entities/tb_generic_signal_extender_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
