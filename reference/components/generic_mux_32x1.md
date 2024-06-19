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

::: warning ATENÇÃO!

to do

:::

## Diagrama RTL

::: warning ATENÇÃO!

to do

:::

## Casos de teste

::: warning ATENÇÃO!

to do

:::
