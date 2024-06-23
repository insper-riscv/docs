---
outline: 2
---

# Contador de Programa

## Topologia

![alt text](/public/images/reference/report_components/module_program_counter.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `XLEN`

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

### `selector` <Badge type="success" text="INPUT" />

Entrada do sinal que seleciona o endereço da memória ROM a ser acessado.

- Tipo: `std_logic`

### `source` <Badge type="success" text="INPUT" />

Entrada do vetor de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída do valor atual do PC.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Usagem

::: danger TO DO

Work in progress.

:::

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Contador de Programa](/images/reference/entities/module_program_counter_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_module_program_counter_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 da Controlador da Unidade de Execução/images/reference/entities/tb_module_program_counter_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
