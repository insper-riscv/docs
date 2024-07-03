---
outline: 2
---

# Unidade de Comparação para Desvio

## Topologia

![alt text](/public/images/reference/report_components/module_branch_compare_unit.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `XLEN`

### `FUNCTION_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura da função usada como seletor.

- Tipo: `natural`
- Padrão: `FUNCT3_WIDTH + 1`

## Interface de portas

### `enable` <Badge type="success" text="INPUT" />

Entrada do sinal que ativa o componente.

- Tipo: `std_logic`

### `select_function` <Badge type="success" text="INPUT" />

Entrada do vetor de seleção da operação de comparação a ser realizada.

- Tipo: `std_logic_vector`
- Largura: variável `(FUNCTION_WIDTH - 1) downto 0`

### `source_1` <Badge type="success" text="INPUT" />

Entrada primária de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_2` <Badge type="success" text="INPUT" />

Entrada secundária de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `forward` <Badge type="success" text="INPUT" />

Entrada de registro que contém dados encaminhados da etapa MEM.

- Tipo: `t_FORWARD_BRANCH`

### `data_source_1` <Badge type="danger" text="OUTPUT" />

Saída de valor de registrador primária do banco de registradores para JALR.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída de sinal que ativa desvio.

- Tipo: `std_logic`

## Usagem

```vhdl
BRANCH_COMPARE_UNIT: entity WORK.MODULE_BRANCH_COMPARE_UNIT(RV32I)
    port map (
        enable             => control_id.enable_branch,
        select_function    => "0" & WORK.RV32I.to_INSTRUCTION(source_0.data_instruction).funct_3,
        source_1           => data_source_1,
        source_2           => data_source_2,
        forward            => forward,
        data_source_1      => forward_source_1,
        destination        => enable_branch
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
