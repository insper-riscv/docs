---
outline: 2
---

# _Carry Lookahead_

## Topologia

![alt text](/public/images/reference/report_components/generic_carry_lookahead.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `8`

## Interface de portas

::: danger TO DO

to do

:::

## Usagem

```vhdl
CARRY_LOOKAHEAD : entity WORK.GENERIC_CARRY_LOOKAHEAD
    generic map (
        DATA_WIDTH => DATA_WIDTH - 1
    )
    port map(
        carry_in        => '0',
        carry_generate  => source_and((DATA_WIDTH - 2) downto 0),
        carry_propagate => half_add((DATA_WIDTH - 2) downto 0),
        carry_out       => carry_out
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
