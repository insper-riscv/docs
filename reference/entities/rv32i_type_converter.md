---
outline: 2
---

# Conversor de Tipo

## Topologia

![alt text](/public/images/reference/report_components/rv32i_type_converter.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `XLEN`

## Interface de portas

### `select_function` <Badge type="success" text="INPUT" />

Entrada do vetor de seleção do tipo de vetor de dados para conversão.

- Tipo: `std_logic_vector`
- Largura: `3`

### `source` <Badge type="success" text="INPUT" />

Entrada do vetor de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída do vetor de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Usagem

### Saída da RAM

```vhdl
DATA_IN : entity WORK.RV32I_TYPE_CONVERTER
    port map (
        select_type => select_function,
        source      => source_data_in,
        destination => destination_data_in
    );
```

### Entrada da RAM
```vhdl
DATA_OUT : entity WORK.RV32I_TYPE_CONVERTER
    port map (
        select_type => "1" & select_function(1 downto 0), -- Aways zero-extended
        source      => source_data_out,
        destination => destination_data_out
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Conversor de Tipo](/images/reference/entities/rv32i_type_converter_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_rv32i_type_converter_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Controlador da ULA](/images/reference/entities/tb_rv32i_type_converter_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
