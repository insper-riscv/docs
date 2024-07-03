---
outline: 2
---

# EX - Executa

## Topologia

![alt text](/public/images/reference/report_components/cpu_stage_ex.drawio.svg)

## Interface genérica

### `GENERATE_REGISTERS` <Badge type="neutral" text="GENERIC" />

Define geração de registradores de pipeline.

- Tipo: `boolean `
- Padrão: `TRUE`

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

### `forward` <Badge type="success" text="INPUT" />

Entrada de registro que contém dados encaminhados das etapas WB e MEM.

- Tipo: `t_FORWARD_EXECUTION`

### `source` <Badge type="success" text="INPUT" />

Entrada de registro que contém os dados vindos da etapa ID do pipeline.

- Tipo: `t_SIGNALS_ID_EX`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída de registro que contém os dados vindos da etapa EX do pipeline.

- Tipo: `t_SIGNALS_EX_MEM`

### `select_source_1` <Badge type="danger" text="OUTPUT" />

Endereço do registrador primário do banco de registradores.

- Tipo: `t_REGISTER`

### `select_source_2` <Badge type="danger" text="OUTPUT" />

Endereço do registrador secundário do banco de registradores.

- Tipo: `t_REGISTER`

## Usagem

```vhdl
EXECUTE : entity WORK.CPU_STAGE_EX(RV32I)
    port map (
        clock           => clock,
        clear           => clear OR (flag_hazzard OR (flag_stall AND control_if.enable_stall)),
        enable          => enable,
        forward         => stage_ex_forward_execution,
        source          => signals_id_ex,
        select_source_1 => stage_ex_select_source_1,
        select_source_2 => stage_ex_select_source_2,
        destination     => signals_ex_mem
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Decodifica Instrução](/images/reference/entities/stage_ex_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_stage_ex_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Decodifica Instrução](/images/reference/entities/tb_stage_ex_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
