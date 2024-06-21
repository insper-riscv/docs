## Estruturas de Dados - Pacote WORK.RV32I {style="font-size: 2em;"}

Para simplificar as operações realizadas pelo processador, foram definidas funções
que determinam o tipo de instrução sendo executada, o imediato correspondente a
essa instrução, assim como a fragmentação da instrução em vetores menore de dados,
cada um com sua própria utilidade.

### Função de Fragmentação <Badge text="WORK.RV32I.to_instruction"/>

Função que separa a instrução em diferentes vetores de dados.

```vhdl
function to_instruction(
        in_vec : std_logic_vector(INSTRUCTION_RANGE)
    ) return t_INSTRUCTION is
        variable out_vec : t_INSTRUCTION;
    begin
        out_vec.funct_3            := in_vec(FUNCT3_RANGE);
        out_vec.funct_7            := in_vec(FUNCT7_RANGE);
        out_vec.select_source_2    := in_vec(24 downto 20);
        out_vec.select_source_1    := in_vec(19 downto 15);
        out_vec.select_destination := in_vec(11 downto  7);
        out_vec.immediate_i        := to_immediate_i(in_vec);
        out_vec.immediate_s        := to_immediate_s(in_vec);
        out_vec.immediate_b        := to_immediate_b(in_vec);
        out_vec.immediate_u        := to_immediate_u(in_vec);
        out_vec.immediate_j        := to_immediate_j(in_vec);
        out_vec.shamt              := in_vec(24 downto 20);
        out_vec.opcode             := in_vec(OPCODE_RANGE);
        out_vec.encoding           := to_instruction_type(out_vec.opcode);

        return out_vec;
    end function;
```

### Função de Tipagem <Badge text="WORK.RV32I.to_instruction_type"/>

Função que define o tipo da instrução sendo executada com base no opcode. Os tipos
possíveis são:

- `Tipo R` <Badge type="neutral" text="WORK.RV32I.INSTRUCTION_R_TYPE"/>

Instruções que realizam operações entre registradores.

- `Tipo I` <Badge type="neutral" text="WORK.RV32I.INSTRUCTION_I_TYPE"/>

Instruções que realizam operações usando valor do imediato (presente na instrução), e instruções 
de carregar valores da memória RAM no banco de registradores.

- `Tipo S` <Badge type="neutral" text="WORK.RV32I.INSTRUCTION_S_TYPE"/>

Instruções que realizam operações de armazenamento valores na memória RAM.

- `Tipo B` <Badge type="neutral" text="WORK.RV32I.INSTRUCTION_S_TYPE"/>

Instruções que realizam desvio.

- `Tipo U` <Badge type="neutral" text="WORK.RV32I.INSTRUCTION_S_TYPE"/>

Instruções que carregam valores direto da instrução nos bits mais significativos de um registrador.

- `Tipo J` <Badge type="neutral" text="WORK.RV32I.INSTRUCTION_S_TYPE"/>

Instrução JAL.

```vhdl
function to_instruction_type(
        in_vec : t_OPCODE
    ) return t_INSTRUCTION_TYPE is
        -- No variables
    begin
        case in_vec is
            when
                OPCODE_OP =>
                return INSTRUCTION_R_TYPE;
            when
                OPCODE_JALR   |
                OPCODE_LOAD   |
                OPCODE_OP_IMM |
                OPCODE_SYNCH  |
                OPCODE_SYSTEM =>
                return INSTRUCTION_I_TYPE;
            when
                OPCODE_STORE =>
                return INSTRUCTION_S_TYPE;
            when
                OPCODE_BRANCH =>
                return INSTRUCTION_B_TYPE;
            when
                OPCODE_LUI   |
                OPCODE_AUIPC =>
                return INSTRUCTION_U_TYPE;
            when
                OPCODE_JAL =>
                return INSTRUCTION_J_TYPE;
            when
                others =>
                return INSTRUCTION_R_TYPE;
        end case;
    end function;
```

### Função de Imediato Tipo I <Badge text="WORK.RV32I.to_immediate_i"/>

Função responsável por gerar o Imediato para instruções do tipo I.

```vhdl
function to_immediate_i(
    in_vec : std_logic_vector(INSTRUCTION_RANGE)
) return t_DATA is
    variable out_vec : t_DATA;
begin
    out_vec(31 downto 11) := (others => in_vec(31));
    out_vec(10 downto  0) := in_vec(30 downto 20);

    return out_vec;
end function;
```

### Função de Imediato Tipo S <Badge text="WORK.RV32I.to_immediate_s"/>

Função responsável por gerar o Imediato para instruções do tipo S.

```vhdl
function to_immediate_s(
    in_vec : std_logic_vector(INSTRUCTION_RANGE)
) return t_DATA is
    variable out_vec : t_DATA;
begin
    out_vec(31 downto 11) := (others => in_vec(31));
    out_vec(10 downto  0) := in_vec(30 downto 25) & in_vec(11 downto 7);

    return out_vec;
end function;
```

### Função de Imediato Tipo B <Badge text="WORK.RV32I.to_immediate_b"/>

Função responsável por gerar o Imediato para instruções do tipo B.

```vhdl
function to_immediate_b(
    in_vec : std_logic_vector(INSTRUCTION_RANGE)
) return t_DATA is
    variable out_vec : t_DATA;
begin
    out_vec(31 downto 12) := (others => in_vec(31));
    out_vec(11 downto  0) := in_vec(7) & in_vec(30 downto 25) & in_vec(11 downto 8) & '0';

    return out_vec;
end function;
```

### Função de Imediato Tipo U <Badge text="WORK.RV32I.to_immediate_u"/>

Função responsável por gerar o Imediato para instruções do tipo U.

```vhdl
function to_immediate_u(
    in_vec : std_logic_vector(INSTRUCTION_RANGE)
) return t_DATA is
    variable out_vec : t_DATA;
begin
    out_vec(31 downto  12) := in_vec(31 downto 12);
    out_vec(11 downto  0)  := (others => '0');

    return out_vec;
end function;
```

### Função de Imediato Tipo J <Badge text="WORK.RV32I.to_immediate_j"/>

Função responsável por gerar o Imediato para instruções do tipo J.

```vhdl
function to_immediate_j(
    in_vec : std_logic_vector(INSTRUCTION_RANGE)
) return t_DATA is
    variable out_vec : t_DATA;
begin
    out_vec(31 downto 21) := (others => in_vec(31));
    out_vec(20 downto  0) := in_vec(31) & in_vec(19 downto 12) & in_vec(20) & in_vec(30 downto 21) & '0';

    return out_vec;
end function;
```
