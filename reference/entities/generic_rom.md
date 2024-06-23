---
outline: 2
---

# ROM

## Topologia

![alt text](/public/images/reference/report_components/generic_rom.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados `source` e `destination`.

- Tipo: `natural`
- Padrão: `8`

### `ADDRESS_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura do vetor da entrada `address`.

- Tipo: `natural`
- Padrão: `8`

### `ADDRESSABLE_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura do vetor de endereçamento com mapeamento na memória.

- Tipo: `natural`
- Padrão: `7`

::: warning ATENÇÃO!

Deve ser menor ou igual a `ADDRESS_WIDTH`.

:::

## Interface de portas

### `clock` <Badge type="success" text="INPUT" />

Entrada do sinal de clock.

- Tipo: `std_logic`

::: warning ATENÇÃO!

Apesar de o componente ROM ter clock na versão mais recente (2024_1), foi usada uma memória virtual para realização dos
testes baseada em uma versão anterior da ROM que não tinha clock, que está representada no diagrama do TOP_LEVEL do projeto.

:::

### `address` <Badge type="success" text="INPUT" />

Entrada de endereço da memória.

- Tipo: `std_logic_vector`
- Largura: variável `(ADDRESS_WIDTH - 1) downto 0`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída de dados assumindo valor armazenado no endereço em `address`. Caso seja
endereçado um valor fora da largura mapeada assume sinal lógico baixo `"0...0"`

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Usagem

```vhdl
ROM : entity WORK.GENERIC_ROM
    generic map (
        DATA_WIDTH_0      => 32;
        ADDRESS_WIDTH     => 32;
        ADDRESSABLE_WIDTH => 8
    )
    port map (
        source       => signal_source,
        destination  => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL da ROM](/images/reference/entities/generic_rom_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

### Caso 1 <Badge type="info" text="tb_GENERIC_ROM_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 da ROM](/images/reference/entities/tb_generic_rom_case_1.svg){.w-full .dark-invert}

</pan-container>
