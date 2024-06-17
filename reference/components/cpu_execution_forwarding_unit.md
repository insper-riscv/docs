---
outline: 2
---

# Unidade de Encaminhamento de Dados para Execução

## Topologia

![alt text](/public/images/reference/report_components/cpu_execution_forwarding_unit.drawio.svg)

## Interface de portas

### `stage_ex_select_source_1` <Badge type="success" text="INPUT" />

Endereço do registrador primário da etapa EX.

- Tipo: `t_REGISTER`

### `stage_ex_select_source_2` <Badge type="success" text="INPUT" />

Endereço do registrador secundário da etapa EX.

- Tipo: `t_REGISTER`

### `stage_mem_select_destination` <Badge type="success" text="INPUT" />

Endereço do registrador de destino da etapa MEM.

- Tipo: `t_REGISTER`

### `stage_mem_enable_destination` <Badge type="success" text="INPUT" />

Sinal que ativa escrita no banco de registradores da etapa MEM.

- Tipo: `std_logic`

### `stage_wb_select_destination` <Badge type="success" text="INPUT" />

Endereço do registrador de destino da etapa WB.

- Tipo: `t_REGISTER`

### `stage_wb_enable_destination` <Badge type="success" text="INPUT" />

Sinal que ativa escrita no banco de registradores da etapa WB.

- Tipo: `std_logic`

### `select_source_1` <Badge type="danger" text="OUTPUT" />

Saída de sinal que ativa o encaminhamento de dados do registrador de destino da etapa MEM 
ou da etapa WB para o registrador primário da etapa EX.

- Tipo: `std_logic`

### `select_source_2` <Badge type="danger" text="OUTPUT" />

Saída de sinal que ativa o encaminhamento de dados do registrador de destino da etapa MEM 
ou da etapa WB para o registrador secundário da etapa EX.

- Tipo: `std_logic`

::: warning ATENÇÃO!

to do

:::

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
