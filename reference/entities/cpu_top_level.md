---
outline: 2
---

# _TOP LEVEL_ (CPU)

## Topologia

![alt text](/public/images/reference/report_components/cpu_top_level.drawio.svg)

## Interface de portas

### `clock` <Badge type="success" text="INPUT" />

Entrada do sinal de clock.

- Tipo: `std_logic`

### `clear` <Badge type="success" text="INPUT" />

Entrada do sinal que limpa o(s) dado(s) do componente.

- Tipo: `std_logic`

### `enable` <Badge type="success" text="INPUT" />

Entrada do sinal que ativa o componente.

- Tipo: `std_logic`

### `data_program` <Badge type="success" text="INPUT" />

Entrada da instrução vinda da memória ROM.

- Tipo: `t_PROGRAM`

### `data_memory_in` <Badge type="success" text="INPUT" />

Entrada do valor vindo da memória RAM.

- Tipo: `t_DATA`

### `memory_read` <Badge type="danger" text="OUTPUT" />

Saída de sinal que ativa a leitura da memória RAM.

- Tipo: `std_logic`

### `memory_write` <Badge type="danger" text="OUTPUT" />

Saída de sinal que ativa a escrita da memória RAM.

- Tipo: `std_logic`

### `data_memory_out` <Badge type="danger" text="OUTPUT" />

Saída de valor a ser armazenado na memória RAM.

- Tipo: `t_DATA`

### `address_program` <Badge type="danger" text="OUTPUT" />

Saída do endereço a ser acessado na memória ROM.

- Tipo: `t_DATA`

### `address_memory` <Badge type="danger" text="OUTPUT" />

Saída do endereço a ser acessado na memória RAM.

- Tipo: `t_DATA`

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
