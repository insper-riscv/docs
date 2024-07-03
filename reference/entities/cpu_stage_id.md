---
outline: 2
---

# ID - Decodifica Instrução

## Topologia

![alt text](/public/images/reference/report_components/cpu_stage_id.drawio.svg)

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

### `enable_destination` <Badge type="success" text="INPUT" />

Entrada do sinal que ativa o banco de registradores.

- Tipo: `std_logic`

### `select_destination` <Badge type="success" text="INPUT" />

Endereço do registrador de destino da etapa WB.

- Tipo: `t_REGISTER`

### `data_destination` <Badge type="success" text="INPUT" />

Valor a ser armazenado no registrador de destino da etapa WB.

- Tipo: `t_DATA`

### `forward` <Badge type="success" text="INPUT" />

Entrada de registro que contém dados encaminhados da etapa MEM.

- Tipo: `t_FORWARD_BRANCH`

### `source` <Badge type="success" text="INPUT" />

Entrada de registro que contém os dados vindos da etapa IF do pipeline.

- Tipo: `t_SIGNALS_IF_ID`

### `address_jump` <Badge type="danger" text="OUTPUT" />

Saída de dados que contém o endereço para desvio na memória ROM.

- Tipo: `t_DATA`

### `control_if` <Badge type="danger" text="OUTPUT" />

Saída de registro que contém os sinais de controle da etapa IF.

- Tipo: `t_CONTROL_IF`

### `signals_ex` <Badge type="danger" text="OUTPUT" />

Saída de registro que contém os dados vindos da etapa ID do pipeline.

- Tipo: `t_SIGNALS_ID_EX`

## Usagem

```vhdl
INSTRUCTION_DECODE : entity WORK.CPU_STAGE_ID(RV32I)
    generic map (
        QUARTUS_MEMORY => QUARTUS_MEMORY
    )
    port map (
        clock                => clock,
        clear                => NOT flag_stall,
        enable               => NOT (flag_hazzard OR (flag_stall AND control_if.enable_stall)),
        enable_destination   => stage_wb_enable_destination,
        select_destination   => stage_wb_select_destination,
        data_destination     => stage_wb_data_destination,
        forward              => stage_id_forward_branch,
        source               => signals_if_id,
        address_jump         => stage_id_address_jump,
        control_if           => control_if,
        signals_ex           => signals_id_ex
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Decodifica Instrução](/images/reference/entities/cpu_stage_id_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_stage_id_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Decodifica Instrução](/images/reference/entities/tb_stage_id_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
