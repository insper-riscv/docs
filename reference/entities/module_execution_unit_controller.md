---
outline: 2
---

# Controlador da Unidade de Execução

## Topologia

![alt text](/public/images/reference/report_components/module_execution_unit_controller.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `4`

### `OPCODE_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura do opcode da instrução.

- Tipo: `natural`
- Padrão: `OPCODE_WIDTH`

## Interface de portas

### `opcode` <Badge type="success" text="INPUT" />

Entrada do opcode da instrução.

- Tipo: `std_logic_vector`
- Largura: `(OPCODE_WIDTH - 1) downto 0`

### `funct_3` <Badge type="success" text="INPUT" />

Entrada da funct_3 da instrução.

- Tipo: `std_logic_vector`
- Largura: `3`

### `funct_7` <Badge type="success" text="INPUT" />

Entrada da funct_7 da instrução.

- Tipo: `std_logic_vector`
- Largura: `7`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída do seletor da ULA.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Usagem

::: danger TO DO

Work in progress.

:::

## Diagrama RTL

<pan-container>

![Diagrama de RTL da Unidade de Controle da ULA](/images/reference/entities/module_execution_unit_controller_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_module_execution_unit_controller_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 da Controlador da Unidade de Execução](/images/reference/entities/tb_module_execution_unit_controller_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
