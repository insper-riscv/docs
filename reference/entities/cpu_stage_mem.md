---
outline: 2
---

# MEM - Acessa a Memória

## Topologia

![alt text](/public/images/reference/report_components/cpu_stage_mem.drawio.svg)

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

### `data_memory_in` <Badge type="success" text="INPUT" />

Entrada de dados que contém o valor vindo da memória RAM.

- Tipo: `t_DATA`

### `source` <Badge type="success" text="INPUT" />

Entrada de registro que contém os dados vindos da etapa EX do pipeline.

- Tipo: `t_SIGNALS_EX_MEM`

### `control_memory` <Badge type="danger" text="OUTPUT" />

Saída de registro que contém os sinais de controle da memória RAM.

- Tipo: `t_CONTROL_MEM`

### `address_memory` <Badge type="danger" text="OUTPUT" />

Saída de dados que contém o endereço da memória RAM sendo acessado para leitura/escrita.

- Tipo: `t_DATA`

### `data_memory_out` <Badge type="danger" text="OUTPUT" />

Saída de dados que contém o valor a ser armazenado na memória RAM.

- Tipo: `t_DATA`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída de registro que contém os dados vindos da etapa MEM do pipeline.

- Tipo: `t_SIGNALS_MEM_WB`

## Usagem

```vhdl
MEMORY_ACCESS : entity WORK.CPU_STAGE_MEM(RV32I)
    port map (
        clock           => clock,
        clear           => clear,
        enable          => enable,
        source          => signals_ex_mem,
        data_memory_in  => data_memory_in,
        control_memory  => stage_mem_control_memory,
        address_memory  => address_memory,
        data_memory_out => data_memory_out,
        destination     => signals_mem_wb
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Decodifica Instrução](/images/reference/entities/stage_mem_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_stage_mem_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Decodifica Instrução](/images/reference/entities/tb_stage_mem_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
