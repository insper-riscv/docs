---
outline: 2
---

# Unidade de Desvio

## Topologia

![alt text](/public/images/reference/report_components/module_branch_unit.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `XLEN`

## Interface de portas

### `selector` <Badge type="success" text="INPUT" />

Entrada do sinal que seleciona o endereço da memória ROM a ser acessado durante um desvio.

- Tipo: `std_logic`

### `source_program` <Badge type="success" text="INPUT" />

Entrada do valor do PC.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_immediate` <Badge type="success" text="INPUT" />

Entrada do valor do Imediato.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_register` <Badge type="success" text="INPUT" />

Entrada do valor vindo do banco de registradores.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída do valor atual do endereço para desvio.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Usagem

```vhdl
BRANCH_UNIT: entity WORK.MODULE_BRANCH_UNIT(RV32I)
    port map (
        selector         => control_id.select_jump,
        source_program   => address_out,
        source_immediate => data_immediate,
        source_register  => forward_source_1,
        destination      => address_jump
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
