---
outline: 2
---

# Arquivo de Registradores

## Topologia

![alt text](/public/images/reference/report_components/module_register_file.drawio.svg)

## Interface genérica

### `DATA_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos vetores de dados.

- Tipo: `natural`
- Padrão: `XLEN`

### `ADDRESS_WIDTH` <Badge type="neutral" text="GENERIC" />

Largura dos endereços do banco de registradores.

- Tipo: `natural`
- Padrão: `REGISTER_WIDTH`

## Interface de portas

### `clock` <Badge type="success" text="INPUT" />

Entrada do sinal de clock.

- Tipo: `std_logic`

### `clear` <Badge type="success" text="INPUT" />

Entrada do sinal que limpa o(s) dado(s) do componente.

- Tipo: `std_logic`

### `enable` <Badge type="success" text="INPUT" />

Entrada do sinal que ativa o componente.

- Tipo: `std_logic`

### `select_destination` <Badge type="success" text="INPUT" />

Entrada do endereço do registrador de destino.

- Tipo: `std_logic_vector`
- Largura: variável `(ADDRESS_WIDTH - 1) downto 0`

### `select_source_1` <Badge type="success" text="INPUT" />

Entrada do endereço do registrador primário.

- Tipo: `std_logic_vector`
- Largura: variável `(ADDRESS_WIDTH - 1) downto 0`

### `select_source_1` <Badge type="success" text="INPUT" />

Entrada do endereço do registrador secundário.

- Tipo: `std_logic_vector`
- Largura: variável `(ADDRESS_WIDTH - 1) downto 0`

### `data_destination` <Badge type="success" text="INPUT" />

Entrada do valor do registrador de destino.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `data_source_1` <Badge type="danger" text="OUTPUT" />

Saída do valor do registrador primário.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

### `data_source_2` <Badge type="danger" text="OUTPUT" />

Saída do valor do registrador secundário.

- Tipo: `std_logic_vector`
- Largura: variável `(DATA_WIDTH - 1) downto 0`

## Usagem

```vhdl
MODULE_REGISTER_FILE : entity WORK.MODULE_REGISTER_FILE(RV32I)
    port map (
    clock              => clock,
    clear              => '0',
    enable             => enable_destination,
    select_destination => select_destination,
    data_destination   => data_destination,
    select_source_1    => WORK.RV32I.to_INSTRUCTION(source_0.data_instruction).select_source_1,
    select_source_2    => WORK.RV32I.to_INSTRUCTION(source_0.data_instruction).select_source_2,
    data_source_1      => data_source_1,
    data_source_2      => data_source_2
);
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL do Arquivo de Registradores](/images/reference/entities/module_register_file_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

::: danger TO DO

```md
### Caso 1 <Badge type="info" text="tb_module_register_file_case_1" />

Forma de onda:

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Arquivo de Registradores](/images/reference/entities/tb_module_register_file_case_1.svg){.w-full .dark-invert}

</pan-container>

```

:::
