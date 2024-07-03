---
outline: 2
---

# Unidade de Controle

## Topologia

![alt text](/public/images/reference/report_components/module_control_unit.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `XLEN`

### `INSTRUCTION_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetore de instrução.

- Tipo: `natural`
- Padrão: `INSTRUCTION_WIDTH`

## Interface de portas

### `clear` <Badge type="success" text="INPUT" />

Entrada do sinal que limpa o(s) dado(s) do componente.

- Tipo: `std_logic`

### `instruction` <Badge type="success" text="INPUT" />

Entrada da instrução a ser executada.

- Tipo: `std_logic_vector`
- Largura: variável `(INSTRUCTION_WIDTH - 1) downto 0`

### `immediate` <Badge type="danger" text="OUTPUT" />

Saída do valor atual do imediato.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `control_id` <Badge type="danger" text="OUTPUT" />

Saída de registro que contém os sinais de controle da etapa ID.

- Tipo: `t_CONTROL_ID`

### `control_ex` <Badge type="danger" text="OUTPUT" />

Saída de registro que contém os sinais de controle da etapa EX.

- Tipo: `t_CONTROL_EX`

### `control_mem` <Badge type="danger" text="OUTPUT" />

Saída de registro que contém os sinais de controle da etapa MEM.

- Tipo: `t_CONTROL_MEM`

### `control_wb` <Badge type="danger" text="OUTPUT" />

Saída de registro que contém os sinais de controle da etapa WB.

- Tipo: `t_CONTROL_WB`

## Usagem

```vhdl
MODULE_CONTROL_UNIT : entity WORK.MODULE_CONTROL_UNIT(RV32I)
    port map (
        clear       => '0',
        instruction => source_0.data_instruction,
        immediate   => data_immediate,
        control_id  => control_id,
        control_ex  => signals_ex.control_ex,
        control_mem => signals_ex.control_mem,
        control_wb  => signals_ex.control_wb
);
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL da Unidade de Controle](/images/reference/entities/module_control_unit_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_module_control_unit_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 da Unidade de Controle](/images/reference/entities/tb_module_control_unit_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
