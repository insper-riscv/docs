---
outline: 2
---

# RAM <Badge type="info" text="WORK.GENERIC_RAM" />

[<Badge type="tip" text="Arquivo: GENERIC_RAM.vhd &boxbox;" />](https://github.com/insper-riscv/core/blob/main/src/GENERIC_RAM.vhd)

Memória de acesso aleatório

## Topologia

<pan-container>

![Diagram](/images/reference/entities/GENERIC_RAM.svg){.w-full .dark-invert}

</pan-container>

## Genericos

| Nome                | Tipo    | Valor | Descrição                                       |
| ------------------- | ------- | ----- | ----------------------------------------------- |
| `DATA_WIDTH`        | natural | 8     | Largura dos vetores de dados                    |
| `ADDRESS_WIDTH`     | natural | 8     | Largura do vetor de endereço                    |
| `ADDRESSABLE_WIDTH` | natural | 7     | Largura do vetor de endereço mapeado na memória |

::: warning ATENÇÃO!

`ADDRESSABLE_WIDTH` deve ser menor ou igual a `ADDRESS_WIDTH`.

:::

## Portas

| Nome           | Direção | Tipo                            | Descrição                                                                     |
| -------------- | ------- | ------------------------------- | ----------------------------------------------------------------------------- |
| `clock`        | input   | std_logic                       | Sinal de clock                                                                |
| `enable`       | input   | std_logic                       | Habilita a entidade                                                           |
| `enable_read`  | input   | std_logic                       | Habilita leitura. Caso contrário, destination assume sinal de alta impedância |
| `enable_write` | input   | std_logic                       | Habilita escrita                                                              |
| `address`      | input   | std_logic_vector<ADDRESS_WIDTH> | Vetor de endereço                                                             |
| `source`       | input   | std_logic_vector<DATA_WIDTH>    | Vetor de dados para escrita                                                   |
| `destination`  | output  | std_logic_vector<DATA_WIDTH>    | Vetor de dados endereçado para leitura                                        |

## Processos

### WRITE

Dependências: `clock`

Durante a borda de subida de `clock`, caso tanto `enable`como `enable_write`
estejam habilitados, atribui o dado `source` ao buffer na posição codificada em
`address`.

## Usagem

```vhdl
RAM : entity WORK.GENERIC_RAM
    generic map (
        DATA_WIDTH_0      => 32;
        ADDRESS_WIDTH     => 32;
        ADDRESSABLE_WIDTH => 8
    )
    port map (
        clock        => clock,
        enable       => signal_enable,
        enable_read  => signal_enable_read,
        enable_write => signal_enable_write,
        address      => signal_address,
        source       => signal_source,
        destination  => signal_destination
    );
```

## Diagrama RTL

<pan-container>

![Diagrama de RTL da RAM](/images/reference/entities/generic_ram_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_RAM.py" target="blank"><Badge type="tip" text="test_GENERIC_RAM.py &boxbox;" /></a>

### Caso 1 <Badge type="info" text="tb_GENERIC_RAM_case_1" />

<pan-container :grid="false">

![Forma de onda do caso de teste 1 da RAM](/images/reference/entities/tb_generic_ram_case_1.svg){.w-full .dark-invert}

</pan-container>
