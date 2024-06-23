## Constantes Globais - Pacote WORK.CPU {style="font-size: 2em;"}

Para facilitar o desenvolvimento, algumas constantes globais foram definidas.

### Largura de Dados <Badge text="WORK.CPU.DATA_WIDTH"/>

É uma constante natural que herda o valor `XLEN` do Pacote RV32I, usada para definir
a largura de um vetor de dados.

```vhdl
constant DATA_WIDTH              : natural := WORK.RV32I.XLEN;
```

### Largura de Instrução <Badge text="WORK.CPU.INSTRUCTION_WIDTH"/>

É uma constante natural que herda o valor `INSTRUCTION_WIDTH` do Pacote RV32I, usada para definir
a largura de uma instrução.

```vhdl
constant INSTRUCTION_WIDTH       : natural := WORK.RV32I.INSTRUCTION_WIDTH;
```

### Largura de Opcode <Badge text="WORK.CPU.OPCODE_WIDTH"/>

É uma constante natural que herda o valor `OPCODE_WIDTH` do Pacote RV32I, usada para definir
a largura de um opcode.

```vhdl
constant OPCODE_WIDTH            : natural := WORK.RV32I.OPCODE_WIDTH;
```

### Largura de Endereço de Registrador <Badge text="WORK.CPU.REGISTER_ADDRESS_WIDTH"/>

É uma constante natural que define a largura do endereço de um registrador no banco 
de registradores.

```vhdl
constant REGISTER_ADDRESS_WIDTH  : natural := 5;
```

### Largura de Controle de Execução <Badge text="WORK.CPU.EXECUTION_CONTROL_WIDTH"/>

É uma constante natural que define a largura do vetor de controle da Unidade de Execução.

```vhdl
constant EXECUTION_CONTROL_WIDTH : natural := 4;
```

### Intervalos de Bits <Badge type="danger" text="subtype"/>

As constantes globais foram usadas para criar subtipos de intervalos de bits.

```vhdl
subtype DATA_RANGE              is natural range (DATA_WIDTH              - 1) downto 0;
subtype INSTRUCTION_RANGE       is natural range (INSTRUCTION_WIDTH       - 1) downto 0;
subtype OPCODE_RANGE            is natural range (OPCODE_WIDTH            - 1) downto 0;
subtype REGISTER_ADDRESS_RANGE  is natural range (REGISTER_ADDRESS_WIDTH  - 1) downto 0;
subtype FUNCTION_RANGE          is natural range (EXECUTION_CONTROL_WIDTH - 1) downto 0;
```

### Subtipos de Dados <Badge type="danger" text="subtype"/>

Os subtipos de intervalos de bits foram usados para criar subtypos de dados.

```vhdl
subtype t_DATA        is std_logic_vector(DATA_RANGE);
subtype t_PROGRAM     is std_logic_vector(INSTRUCTION_RANGE);
subtype t_OPCODE      is std_logic_vector(OPCODE_RANGE);
subtype t_REGISTER    is std_logic_vector(REGISTER_ADDRESS_RANGE);
subtype t_FUNCTION    is std_logic_vector(FUNCTION_RANGE);
```