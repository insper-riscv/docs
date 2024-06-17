---
outline: 2
---

# Comparador

## Topologia

![alt text](/public/images/reference/report_components/generic_comparator.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de entrada e saída de dados.

- Tipo: `natural`
- Padrão: `8`

## Interface de portas

### `source_1` <Badge type="success" text="INPUT" />

Entrada primária de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_2` <Badge type="success" text="INPUT" />

Entrada secundária de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `flag_equal` <Badge type="danger" text="OUTPUT" />

Saída de sinal que indica se o valor da entrada primária é igual ao valor da entrada secundária.

- Tipo: `std_logic`

### `flag_less` <Badge type="danger" text="OUTPUT" />

Saída de sinal que indica se o valor da entrada primária é menor do que o valor da entrada secundária.

- Tipo: `std_logic`

### `flag_greater` <Badge type="danger" text="OUTPUT" />

Saída de sinal que indica se o valor da entrada primária é maior do que o valor da entrada secundária.

- Tipo: `std_logic`

## Usagem

::: danger TO DO

Usagem

:::

## Diagrama RTL

<pan-container>

::: danger TO DO

Diagrama RTL

:::

</pan-container>

## Casos de teste

::: danger TO DO

Casos de teste

:::

### Caso 1 <Badge type="info" text="tb_GENERIC_COMPARATOR_case_1" />

<pan-container>
Forma de onda:

::: danger TO DO

Forma de onda

:::
</pan-container>
