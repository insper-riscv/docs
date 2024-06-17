---
outline: 2
---

# Nome Componente

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
testes baseada em uma versão anterior da ROM que não tinha clock, o que causou problemas na hora de testar com o quartus.
Para resolver um dos problemas, que ocorria no jump, foi adicionado um registrador (QUARTUS_DELAY) na etapa ID que separa o 
valor do clock depois do registrador da pipeline da unidade de desvio, usando de um sinal (address_out). Isso foi uma correção 
temporária que deve ser removida com a integração do clock, ou adaptada. Vale mencionar que o teste da FPGA, mesmo com o 
registrador extra, ainda dava problema por faltar um flush no endereço entrando na ROM no clock que o flush é relizado.

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

::: warning ATENÇÃO!

to do

:::

## Diagrama RTL

::: warning ATENÇÃO!

to do

:::

## Casos de teste

::: warning ATENÇÃO!

to do

:::
