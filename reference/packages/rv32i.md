---
outline: [2, 3]
---

# Pacote `WORK.RV32I`

<a href="https://github.com/insper-riscv/core/blob/main/src/RV32I.vhd" target="blank"><Badge type="tip" text="RV32I.vhd &boxbox;" /></a>

Parâmetros e funções que descrevem o conjunto de instruções RISC-V de 32 bits para inteiros. Abstrato em relação a implementação.

## Tipos

### Faixas de vetores

Faixas de vetores para dados conforme definido na [Tabela Sintaxe](/reference/isa/#sintaxe).

#### Interface
```vhdl
subtype XLEN_RANGE        is natural range 31 downto  0;
subtype INSTRUCTION_RANGE is natural range 31 downto  0;
subtype FUNCT3_RANGE      is natural range 14 downto 12;
subtype FUNCT7_RANGE      is natural range 31 downto 25;
subtype OPCODE_FULL_RANGE is natural range  6 downto  0;
subtype OPCODE_RANGE      is natural range  6 downto  2;
subtype REGISTER_RANGE    is natural range  4 downto  0;
```

#### Usagem
```vhdl
signal data        : std_logic_vector(WORK.RV32I.XLEN_RANGE);
signal instruction : std_logic_vector(WORK.RV32I.INSTRUCTION_RANGE);
signal funct3      : std_logic_vector(WORK.RV32I.FUNCT3_RANGE);
signal funct7      : std_logic_vector(WORK.RV32I.FUNCT7_RANGE);
signal opcode_full : std_logic_vector(WORK.RV32I.OPCODE_FULL_RANGE);
signal opcode      : std_logic_vector(WORK.RV32I.OPCODE_RANGE);
signal register    : std_logic_vector(WORK.RV32I.REGISTER_RANGE);
```

---

### Vetores de dados

Vetores lógicos conforme as faixas de vetores.

#### Interface
```vhdl
subtype t_DATA        is std_logic_vector(XLEN_RANGE);
subtype t_PROGRAM     is std_logic_vector(INSTRUCTION_RANGE);
subtype t_FUNCT3      is std_logic_vector(FUNCT3_RANGE);
subtype t_FUNCT7      is std_logic_vector(FUNCT7_RANGE);
subtype t_OPCODE_FULL is std_logic_vector(OPCODE_FULL_RANGE);
subtype t_OPCODE      is std_logic_vector(OPCODE_RANGE);
subtype t_REGISTER    is std_logic_vector(REGISTER_RANGE);
```

#### Usagem
```vhdl
signal data        : WORK.RV32I.t_DATA;
signal instruction : WORK.RV32I.t_PROGRAM;
signal funct3      : WORK.RV32I.t_FUNCT3;
signal funct7      : WORK.RV32I.t_FUNCT7;
signal opcode_full : WORK.RV32I.t_OPCODE_FULL;
signal opcode      : WORK.RV32I.t_OPCODE;
signal source      : WORK.RV32I.t_REGISTER;
```

---

### Tipos de Instrução

Conjunto com tipos de instrução.

#### Interface
```vhdl
type t_INSTRUCTION_TYPE is (
    INSTRUCTION_R_TYPE,
    INSTRUCTION_I_TYPE,
    INSTRUCTION_S_TYPE,
    INSTRUCTION_B_TYPE,
    INSTRUCTION_U_TYPE,
    INSTRUCTION_J_TYPE
);
```

#### Usagem
```vhdl
signal instruction_type : WORK.RV32I.t_INSTRUCTION_TYPE := WORK.RV32I.INSTRUCTION_R_TYPE;
```

---

### Instrução

Registro de atributos codificáveis de um vetor de instrução.

```vhdl
type t_INSTRUCTION is record
    funct_3            : t_FUNCT3;
    funct_7            : t_FUNCT7;
    select_source_2    : t_REGISTER;
    select_source_1    : t_REGISTER;
    select_destination : t_REGISTER;
    immediate_i        : t_DATA;
    immediate_s        : t_DATA;
    immediate_b        : t_DATA;
    immediate_u        : t_DATA;
    immediate_j        : t_DATA;
    shamt              : std_logic_vector(4 downto 0);
    opcode             : t_OPCODE;
    encoding           : t_INSTRUCTION_TYPE;
end record;
```

#### Usagem
```vhdl
signal program_data : WORK.RV32I.t_PROGRAM;
signal instruction  : WORK.RV32I.t_INSTRUCTION;
...

instruction <= to_instruction(program_data);
```

## Constantes

### Largura vetores

#### Interface
```vhdl
constant XLEN              : natural := 32;  -- Largura dos vetores de dados.
constant INSTRUCTION_WIDTH : natural := 32;  -- Largura da instrução.
constant FUNCT3_WIDTH      : natural :=  3;  -- Largura do segmento `FUNCT_3` da instrução.
constant FUNCT7_WIDTH      : natural :=  7;  -- Largura do segmento `FUNCT_7` da instrução.
constant OPCODE_FULL_WIDTH : natural :=  7;  -- Largura do segmento `OPCODE` da instrução.
constant OPCODE_WIDTH      : natural :=  5;  -- Largura reduzida do segmento `OPCODE` da instrução.
constant REGISTER_WIDTH    : natural :=  5;  -- Largura de endereçamento de registradore.
```

#### Usagem
```vhdl
WORK.RV32I.XLEN;
WORK.RV32I.INSTRUCTION_WIDTH;
WORK.RV32I.FUNCT3_WIDTH;
WORK.RV32I.FUNCT7_WIDTH;
WORK.RV32I.OPCODE_FULL_WIDTH;
WORK.RV32I.OPCODE_WIDTH;
WORK.RV32I.REGISTER_WIDTH;
```

---

### Opcodes

Vetores de Opcode do conjunto RV32I. Conforme definido na [Tabela Opcode](/reference/isa/#opcode).

#### Interface
```vhdl
constant OPCODE_FULL_OP     : t_OPCODE_FULL := 7X"33";
constant OPCODE_FULL_OP_IMM : t_OPCODE_FULL := 7X"13";
constant OPCODE_FULL_JALR   : t_OPCODE_FULL := 7X"67";
constant OPCODE_FULL_SYNCH  : t_OPCODE_FULL := 7X"0F";
constant OPCODE_FULL_SYSTEM : t_OPCODE_FULL := 7X"73";
constant OPCODE_FULL_STORE  : t_OPCODE_FULL := 7X"23";
constant OPCODE_FULL_LOAD   : t_OPCODE_FULL := 7X"03";
constant OPCODE_FULL_BRANCH : t_OPCODE_FULL := 7X"63";
constant OPCODE_FULL_LUI    : t_OPCODE_FULL := 7X"37";
constant OPCODE_FULL_AUIPC  : t_OPCODE_FULL := 7X"17";
constant OPCODE_FULL_JAL    : t_OPCODE_FULL := 7X"6F";
```

#### Usagem
```vhdl
WORK.RV32I.OPCODE_FULL_OP;
WORK.RV32I.OPCODE_FULL_OP_IMM;
WORK.RV32I.OPCODE_FULL_JALR;
WORK.RV32I.OPCODE_FULL_SYNCH;
WORK.RV32I.OPCODE_FULL_SYSTEM;
WORK.RV32I.OPCODE_FULL_STORE;
WORK.RV32I.OPCODE_FULL_LOAD;
WORK.RV32I.OPCODE_FULL_BRANCH;
WORK.RV32I.OPCODE_FULL_LUI;
WORK.RV32I.OPCODE_FULL_AUIPC;
WORK.RV32I.OPCODE_FULL_JAL;
```

---

### Opcodes reduzidos

Vetores de Opcode do conjunto RV32I removidos os dois bits menos significativos. Conforme definido na [Tabela Opcode](/reference/isa/#opcode).

#### Interface
```vhdl
constant OPCODE_OP     : t_OPCODE := 5X"0C";
constant OPCODE_OP_IMM : t_OPCODE := 5X"04";
constant OPCODE_JALR   : t_OPCODE := 5X"19";
constant OPCODE_SYNCH  : t_OPCODE := 5X"03";
constant OPCODE_SYSTEM : t_OPCODE := 5X"1C";
constant OPCODE_STORE  : t_OPCODE := 5X"08";
constant OPCODE_LOAD   : t_OPCODE := 5X"00";
constant OPCODE_BRANCH : t_OPCODE := 5X"18";
constant OPCODE_LUI    : t_OPCODE := 5X"0D";
constant OPCODE_AUIPC  : t_OPCODE := 5X"05";
constant OPCODE_JAL    : t_OPCODE := 5X"1B";
```

#### Usagem
```vhdl
WORK.RV32I.OPCODE_OP;
WORK.RV32I.OPCODE_OP_IMM;
WORK.RV32I.OPCODE_JALR;
WORK.RV32I.OPCODE_SYNCH;
WORK.RV32I.OPCODE_SYSTEM;
WORK.RV32I.OPCODE_STORE;
WORK.RV32I.OPCODE_LOAD;
WORK.RV32I.OPCODE_BRANCH;
WORK.RV32I.OPCODE_LUI;
WORK.RV32I.OPCODE_AUIPC;
WORK.RV32I.OPCODE_JAL;
```

---

### Segmentos do `FUNCT3`

Conforme especificado no [Conjunto de Instruções](/docs/reference/isa/), o segmento `FUNCT3` da instrução é definido conforme segue:

#### Interface
```vhdl
constant FUNCT3_JALR   : t_FUNCT3 := 3X"0";
constant FUNCT3_BEQ    : t_FUNCT3 := 3X"0";
constant FUNCT3_BNE    : t_FUNCT3 := 3X"1";
constant FUNCT3_BLT    : t_FUNCT3 := 3X"4";
constant FUNCT3_BGE    : t_FUNCT3 := 3X"5";
constant FUNCT3_BLTU   : t_FUNCT3 := 3X"6";
constant FUNCT3_BGEU   : t_FUNCT3 := 3X"7";
constant FUNCT3_LB     : t_FUNCT3 := 3X"0";
constant FUNCT3_LH     : t_FUNCT3 := 3X"1";
constant FUNCT3_LW     : t_FUNCT3 := 3X"2";
constant FUNCT3_LBU    : t_FUNCT3 := 3X"4";
constant FUNCT3_LHU    : t_FUNCT3 := 3X"5";
constant FUNCT3_SB     : t_FUNCT3 := 3X"0";
constant FUNCT3_SH     : t_FUNCT3 := 3X"1";
constant FUNCT3_SW     : t_FUNCT3 := 3X"2";
constant FUNCT3_ADDI   : t_FUNCT3 := 3X"0";
constant FUNCT3_SLTI   : t_FUNCT3 := 3X"2";
constant FUNCT3_SLTIU  : t_FUNCT3 := 3X"3";
constant FUNCT3_XORI   : t_FUNCT3 := 3X"4";
constant FUNCT3_ORI    : t_FUNCT3 := 3X"6";
constant FUNCT3_ANDI   : t_FUNCT3 := 3X"7";
constant FUNCT3_SLLI   : t_FUNCT3 := 3X"1";
constant FUNCT3_SRLI   : t_FUNCT3 := 3X"5";
constant FUNCT3_SRAI   : t_FUNCT3 := 3X"5";
constant FUNCT3_ADD    : t_FUNCT3 := 3X"0";
constant FUNCT3_SUB    : t_FUNCT3 := 3X"0";
constant FUNCT3_SLL    : t_FUNCT3 := 3X"1";
constant FUNCT3_SLT    : t_FUNCT3 := 3X"2";
constant FUNCT3_SLTU   : t_FUNCT3 := 3X"3";
constant FUNCT3_XOR    : t_FUNCT3 := 3X"4";
constant FUNCT3_SRL    : t_FUNCT3 := 3X"5";
constant FUNCT3_SRA    : t_FUNCT3 := 3X"5";
constant FUNCT3_OR     : t_FUNCT3 := 3X"6";
constant FUNCT3_AND    : t_FUNCT3 := 3X"7";
constant FUNCT3_FENCE  : t_FUNCT3 := 3X"0";
constant FUNCT3_ECALL  : t_FUNCT3 := 3X"0";
constant FUNCT3_EBREAK : t_FUNCT3 := 3X"0";
```
#### Usagem
```vhdl
WORK.RV32I.FUNCT3_JALR;
WORK.RV32I.FUNCT3_BEQ;
WORK.RV32I.FUNCT3_BNE;
WORK.RV32I.FUNCT3_BLT;
WORK.RV32I.FUNCT3_BGE;
WORK.RV32I.FUNCT3_BLTU;
WORK.RV32I.FUNCT3_BGEU;
WORK.RV32I.FUNCT3_LB;
WORK.RV32I.FUNCT3_LH;
WORK.RV32I.FUNCT3_LW;
WORK.RV32I.FUNCT3_LBU;
WORK.RV32I.FUNCT3_LHU;
WORK.RV32I.FUNCT3_SB;
WORK.RV32I.FUNCT3_SH;
WORK.RV32I.FUNCT3_SW;
WORK.RV32I.FUNCT3_ADDI;
WORK.RV32I.FUNCT3_SLTI;
WORK.RV32I.FUNCT3_SLTIU;
WORK.RV32I.FUNCT3_XORI;
WORK.RV32I.FUNCT3_ORI;
WORK.RV32I.FUNCT3_ANDI;
WORK.RV32I.FUNCT3_SLLI;
WORK.RV32I.FUNCT3_SRLI;
WORK.RV32I.FUNCT3_SRAI;
WORK.RV32I.FUNCT3_ADD;
WORK.RV32I.FUNCT3_SUB;
WORK.RV32I.FUNCT3_SLL;
WORK.RV32I.FUNCT3_SLT;
WORK.RV32I.FUNCT3_SLTU;
WORK.RV32I.FUNCT3_XOR;
WORK.RV32I.FUNCT3_SRL;
WORK.RV32I.FUNCT3_SRA;
WORK.RV32I.FUNCT3_OR;
WORK.RV32I.FUNCT3_AND;
WORK.RV32I.FUNCT3_FENCE;
WORK.RV32I.FUNCT3_ECALL;
WORK.RV32I.FUNCT3_EBREAK;
```

---

### Segmentos do `FUNCT7`

Conforme especificado no [Conjunto de Instruções](/reference/isa/), o segmento `FUNCT7` da instrução é definido conforme segue:

#### Interface
```vhdl
constant FUNCT7_SLLI : t_FUNCT7 := 7X"00";
constant FUNCT7_SRLI : t_FUNCT7 := 7X"00";
constant FUNCT7_SRAI : t_FUNCT7 := 7X"20";
constant FUNCT7_ADD  : t_FUNCT7 := 7X"00";
constant FUNCT7_SUB  : t_FUNCT7 := 7X"20";
constant FUNCT7_SLL  : t_FUNCT7 := 7X"00";
constant FUNCT7_SLT  : t_FUNCT7 := 7X"00";
constant FUNCT7_SLTU : t_FUNCT7 := 7X"00";
constant FUNCT7_XOR  : t_FUNCT7 := 7X"00";
constant FUNCT7_SRL  : t_FUNCT7 := 7X"00";
constant FUNCT7_SRA  : t_FUNCT7 := 7X"20";
constant FUNCT7_OR   : t_FUNCT7 := 7X"00";
constant FUNCT7_AND  : t_FUNCT7 := 7X"00";
```

#### Usagem
```vhdl
WORK.RV32I.FUNCT7_SLLI;
WORK.RV32I.FUNCT7_SRLI;
WORK.RV32I.FUNCT7_SRAI;
WORK.RV32I.FUNCT7_ADD;
WORK.RV32I.FUNCT7_SUB;
WORK.RV32I.FUNCT7_SLL;
WORK.RV32I.FUNCT7_SLT;
WORK.RV32I.FUNCT7_SLTU;
WORK.RV32I.FUNCT7_XOR;
WORK.RV32I.FUNCT7_SRL;
WORK.RV32I.FUNCT7_SRA;
WORK.RV32I.FUNCT7_OR;
WORK.RV32I.FUNCT7_AND;
```

---

### Instrução nula

A instrução nula é aquela que não efetua operações nem altera o estado das memórias. É o vetor de instrução que codifica a instrução [`NOP`](/reference/isa/pseudo.html#nop).

#### Interface
```vhdl
constant NULL_INSTRUCTION : t_PROGRAM := 17X"0" & FUNCT3_ADDI & 5X"0" & OPCODE_FULL_OP_IMM;
```

#### Usagem
```vhdl
WORK.RV32I.NULL_INSTRUCTION;
```

## Funções

### Construtor de instrução

Popula um registro `t_Instruction` com os dados de um vetor de instrução.

#### Interface

```vhdl
function to_instruction(in_vec : t_PROGRAM) return t_INSTRUCTION;
```

#### Usagem
```vhdl
signal program_data : WORK.RV32I.t_PROGRAM;
signal instruction  : WORK.RV32I.t_INSTRUCTION;
...

instruction <= to_instruction(program_data);
```

---

### Construtor de tipo de instrução

Retorna o tipo da instrução a patir de um vetor de Opcode.

#### Interface

```vhdl
function to_instruction_type(in_vec : t_OPCODE) return t_INSTRUCTION_TYPE;
```

#### Usagem
```vhdl
instruction_type := WORK.RV32I.to_instruction_type(opcode);
```

---

### Decodificador de imediato

Retorna um vetor de dados com o valor de imediato codificado de acordo a função do tipo: seja `I`, `S`, `B`, `U`, ou `J`. Conforme espeficicado na [Tabela Imediato](/reference/isa/#imediato)

#### Interface
```vhdl
function to_immediate_i(in_vec : t_PROGRAM) return t_DATA;
function to_immediate_s(in_vec : t_PROGRAM) return t_DATA;
function to_immediate_b(in_vec : t_PROGRAM) return t_DATA;
function to_immediate_u(in_vec : t_PROGRAM) return t_DATA;
function to_immediate_j(in_vec : t_PROGRAM) return t_DATA;
```

#### Usagem
```vhdl
immediate <= to_immediate_i(program_data);
immediate <= to_immediate_s(program_data);
immediate <= to_immediate_b(program_data);
immediate <= to_immediate_u(program_data);
immediate <= to_immediate_j(program_data);
```
