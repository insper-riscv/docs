---
outline: 2
---

# WB - Escreve o Retorno

## Topologia

![alt text](/public/images/reference/report_components/cpu_stage_wb.drawio.svg)

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

### `source` <Badge type="success" text="INPUT" />

Entrada de registro que contém os dados vindos da etapa MEM do pipeline.

- Tipo: `t_SIGNALS_MEM_WB`

### `enable_destination` <Badge type="danger" text="OUTPUT" />

Saída de sinal que ativa escrita no banco de registradores.

- Tipo: `std_logic`

### `select_destination` <Badge type="danger" text="OUTPUT" />

Saída do endereço do registrador de destino.

- Tipo: `t_REGISTER`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída do valor a ser armazenado no registrador de destino.

- Tipo: `t_DATA`

## Usagem

```vhdl
WRITE_BACK : entity WORK.CPU_STAGE_WB(RV32I)
    port map (
        clock              => clock,
        clear              => clear,
        enable             => enable,
        enable_destination => stage_wb_enable_destination,
        select_destination => stage_wb_select_destination,
        source             => signals_mem_wb,
        destination        => stage_wb_data_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Escreve o Retorno](/images/reference/entities/stage_wb_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_stage_wb_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Escreve o Retorno](/images/reference/entities/tb_stage_wb_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
