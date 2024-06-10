---
outline: 2
---

# Debounce

## Topologia

<pan-container selector=".mermaid">

<!--@include: @<!--@include: @/.includes/generic_debounce-topology.md-->

</pan-container>

## Interface de portas

### `clock` <Badge type="success" text="INPUT" />

Entrada do sinal de clock.

- Tipo: `std_logic`

### `clear` <Badge type="success" text="INPUT" />

Entrada que reseta o debounce.

- Tipo: `std_logic`
- Padrão: `'0'`

### `source` <Badge type="success" text="INPUT" />

::: danger TO DO

```md
[DESCRIÇÃO]

- Tipo: `std_logic`
```

:::

### `state` <Badge type="danger" text="OUTPUT" />

::: danger TO DO

```md
[DESCRIÇÃO]

- Tipo: `std_logic`
- Padrão: `'0'`
```

:::

## Usagem

```vhdl
DEBOUNCE_1 : entity WORK.GENERIC_DEBOUNCE
    Port map (
        clock  => clock,
        clear  => signal_clear,
        source => signal_source,
        state  => signal_state
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do debounce](/images/reference/components/generic_debounce_netlist.svg){.w-full .dark-invert}

### Dependências

- `EDGE_DETECTOR`: [Detector de borda](./generic_edge_detector.html)
- `STATE_REGISTER`: [Flip Flop](./generic_flip_flop.html)

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_generic_debounce_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do debounce](/images/reference/components/tb_generic_debounce_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
