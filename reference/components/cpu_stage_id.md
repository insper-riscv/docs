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

::: danger TO DO

Work in progress.

:::

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Decodifica Instrução](/images/reference/components/cpu_stage_id_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_stage_id_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Decodifica Instrução](/images/reference/components/tb_stage_id_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
