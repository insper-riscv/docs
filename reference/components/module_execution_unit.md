---
outline: 2
---

# Unidade de Execução

## Topologia

![alt text](/public/images/reference/report_components/module_execution_unit.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `XLEN`

### `FUNCTION_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura da função usada como seletor.

- Tipo: `natural`
- Padrão: `4`

## Interface de portas

### `select_source_1` <Badge type="success" text="INPUT" />

Entrada do seletor primário do valor a ser usado pela ULA.

- Tipo: `std_logic_vector`
- Largura: `2`

### `select_source_2` <Badge type="success" text="INPUT" />

Entrada do seletor secundário do valor a ser usado pela ULA.

- Tipo: `std_logic_vector`
- Largura: `2`

### `select_function` <Badge type="success" text="INPUT" />

Entrada do vetor de seleção da operação a ser realizada na ULA.

- Tipo: `std_logic_vector`
- Largura: variável `(FUNCTION_WIDTH - 1) downto 0`

### `address_program` <Badge type="success" text="INPUT" />

Entrada do valor do PC.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_1` <Badge type="success" text="INPUT" />

Entrada do valor do registrador primário.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_2` <Badge type="success" text="INPUT" />

Entrada do valor do registrador secundário.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `immediate` <Badge type="success" text="INPUT" />

Entrada do valor do Imediato.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `overflow` <Badge type="danger" text="OUTPUT" />

Saída de sinal que indica se houve overflow na ULA.

- Tipo: `std_logic`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída da ULA.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Usagem

::: danger TO DO

Work in progress.

:::

## Diagrama RTL

<pan-container>

![Diagrama de RTL da Unidade de Execução](/images/reference/components/module_execution_unit_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_module_execution_unit_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 da Controlador da Unidade de Execução/images/reference/components/tb_module_execution_unit_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
