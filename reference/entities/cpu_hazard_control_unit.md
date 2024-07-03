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

```vhdl
CONTROL_HAZZARD_UNIT : entity WORK.CPU_HAZZARD_CONTROL_UNIT
    port map (
        stage_id_select_source_1     => signals_id_ex.select_source_1,
        stage_id_select_source_2     => signals_id_ex.select_source_2,
        stage_ex_enable_read         => signals_ex_mem.control_mem.enable_read,
        stage_ex_enable_destination  => signals_ex_mem.control_wb.enable_destination,
        stage_ex_select_destination  => signals_ex_mem.select_destination,
        stage_mem_enable_read        => stage_mem_control_memory.enable_read,
        stage_mem_select_destination => signals_mem_wb.select_destination,
        stall_branch                 => flag_stall,
        destination                  => flag_hazzard
    );
```

## Diagrama RTL

::: danger TO DO

to do

:::

## Casos de teste

::: danger TO DO

to do

:::
