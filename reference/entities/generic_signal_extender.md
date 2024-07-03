---
outline: 2
---

# Extensor de Sinal

## Topologia

![alt text](/public/images/reference/report_components/generic_signal_extender.drawio.svg)

## Interface genérica

### `SOURCE_WIDTH` <Badge type="neutral" text="GENERIC" />
- Tipo: `natural`
- Padrão: `4`

### `DESTINATION_WIDTH` <Badge type="neutral" text="GENERIC" />
- Tipo: `natural`
- Padrão: `8`

## Interface de portas

### `source` <Badge type="success" text="INPUT" />

Entrada do vetor de dados.

- Tipo: `std_logic_vector`
- Largura: `(SOURCE_WIDTH - 1) downto 0`

### `enable_unsigned` <Badge type="success" text="INPUT" />

Entrada do sinal que indica se o vetor de dados tem ou não sinal.

- Tipo: `std_logic`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída do vetor de dados com sinal estendido.

- Tipo: `std_logic_vector`
- Largura: `(DESTINATION_WIDTH - 1) downto 0`

## Usagem

### Extensão de Byte

```vhdl
EXTEND_BYTE: entity WORK.GENERIC_SIGNAL_EXTENDER
    generic map (
        SOURCE_WIDTH      => 8,
        DESTINATION_WIDTH => WORK.RV32I.XLEN
    )
    port map (
        enable_unsigned => select_type(2),
        source          => source(7 downto 0),
        destination     => destination_byte
    );
```

### Extensão de Meia Palavra

```vhdl
EXTEND_HALFWORD: entity WORK.GENERIC_SIGNAL_EXTENDER
    generic map (
        SOURCE_WIDTH      => 16,
        DESTINATION_WIDTH => WORK.RV32I.XLEN
    )
    port map (
        enable_unsigned => select_type(2),
        source          => source(15 downto 0),
        destination     => destination_halfword
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Extensor de Sinal](/images/reference/entities/generic_signal_extender_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_generic_signal_extender_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Extensor de Sinal](/images/reference/entities/tb_generic_signal_extender_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
