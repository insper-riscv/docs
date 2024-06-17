---
outline: 2
---

# Unidade de Encaminhamento de Dados para Desvio

## Topologia

![alt text](/public/images/reference/report_components/cpu_branch_forwarding_unit.drawio.svg)

## Interface de portas

### `stage_id_select_source_1` <Badge type="success" text="INPUT" />

Endereço do registrador primário da etapa ID.

- Tipo: `t_REGISTER`

### `stage_id_select_source_2` <Badge type="success" text="INPUT" />

Endereço do registrador secundário da etapa ID.

- Tipo: `t_REGISTER`

### `stage_mem_select_destination` <Badge type="success" text="INPUT" />

Endereço do registrador de destino da etapa MEM.

- Tipo: `t_REGISTER`

### `stage_mem_enable_destination` <Badge type="success" text="INPUT" />

Sinal que ativa escrita no banco de registradores da etapa MEM.

- Tipo: `std_logic`

### `select_source_1` <Badge type="danger" text="OUTPUT" />

Saída de sinal que ativa o encaminhamento de dados do registrador de destino da etapa MEM 
para o registrador primário da etapa ID.

- Tipo: `std_logic`

### `select_source_2` <Badge type="danger" text="OUTPUT" />

Saída de sinal que ativa o encaminhamento de dados do registrador de destino da etapa MEM 
para o registrador secundário da etapa ID.

- Tipo: `std_logic`

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
