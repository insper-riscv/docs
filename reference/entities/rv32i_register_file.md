---
outline: 2
---

# Arquivo de registradores

## Topologia

![alt text](/public/images/reference/report_components/rv32i_register_file.drawio.svg)

## Interface genérica

### `DATA_WIDTH`

Largura dos vetores de entrada e saída de dados.

- tipo: `natural`
- padrão: `XLEN`

### `ADDRESS_WIDTH`

Largura dos vetores de entrada e saída de endereços.

- tipo: `natural`
- padrão: `32`

## Interface de portas

### `clock` <Badge type="success" text="INPUT" />

Entrada do sinal de clock.

- Tipo: `std_logic`

### `enable` <Badge type="success" text="INPUT" />

Entrada de sinal que ativa uso do banco de registradores para armazenar valor.

- tipo: `std_logic`

### `address_destination` <Badge type="success" text="INPUT" />

Entrada de endereço de registrador para armazenar valor.

- tipo: `std_logic_vector((ADDRESS_WIDTH - 1) downto 0)`

### `address_source_1` <Badge type="success" text="INPUT" />

Entrada de endereço de registrador primária.

- tipo: `std_logic_vector((ADDRESS_WIDTH - 1) downto 0)`

### `address_source_2` <Badge type="success" text="INPUT" />

Entrada de endereço de registrador secundária.

- tipo: `std_logic_vector((ADDRESS_WIDTH - 1) downto 0)`

### `data_destination` <Badge type="success" text="INPUT" />

Entrada de valor para armazenar em registrador.

- tipo: `std_logic_vector((DATA_WIDTH - 1) downto 0)`

### `data_source_1` <Badge type="danger" text="OUTPUT" />

Saída de valor de registrador primária.

- tipo: `std_logic_vector((DATA_WIDTH - 1) downto 0)`

### `data_source_2` <Badge type="danger" text="OUTPUT" />

Saída de valor de registrador secundária.

- tipo: `std_logic_vector((DATA_WIDTH - 1) downto 0)`

## Diagrama RTL

<pan-container>

![Diagrama de RTL do arquivo de registradores](/images/reference/components/rv32i_register_file_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

### Caso 1 <Badge type="info" text="tb_rv32i_register_file_case_1" />

Forma de onda:

<pan-container :grid="false">

<img src="/images/reference/components/tb_rv32i_register_file_case_1.svg" alt="Caso de teste 1 do Arquivo de Registradores" style="width: 100%; background-color: white;">

</pan-container>
