---
outline: 2
---

# Multiplexador 32x1

## Topologia

![alt text](/public/images/reference/report_components/generic_mux_32x1.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `8`

## Interface de portas

### `source_1` <Badge type="success" text="INPUT" />

Entrada primária de dados. `destination <= source_1` se `selector = '00000'`.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_2` <Badge type="success" text="INPUT" />

Entrada secundária de dados. `destination <= source_1` se `selector = '00001'`.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

.
.
.

### `source_31` <Badge type="success" text="INPUT" />

Entrada 31 de dados. `destination <= source_2` se `selector = '11110'`.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_32` <Badge type="success" text="INPUT" />

Entrada 32 de dados. `destination <= source_2` se `selector = '11111'`.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `selector` <Badge type="success" text="INPUT" />

Seleção do vetor de saída de `destination`.

- tipo: `std_logic_vector`
- largura: `5`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Usagem

```vhdl
MUX_32X1 : entity WORK.GENERIC_MUX_32X1
    generic map (
        DATA_WIDTH => 32
    )
    port map (
        selector    => shamt,
        source_1    => data(0),
        source_2    => data(1),
        source_3    => data(2),
        source_4    => data(3),
        source_5    => data(4),
        source_6    => data(5),
        source_7    => data(6),
        source_8    => data(7),
        source_9    => data(8),
        source_10   => data(9),
        source_11   => data(10),
        source_12   => data(11),
        source_13   => data(12),
        source_14   => data(13),
        source_15   => data(14),
        source_16   => data(15),
        source_17   => data(16),
        source_18   => data(17),
        source_19   => data(18),
        source_20   => data(19),
        source_21   => data(20),
        source_22   => data(21),
        source_23   => data(22),
        source_24   => data(23),
        source_25   => data(24),
        source_26   => data(25),
        source_27   => data(26),
        source_28   => data(27),
        source_29   => data(28),
        source_30   => data(29),
        source_31   => data(30),
        source_32   => data(31),
        destination => destination_auxiliar
    );
```

## Diagrama RTL

::: danger TO DO

to do

:::

## Casos de teste

::: danger TO DO

to do

:::
