---
outline: 2
---

# Registrador

## Topologia

![alt text](/public/images/reference/report_components/generic_register.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados `source` e `destination`.

- Tipo: `natural`
- Padrão: `8`

## Interface de portas

### `clock` <Badge type="success" text="INPUT" />

Entrada do sinal de clock.

- Tipo: `std_logic`

### `clear` <Badge type="success" text="INPUT" />

Entrada do sinal que limpa o valor armazenado no registrador.

- Tipo: `std_logic`

### `enable` <Badge type="success" text="INPUT" />

Entrada do sinal que ativa o registrador.

- Tipo: `std_logic`

### `source` <Badge type="success" text="INPUT" />

Entrada do vetor de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída do vetor de dados armazenado no registrador.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`
- Padrão: `"0...0"`

## Usagem

```vhdl
REGISTER_1 : entity WORK.GENERIC_REGISTER
    generic map (
        DATA_WIDTH => 32
    )
    port map (
        clock       => clock,
        clear       => signal_clear,
        enable      => signal_enable,
        source      => signal_source,
        destination => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Registrador](/images/reference/entities/generic_register_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

### Caso 1 <Badge type="info" text="tb_GENERIC_REGISTER_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Registrador](/images/reference/entities/tb_generic_register_case_1.svg){.w-full .dark-invert}

</pan-container>
