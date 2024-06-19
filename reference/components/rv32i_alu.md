---
outline: 2
---

# Unidade Lógia Aritmética

## Topologia

![alt text](/public/images/reference/report_components/rv32i_alu.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `XLEN`

## Interface de portas

### `select_function` <Badge type="success" text="INPUT" />

Entrada do vetor de seleção da operação a ser realizada na ULA.

- Tipo: `std_logic_vector`
- Largura: variável `4`

### `source_1` <Badge type="success" text="INPUT" />

Entrada primária de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `source_2` <Badge type="success" text="INPUT" />

Entrada secundária de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `overflow` <Badge type="danger" text="OUTPUT" />

Saída de sinal que indica se houve overflow.

- Tipo: `std_logic`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída do vetor de dados.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Diagrama RTL

<pan-container :max-zoom="8">

![Diagrama de RTL da Unidade Lógia Aritmética](/images/reference/components/rv32i_alu_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_rv32i_alu_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Unidade Lógia Aritmética](/images/reference/components/tb_rv32i_alu_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
