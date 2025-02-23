---
outline: [2, 3]
---

# Pacote RV32I <Badge type="info" text="WORK.RV32I" />

[<Badge type="tip" text="Arquivo: RV32I.vhd &boxbox;" />](https://github.com/insper-riscv/core/blob/main/src/RV32I.vhd)

Para a topologia, um conjunto de registros foi criado para definir o fluxo de
dados em alto nível. Isso possibilita simplificar a implementação de pipelining
e manter o código limpo. A partir dos seguintes registros é possível declarar
todos os pontos de controle e de dados de todo o fluxo de execução da
arquitetura. Além disso, também são especificados valores que caracterizem o
comportamento ocioso da arquitetura.

## Subtipos

| Nome                | Tipo                                | Descrição                                  |
| ------------------- | ----------------------------------- | ------------------------------------------ |
| `XLEN_RANGE`        | natural range 31 downto 0           | Largura do vetor de dados                  |
| `INSTRUCTION_RANGE` | natural range 31 downto 0           | Largura do vetor de programa               |
| `FUNCT3_RANGE`      | natural range 14 downto 12          | Largura do vetor de seleção de função      |
| `FUNCT7_RANGE`      | natural range 31 downto 25          | Largura do vetor de seleção de função      |
| `OPCODE_FULL_RANGE` | natural range 6 downto 0            | Largura do vetor de opcode completo        |
| `OPCODE_RANGE`      | natural range 6 downto 2            | Largura do vetor de opcode truncado        |
| `REGISTER_RANGE`    | natural range 4 downto 0            | Largura do vetor de seleção de registrador |
| `t_DATA`            | std_logic_vector(XLEN_RANGE)        | Vetor de dados                             |
| `t_PROGRAM`         | std_logic_vector(INSTRUCTION_RANGE) | Vetor de programa                          |
| `t_FUNCT3`          | std_logic_vector(FUNCT3_RANGE)      | Vetor de seleção de função                 |
| `t_FUNCT7`          | std_logic_vector(FUNCT7_RANGE)      | Vetor de seleção de função                 |
| `t_OPCODE_FULL`     | std_logic_vector(OPCODE_FULL_RANGE) | Vetor de opcode completo                   |
| `t_OPCODE`          | std_logic_vector(OPCODE_RANGE)      | Vetor de opcode truncado                   |
| `t_REGISTER`        | std_logic_vector(REGISTER_RANGE)    | Vetor de seleção de registrador            |

## Constantes

| Nome                 | Tipo          | Descrição                                  |
| -------------------- | ------------- | ------------------------------------------ |
| `XLEN`               | natural       | Tamanho do vetor de dados                  |
| `INSTRUCTION_WIDTH`  | natural       | Tamanho do vetor de instrução              |
| `FUNCT3_WIDTH`       | natural       | Tamanho do vetor de seleção de função      |
| `FUNCT7_WIDTH`       | natural       | Tamanho do vetor de seleção de função      |
| `OPCODE_FULL_WIDTH`  | natural       | Tamanho do vetor de opcode completo        |
| `OPCODE_WIDTH`       | natural       | Tamanho do vetor de opcode truncado        |
| `REGISTER_WIDTH`     | natural       | Tamanho do vetor de seleção de registrador |
| `OPCODE_FULL_OP`     | t_OPCODE_FULL | Opcode completo do tipo OP                 |
| `OPCODE_FULL_OP_IMM` | t_OPCODE_FULL | Opcode completo do tipo OP_IMM             |
| `OPCODE_FULL_JALR`   | t_OPCODE_FULL | Opcode completo do tipo JALR               |
| `OPCODE_FULL_SYNCH`  | t_OPCODE_FULL | Opcode completo do tipo SYNC               |
| `OPCODE_FULL_SYSTEM` | t_OPCODE_FULL | Opcode completo do tipo SYSTEM             |
| `OPCODE_FULL_STORE`  | t_OPCODE_FULL | Opcode completo do tipo STORE              |
| `OPCODE_FULL_LOAD`   | t_OPCODE_FULL | Opcode completo do tipo LOAD               |
| `OPCODE_FULL_BRANCH` | t_OPCODE_FULL | Opcode completo do tipo BRANCH             |
| `OPCODE_FULL_LUI`    | t_OPCODE_FULL | Opcode completo do tipo LUI                |
| `OPCODE_FULL_AUIPC`  | t_OPCODE_FULL | Opcode completo do tipo AUIPC              |
| `OPCODE_FULL_JAL`    | t_OPCODE_FULL | Opcode completo do tipo JAL                |
| `OPCODE_OP`          | t_OPCODE      | Opcode truncado do tipo OP                 |
| `OPCODE_OP_IMM`      | t_OPCODE      | Opcode truncado do tipo OP_IMM             |
| `OPCODE_JALR`        | t_OPCODE      | Opcode truncado do tipo JALR               |
| `OPCODE_SYNCH`       | t_OPCODE      | Opcode truncado do tipo SYNC               |
| `OPCODE_SYSTEM`      | t_OPCODE      | Opcode truncado do tipo SYSTEM             |
| `OPCODE_STORE`       | t_OPCODE      | Opcode truncado do tipo STORE              |
| `OPCODE_LOAD`        | t_OPCODE      | Opcode truncado do tipo LOAD               |
| `OPCODE_BRANCH`      | t_OPCODE      | Opcode truncado do tipo BRANCH             |
| `OPCODE_LUI`         | t_OPCODE      | Opcode truncado do tipo LUI                |
| `OPCODE_AUIPC`       | t_OPCODE      | Opcode truncado do tipo AUIPC              |
| `OPCODE_JAL`         | t_OPCODE      | Opcode truncado do tipo JAL                |
| `FUNCT3_JALR`        | t_FUNCT3      | Seletor de função da instrução JALR        |
| `FUNCT3_BEQ`         | t_FUNCT3      | Seletor de função da instrução BEQ         |
| `FUNCT3_BNE`         | t_FUNCT3      | Seletor de função da instrução BNE         |
| `FUNCT3_BLT`         | t_FUNCT3      | Seletor de função da instrução BLT         |
| `FUNCT3_BGE`         | t_FUNCT3      | Seletor de função da instrução BGE         |
| `FUNCT3_BLTU`        | t_FUNCT3      | Seletor de função da instrução BLTU        |
| `FUNCT3_BGEU`        | t_FUNCT3      | Seletor de função da instrução BGEU        |
| `FUNCT3_LB`          | t_FUNCT3      | Seletor de função da instrução LB          |
| `FUNCT3_LH`          | t_FUNCT3      | Seletor de função da instrução LH          |
| `FUNCT3_LW`          | t_FUNCT3      | Seletor de função da instrução LW          |
| `FUNCT3_LBU`         | t_FUNCT3      | Seletor de função da instrução LBU         |
| `FUNCT3_LHU`         | t_FUNCT3      | Seletor de função da instrução LHU         |
| `FUNCT3_SB`          | t_FUNCT3      | Seletor de função da instrução SB          |
| `FUNCT3_SH`          | t_FUNCT3      | Seletor de função da instrução SH          |
| `FUNCT3_SW`          | t_FUNCT3      | Seletor de função da instrução SW          |
| `FUNCT3_ADDI`        | t_FUNCT3      | Seletor de função da instrução ADDI        |
| `FUNCT3_SLTI`        | t_FUNCT3      | Seletor de função da instrução SLTI        |
| `FUNCT3_SLTIU`       | t_FUNCT3      | Seletor de função da instrução SLTIU       |
| `FUNCT3_XORI`        | t_FUNCT3      | Seletor de função da instrução XORI        |
| `FUNCT3_ORI`         | t_FUNCT3      | Seletor de função da instrução ORI         |
| `FUNCT3_ANDI`        | t_FUNCT3      | Seletor de função da instrução ANDI        |
| `FUNCT3_SLLI`        | t_FUNCT3      | Seletor de função da instrução SLLI        |
| `FUNCT3_SRLI`        | t_FUNCT3      | Seletor de função da instrução SRLI        |
| `FUNCT3_SRAI`        | t_FUNCT3      | Seletor de função da instrução SRAI        |
| `FUNCT3_ADD`         | t_FUNCT3      | Seletor de função da instrução ADD         |
| `FUNCT3_SUB`         | t_FUNCT3      | Seletor de função da instrução SUB         |
| `FUNCT3_SLL`         | t_FUNCT3      | Seletor de função da instrução SLL         |
| `FUNCT3_SLT`         | t_FUNCT3      | Seletor de função da instrução SLT         |
| `FUNCT3_SLTU`        | t_FUNCT3      | Seletor de função da instrução SLTU        |
| `FUNCT3_XOR`         | t_FUNCT3      | Seletor de função da instrução XOR         |
| `FUNCT3_SRL`         | t_FUNCT3      | Seletor de função da instrução SRL         |
| `FUNCT3_SRA`         | t_FUNCT3      | Seletor de função da instrução SRA         |
| `FUNCT3_OR`          | t_FUNCT3      | Seletor de função da instrução OR          |
| `FUNCT3_AND`         | t_FUNCT3      | Seletor de função da instrução AND         |
| `FUNCT3_FENCE`       | t_FUNCT3      | Seletor de função da instrução FENCE       |
| `FUNCT3_ECALL`       | t_FUNCT3      | Seletor de função da instrução ECALL       |
| `FUNCT3_EBREAK`      | t_FUNCT3      | Seletor de função da instrução EBREAK      |
| `FUNCT7_SLLI`        | t_FUNCT7      | Seletor de função da instrução SLLI        |
| `FUNCT7_SRLI`        | t_FUNCT7      | Seletor de função da instrução SRLI        |
| `FUNCT7_SRAI`        | t_FUNCT7      | Seletor de função da instrução SRAI        |
| `FUNCT7_ADD`         | t_FUNCT7      | Seletor de função da instrução ADD         |
| `FUNCT7_SUB`         | t_FUNCT7      | Seletor de função da instrução SUB         |
| `FUNCT7_SLL`         | t_FUNCT7      | Seletor de função da instrução SLL         |
| `FUNCT7_SLT`         | t_FUNCT7      | Seletor de função da instrução SLT         |
| `FUNCT7_SLTU`        | t_FUNCT7      | Seletor de função da instrução SLTU        |
| `FUNCT7_XOR`         | t_FUNCT7      | Seletor de função da instrução XOR         |
| `FUNCT7_SRL`         | t_FUNCT7      | Seletor de função da instrução SRL         |
| `FUNCT7_SRA`         | t_FUNCT7      | Seletor de função da instrução SRA         |
| `FUNCT7_OR`          | t_FUNCT7      | Seletor de função da instrução OR          |
| `FUNCT7_AND`         | t_FUNCT7      | Seletor de função da instrução AND         |
| `NULL_INSTRUCTION`   | t_PROGRAM     | Vetor de instrução nula (NOP)              |

## Registros

### `t_INSTRUCTION`

Atributos decodificáveis de um vetor de instrução

| Nome                 | Tipo                         | Descrição                  |
| -------------------- | ---------------------------- | -------------------------- |
| `funct_3`            | t_FUNCT3                     | Vetor de seleção de função |
| `funct_7`            | t_FUNCT7                     | Vetor de seleção de função |
| `select_source_2`    | t_REGISTER                   | Vetor de seleção de dados  |
| `select_source_1`    | t_REGISTER                   | Vetor de seleção de dados  |
| `select_destination` | t_REGISTER                   | Vetor de seleção de dados  |
| `immediate_i`        | t_DATA                       | Vetor de imediato tipo I   |
| `immediate_s`        | t_DATA                       | Vetor de imediato tipo S   |
| `immediate_b`        | t_DATA                       | Vetor de imediato tipo B   |
| `immediate_u`        | t_DATA                       | Vetor de imediato tipo U   |
| `immediate_j`        | t_DATA                       | Vetor de imediato tipo J   |
| `shamt`              | std_logic_vector(4 downto 0) | Seletor de shift           |
| `opcode`             | t_OPCODE                     | Vetor de Opcode            |
| `encoding`           | t_INSTRUCTION_TYPE           | Tipo de instrução          |

## Enums

### `t_INSTRUCTION_TYPE`

Enumerador de tipos de instrução

| Nome                 | Descrição        |
| -------------------- | ---------------- |
| `INSTRUCTION_R_TYPE` | Instrução tipo R |
| `INSTRUCTION_I_TYPE` | Instrução tipo I |
| `INSTRUCTION_S_TYPE` | Instrução tipo S |
| `INSTRUCTION_B_TYPE` | Instrução tipo B |
| `INSTRUCTION_U_TYPE` | Instrução tipo U |
| `INSTRUCTION_J_TYPE` | Instrução tipo J |

## Funções

### `to_immediate_i`

Decodifica um vetor de instrução para um vetor de imediato do tipo I.

```vhdl
to_immediate_i ( in_vec : std_logic_vector(INSTRUCTION_RANGE) ) return t_DATA
```

### `to_immediate_s`

Decodifica um vetor de instrução para um vetor de imediato do tipo S.

```vhdl
to_immediate_s ( in_vec : std_logic_vector(INSTRUCTION_RANGE) ) return t_DATA
```

### `to_immediate_b`

Decodifica um vetor de instrução para um vetor de imediato do tipo B.

```vhdl
to_immediate_b ( in_vec : std_logic_vector(INSTRUCTION_RANGE) ) return t_DATA
```

### `to_immediate_u`

Decodifica um vetor de instrução para um vetor de imediato do tipo U.

```vhdl
to_immediate_u ( in_vec : std_logic_vector(INSTRUCTION_RANGE) ) return t_DATA
```

### `to_immediate_j`

Decodifica um vetor de instrução para um vetor de imediato do tipo J.

```vhdl
to_immediate_j ( in_vec : std_logic_vector(INSTRUCTION_RANGE) ) return t_DATA
```

### `to_instruction_type`

Decodifica um vetor de opcode truncado para o tipo de instrução.

```vhdl
to_instruction_type ( in_vec : t_OPCODE ) return t_INSTRUCTION_TYPE
```

### `to_instruction`

Decodifica um vetor de instrução para um record t_INSTRUCTION.

```vhdl
to_instruction ( in_vec : std_logic_vector(INSTRUCTION_RANGE) ) return t_INSTRUCTION
```
