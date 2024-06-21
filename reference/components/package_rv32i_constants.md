## Constantes Globais - Pacote WORK.RV32I {style="font-size: 2em;"}

## Largura de Dados <Badge text="WORK.RV32I.XLEN"/>

É uma constante natural que define a largura dos vetores de dados.

```vhdl
constant XLEN              : natural := 32;
```

## Largura de Instrução <Badge text="WORK.RV32I.INSTRUCTION_WIDTH"/>

É uma constante natural que define a largura de uma instrução.

```vhdl
constant INSTRUCTION_WIDTH : natural := 32;
```

## Largura do Funct_3 <Badge text="WORK.RV32I.FUNCT3_WIDTH"/>

É uma constante natural que define a largura do Funct_3 da instrução.

```vhdl
constant FUNCT3_WIDTH      : natural :=  3;
```

## Largura do Funct_7 <Badge text="WORK.RV32I.FUNCT7_WIDTH"/>

É uma constante natural que define a largura do Funct_7 da instrução.

```vhdl
constant FUNCT7_WIDTH      : natural :=  7;
```

## Largura total do Opcode <Badge text="WORK.RV32I.OPCODE_FULL_WIDTH"/>

É uma constante natural que define a largura do opcode da instrução.

```vhdl
constant OPCODE_FULL_WIDTH : natural :=  7;
```

## Largura do Opcode <Badge text="WORK.RV32I.OPCODE_WIDTH"/>

É uma constante natural que define a largura do intervalo de bits
do opcode que variam dependendo da instrução.

```vhdl
constant OPCODE_WIDTH      : natural :=  5;
```

## Largura de Registrador <Badge text="WORK.RV32I.REGISTER_WIDTH"/>

É uma constante natural que define a largura de um endereço de registrador.

```vhdl
constant REGISTER_WIDTH    : natural :=  5;
```

## Instrução padrão <Badge text="WORK.RV32I.NULL_INSTRUCTION"/>

É uma constante natural que define a instrução padrão do processador (nop).

```vhdl
constant NULL_INSTRUCTION : t_PROGRAM := 17X"0" & FUNCT3_ADDI & 5X"0" & OPCODE_FULL_OP_IMM;
```

### Intervalos de Bits <Badge type="danger" text="subtype"/>

Foram criados subtipos de intervalos de bits.

```vhdl
subtype XLEN_RANGE        is natural range 31 downto  0;
subtype INSTRUCTION_RANGE is natural range 31 downto  0;
subtype FUNCT3_RANGE      is natural range 14 downto 12;
subtype FUNCT7_RANGE      is natural range 31 downto 25;
subtype OPCODE_FULL_RANGE is natural range  6 downto  0;
subtype OPCODE_RANGE      is natural range  6 downto  2;
subtype REGISTER_RANGE    is natural range  4 downto  0;
```

### Subtipos de Dados <Badge type="danger" text="subtype"/>

Os subtipos de intervalos de bits foram usados para criar subtypos de dados.

```vhdl
subtype t_DATA        is std_logic_vector(XLEN_RANGE);
subtype t_PROGRAM     is std_logic_vector(INSTRUCTION_RANGE);
subtype t_FUNCT3      is std_logic_vector(FUNCT3_RANGE);
subtype t_FUNCT7      is std_logic_vector(FUNCT7_RANGE);
subtype t_OPCODE_FULL is std_logic_vector(OPCODE_FULL_RANGE);
subtype t_OPCODE      is std_logic_vector(OPCODE_RANGE);
subtype t_REGISTER    is std_logic_vector(REGISTER_RANGE);
```

### Tipos de Instrução <Badge type="success" text="WORK.RV32I.t_INSTRUCTION_TYPE"/>

Foi criado um tipo de dado que classifica qual o tipo de instrução (segundo sintaxe) está
sendo executada.

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

### Instrução <Badge type="success" text="WORK.RV32I.t_INSTRUCTION"/>

Foi criado um registro que fragmenta a instrução sendo executada de acordo com
o uso de cada parte da mesma.

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

### Opcodes RV32I <Badge text="constant"/>

Opcodes do Conjunto Base de Instruções RISC-V de 32 bits para inteiros.

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

### Opcodes reduzidos RV32I <Badge text="constant"/>

Opcodes do Conjunto Base de Instruções RISC-V de 32 bits para inteiros sem os 2
bits menos significativos (são sempre "11").

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

### Funções de 3 bits RV32I <Badge text="constant"/>

Todos os FUNCT_3 do Conjunto Base de Instruções RISC-V de 32 bits para inteiros.

```vhdl
constant FUNCT3_JALR    : t_FUNCT3 := 3X"0";
constant FUNCT3_BEQ     : t_FUNCT3 := 3X"0";
constant FUNCT3_BNE     : t_FUNCT3 := 3X"1";
constant FUNCT3_BLT     : t_FUNCT3 := 3X"4";
constant FUNCT3_BGE     : t_FUNCT3 := 3X"5";
constant FUNCT3_BLTU    : t_FUNCT3 := 3X"6";
constant FUNCT3_BGEU    : t_FUNCT3 := 3X"7";
constant FUNCT3_LB      : t_FUNCT3 := 3X"0";
constant FUNCT3_LH      : t_FUNCT3 := 3X"1";
constant FUNCT3_LW      : t_FUNCT3 := 3X"2";
constant FUNCT3_LBU     : t_FUNCT3 := 3X"4";
constant FUNCT3_LHU     : t_FUNCT3 := 3X"5";
constant FUNCT3_SB      : t_FUNCT3 := 3X"0";
constant FUNCT3_SH      : t_FUNCT3 := 3X"1";
constant FUNCT3_SW      : t_FUNCT3 := 3X"2";
constant FUNCT3_ADDI    : t_FUNCT3 := 3X"0";
constant FUNCT3_SLTI    : t_FUNCT3 := 3X"2";
constant FUNCT3_SLTIU   : t_FUNCT3 := 3X"3";
constant FUNCT3_XORI    : t_FUNCT3 := 3X"4";
constant FUNCT3_ORI     : t_FUNCT3 := 3X"6";
constant FUNCT3_ANDI    : t_FUNCT3 := 3X"7";
constant FUNCT3_SLLI    : t_FUNCT3 := 3X"1";
constant FUNCT3_SRLI    : t_FUNCT3 := 3X"5";
constant FUNCT3_SRAI    : t_FUNCT3 := 3X"5";
constant FUNCT3_ADD     : t_FUNCT3 := 3X"0";
constant FUNCT3_SUB     : t_FUNCT3 := 3X"0";
constant FUNCT3_SLL     : t_FUNCT3 := 3X"1";
constant FUNCT3_SLT     : t_FUNCT3 := 3X"2";
constant FUNCT3_SLTU    : t_FUNCT3 := 3X"3";
constant FUNCT3_XOR     : t_FUNCT3 := 3X"4";
constant FUNCT3_SRL     : t_FUNCT3 := 3X"5";
constant FUNCT3_SRA     : t_FUNCT3 := 3X"5";
constant FUNCT3_OR      : t_FUNCT3 := 3X"6";
constant FUNCT3_AND     : t_FUNCT3 := 3X"7";
constant FUNCT3_FENCE   : t_FUNCT3 := 3X"0";
constant FUNCT3_ECALL   : t_FUNCT3 := 3X"0";
constant FUNCT3_EBREAK  : t_FUNCT3 := 3X"0";
```

### Funções de 7 bits RV32I <Badge text="constant"/>

Todos os FUNCT_7 do Conjunto Base de Instruções RISC-V de 32 bits para inteiros.

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
