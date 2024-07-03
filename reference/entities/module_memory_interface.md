---
outline: 2
---

# Interface de Memória

## Topologia

![alt text](/public/images/reference/report_components/module_memory_interface.drawio.svg)

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

### `select_function` <Badge type="success" text="INPUT" />

Entrada do vetor de seleção da operação de bits a ser realizada.

- Tipo: `std_logic_vector`
- Largura: variável `(FUNCTION_WIDTH - 1) downto 0`

### `source_data_in` <Badge type="success" text="INPUT" />

Entrada de dados que contém o valor vindo da memória RAM.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_data_out` <Badge type="success" text="INPUT" />

Entrada de dados que contém o valor a ser armazenado na memória RAM.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `destination_data_in` <Badge type="danger" text="OUTPUT" />

Saída de dados que contém o valor vindo da memória RAM.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `destination_data_out` <Badge type="danger" text="OUTPUT" />

Saída de dados que contém o valor a ser armazenado na memória RAM.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Usagem

```vhdl
MEM_INTERFACE: entity WORK.MODULE_MEMORY_INTERFACE(RV32I)
    generic map (
        FUNCTION_WIDTH => 3,
        DATA_WIDTH     => 32
    )
    port map (
        select_function      => source_0.funct_3,
        source_data_in       => data_memory_in,
        source_data_out      => source_0.data_source_2,
        destination_data_in  => destination.data_memory,
        destination_data_out => data_memory_out
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
