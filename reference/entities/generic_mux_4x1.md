---
outline: 2
---

# Multiplexador 4x1

## Topologia

![alt text](/public/images/reference/report_components/generic_mux_4x1.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `8`

## Interface de portas

### `source_1` <Badge type="success" text="INPUT" />

Entrada primária de dados. `destination <= source_1` se `selector = "00"`.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_2` <Badge type="success" text="INPUT" />

Entrada secundária de dados. `destination <= source_2` se `selector = "01"`.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_3` <Badge type="success" text="INPUT" />

Entrada terciária de dados. `destination <= source_3` se `selector = "10"`.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_4` <Badge type="success" text="INPUT" />

Entrada quaternária de dados. `destination <= source_4` se `selector = "11"`.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `selector` <Badge type="success" text="INPUT" />

Seleção do vetor de saída de `destination`.

- tipo: `std_logic`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Usagem

```vhdl
MUX_1 : entity WORK.GENERIC_MUX_4X1
    generic map (
        DATA_WIDTH_0 => 32
    )
    port map (
        source_1    => signal_source_1,
        source_2    => signal_source_2,
        source_3    => signal_source_3,
        source_4    => signal_source_4,
        selector    => signal_selector,
        destination => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do mux 4x1](/images/reference/entities/generic_mux_4x1_netlist.svg){.w-full .dark-invert}

### Dependências

- `MUX_1`: [Multiplexador 2x1](./generic_mux_2x1.html)
- `MUX_2`: [Multiplexador 2x1](./generic_mux_2x1.html)

</pan-container>

## Casos de teste

### Caso 1 <Badge type="info" text="tb_generic_mux_4x1_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Flip Flop](/images/reference/entities/tb_generic_mux_4x1_case_1.svg){.w-full .dark-invert}

</pan-container>
