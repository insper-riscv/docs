---
outline: 2
---

# Unidade de Controle de _Hazards_

## Topologia

![alt text](/public/images/reference/report_components/cpu_hazard_control_unit.drawio.svg)

## Interface de portas

### `stage_id_select_source_1` <Badge type="success" text="INPUT" />

Endereço do registrador primário da etapa ID.

- Tipo: `t_REGISTER`

### `stage_id_select_source_2` <Badge type="success" text="INPUT" />

Endereço do registrador secundário da etapa ID.

- Tipo: `t_REGISTER`

### `stage_ex_select_destination` <Badge type="success" text="INPUT" />

Endereço do registrador de destino da etapa EX.

- Tipo: `t_REGISTER`

### `stage_ex_enable_destination` <Badge type="success" text="INPUT" />

Sinal que ativa escrita no banco de registradores da etapa EX.

- Tipo: `std_logic`

### `stage_ex_enable_read` <Badge type="success" text="INPUT" />

Sinal que ativa leitura da memória RAM da etapa EX.

- Tipo: `std_logic`

### `stage_mem_enable_read` <Badge type="success" text="INPUT" />

Sinal que ativa leitura da memória RAM da etapa MEM.

- Tipo: `std_logic`

### `stage_mem_select_destination` <Badge type="success" text="INPUT" />

Endereço do registrador de destino da etapa MEM.

- Tipo: `t_REGISTER`

### `stall_branch` <Badge type="danger" text="OUTPUT" />

Saída de sinal que ativa stall quando há desvio.

- Tipo: `std_logic`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída de sinal que ativa stall.

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
