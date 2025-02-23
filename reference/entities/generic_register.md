---
outline: 2
---

# Registrador

<VPButton theme="alt" text="Abrir arquivo fonte ⧉" href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_REGISTER.vhd" style="margin: 1rem 0;" />

Registrador de uso geral.

## Topologia

<pan-container>

![Diagram](/images/reference/entities/GENERIC_REGISTER.svg){.w-full .dark-invert}

</pan-container>

## Genéricos

| Nome         | Tipo    | Valor | descrição                    |
| ------------ | ------- | ----- | ---------------------------- |
| `DATA_WIDTH` | natural | 8     | Largura dos vetores de dados |

## Portas

| Nome          | Direção | Tipo                                        | Descrição                   |
| ------------- | ------- | ------------------------------------------- | --------------------------- |
| `clock`       | input   | std_logic                                   | Sinal de clock              |
| `clear`       | input   | std_logic                                   | Sinal de clock              |
| `enable`      | input   | std_logic                                   | Habilita a entidade         |
| `source`      | input   | std_logic_vector<DATA_WIDTH> | Vetor de dados para escrita |
| `destination` | output  | std_logic_vector<DATA_WIDTH> | Vetor de dados regisrados   |

## Processos

### UPDATE

Dependências: `clock`

Durante a borda de subida de `clock`, caso `enable` esteja habilitado, atribui
`source` a `destination` se `clear` nãoestiver habilitado, caso contrário
atribui vetor booleano baixo a `destination`.

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

<VPButton theme="alt" text="Abrir arquivo fonte ⧉" href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_REGISTER.py" />

### `tb_GENERIC_REGISTER_case_1`

<pan-container :grid="false">

![Forma de onda do caso de teste 1 do Registrador](/images/reference/entities/tb_generic_register_case_1.svg){.w-full .dark-invert}

</pan-container>
