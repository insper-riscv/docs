---
outline: 2
---

# IF - Busca Instrução

## Topologia

![alt text](/public/images/reference/report_components/cpu_stage_if.drawio.svg)

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

### `source` <Badge type="success" text="INPUT" />

Entrada de registro que contém os sinais de controle da etapa IF vindos da etapa ID.

- Tipo: `t_CONTROL_IF`

### `address_jump` <Badge type="success" text="INPUT" />

Entrada de dados que contém o endereço para desvio na memória ROM vindo da etapa ID.

- Tipo: `t_DATA`

### `address_data` <Badge type="danger" text="OUTPUT" />

Saída de dados que contém o endereço da próxima instrução a ser executada.

- Tipo: `t_DATA`

## Usagem

```vhdl
INSTRUCTION_FETCH : entity WORK.CPU_STAGE_IF(RV32I)
    port map (
        clock           => clock,
        clear           => clear,
        enable          => NOT (flag_hazzard OR (flag_stall AND control_if.enable_stall)),
        source          => control_if,
        address_jump    => stage_id_address_jump,
        address_program => signals_if_id.address_program
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Busca Instrução](/images/reference/entities/stage_if_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_stage_if_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Busca Instrução](/images/reference/entities/tb_stage_if_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
