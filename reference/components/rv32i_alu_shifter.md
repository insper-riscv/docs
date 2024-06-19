---
outline: 2
---

# Deslocador da ULA

## Topologia

![alt text](/public/images/reference/report_components/rv32i_alu_shifter.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `XLEN`

### `SHAMT_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura do shamt.

- Tipo: `natural`
- Padrão: `5`

## Interface de portas

### `select_function` <Badge type="success" text="INPUT" />

Entrada do vetor de seleção da operação a ser realizada no deslocador.

- Tipo: `std_logic_vector`
- Largura: variável `4`

### `shamt` <Badge type="success" text="INPUT" />

Entrada do vetor de shamt.

- Tipo: `std_logic_vector`
- Largura: variável `(SHAMT_WIDTH - 1) downto 0`

### `source` <Badge type="success" text="INPUT" />

Entrada do vetor de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída do vetor de dados.

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
