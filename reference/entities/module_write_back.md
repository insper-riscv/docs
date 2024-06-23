---
outline: 2
---

# Esctrita de Retorno

## Topologia

![alt text](/public/images/reference/report_components/module_write_back.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `XLEN`

## Interface de portas

### `selector` <Badge type="success" text="INPUT" />

Entrada do seletor do valor do registrador de destino.

- Tipo: `std_logic`

### `source_execution` <Badge type="success" text="INPUT" />

Entrada do valor do registrador de destino vindo da ULA.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_memory` <Badge type="success" text="INPUT" />

Entrada do valor do registrador de destino vindo da memória RAM.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída do valor do registrador destino.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Usagem

::: danger TO DO

Work in progress.

:::

## Diagrama RTL

<pan-container>

![Diagrama de RTL da Esctrita de Retorno](/images/reference/entities/module_write_back_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_module_write_back_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 da Esctrita de Retorno](/images/reference/entities/tb_module_write_back_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
