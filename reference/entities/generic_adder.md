---
outline: 2
---

# Somador

<VPButton theme="alt" text="Abrir arquivo fonte ⧉" href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_ADDER.vhd" style="margin: 1rem 0;" />

Realiza operação aritmética de soma entre dois inteiros codificados em vetores
booleanos.

## Diagrama

<pan-container>

![Diagram](/images/reference/entities/GENERIC_ADDER.svg){.w-full .dark-invert}

</pan-container>

## Genericos

| Nome               | Tipo    | Valor | Descrição                                           |
| ------------------ | ------- | ----- | --------------------------------------------------- |
| `DATA_WIDTH`       | natural | 8     | Largura dos vetores de dados                        |
| `DEFAULT_SOURCE_2` | integer | 1     | Dispensa necessidade de atribuir entrada `source_2` |

## Portas

| Nome          | Direção | Tipo                         | Descrição                              |
| ------------- | ------- | ---------------------------- | -------------------------------------- |
| `source_1`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados primário                |
| `source_2`    | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados secundário              |
| `destination` | output  | std_logic_vector<DATA_WIDTH> | Resultado da soma dos vetores de dados |

## Instâncias

| Nome              | Entidade                       |
| ----------------- | ------------------------------ |
| `CARRY_LOOKAHEAD` | `WORK.GENERIC_CARRY_LOOKAHEAD` |

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

<VPButton theme="alt" text="Abrir arquivo fonte ⧉" href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_ADDER.py" />

### `tb_GENERIC_ADDER_case_1`

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do somador](/images/reference/entities/tb_generic_adder_case_1.svg){.w-full .dark-invert}

</pan-container>
