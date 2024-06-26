---
outline: 2
---

# Somador

## Topologia

![alt text](/public/images/reference/report_components/generic_adder.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `8`

### `DEFAULT_SOURCE_2` <Badge type="neutral" text="GENERIC" />

Valor padrão de incremento. Dispensa necessidade de atribuir entrada `source_2`.

- Tipo: `integer`
- Padrão: `1`

## Interface de portas

### `source_1` <Badge type="success" text="INPUT" />

Entrada primária de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_2` <Badge type="success" text="INPUT" />

Entrada secundária de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`
- Padrão: `to_signed(DEFAULT_SOURCE_2, DATA_WIDTH)`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída de dados.

- Tipo: `std_logic_vector`
- Largura: `(DATA_WIDTH - 1) downto 0`

## Usagem

### Incremento constante

```vhdl
CONSTANT_ADDER : entity WORK.GENERIC_ADDER
    generic map (
        DATA_WIDTH_      => 32,
        DEFAULT_SOURCE_2 => 1
    )
    port map (
        source_1    => signal_source_1,
        destination => signal_destination
    );
```

### Somador

```vhdl
ADDER : entity WORK.GENERIC_ADDER
    generic map (
        DATA_WIDTH => 32
    )
    port map (
        source_1    => signal_source_1,
        source_2    => signal_source_2,
        destination => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do somador](/images/reference/entities/generic_adder_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

### Caso 1 <Badge type="info" text="tb_GENERIC_ADDER_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do somador](/images/reference/entities/tb_generic_adder_case_1.svg){.w-full .dark-invert}

</pan-container>
