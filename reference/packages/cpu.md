---
outline: [2, 3]
---

# Pacote `WORK.CPU`

<a href="https://github.com/insper-riscv/core/blob/main/src/CPU.vhd" target="blank"><Badge type="tip" text="CPU.vhd &boxbox;" /></a>

Para a topologia, um conjunto de registros foi criado para definir o fluxo de
dados em alto nível. Isso possibilita simplificar a implementação de pipelining
e manter o código limpo. A partir dos seguintes registros é possível declarar
todos os pontos de controle e de dados de todo o fluxo de execução da
arquitetura. Além disso, também são especificados valores que caracterizem o
comportamento ocioso da arquitetura.

## Tipos

### Controles do IF

Pontos de controle do estágio Busca Instrução. Sendo:

| Atributo        | Descrição                                  |
| :-------------- | :----------------------------------------- |
| `enable_stall`  | Trava a contagem do programa               |
| `select_source` | Seleciona a origem do contador de programa |

#### Interface

```vhdl
type t_CONTROL_IF is record
    enable_stall  : std_logic;
    select_source : std_logic;
end record;
```

#### Usagem

```vhdl
constant NULL_CONTROL_IF : WORK.CPU.t_CONTROL_IF := (
    enable_stall  => '0',
    select_source => '0'
);
```

---

### Controles do ID

Pontos de controle do estágio Decodifica Instrução. Sendo:

| Atributo        | Descrição                              |
| :-------------- | :------------------------------------- |
| `enable_branch` | Indica que é uma instrução do tipo `B` |
| `enable_jalr`   | Indica que é uma instrução `JALR`      |
| `enable_jump`   | Indica que é uma instrução do tipo `J` |
| `select_jump`   | Seleciona um endereço de desvio        |

#### Interface

```vhdl
type t_CONTROL_ID is record
    enable_branch : std_logic;
    enable_jalr   : std_logic;
    enable_jump   : std_logic;
    select_jump   : std_logic;
end record;
```

#### Usagem

```vhdl
constant NULL_CONTROL_ID : WORK.CPU.t_CONTROL_ID := (
    enable_branch   => '0',
    enable_jalr     => '0',
    enable_jump     => '0',
    select_jump     => '0'
);
```

---

### Controles do EX

Pontos de controle do estágio Executa. Sendo:

| Atributo          | Descrição                               |
| :---------------- | :-------------------------------------- |
| `select_source_1` | Seleciona a fonte da entrada `source_1` |
| `select_source_2` | Seleciona a fonte da entrada `source_2` |

#### Interface

```vhdl
type t_CONTROL_EX is record
    select_source_1  : std_logic_vector(1 downto 0);
    select_source_2  : std_logic_vector(1 downto 0);
end record;
```

#### Usagem

```vhdl
constant NULL_CONTROL_EX : WORK.CPU.t_CONTROL_EX := (
    select_source_1  => (others => '0'),
    select_source_2  => (others => '0')
);
```

---

### Controles do MEM

Pontos de controle do estágio Acessa a Memória. Sendo:

| Atributo       | Descrição                     |
| :------------- | :---------------------------- |
| `enable_read`  | Habilita a leitura da memória |
| `enable_write` | Habilita a escrina na memória |

#### Interface

```vhdl
type t_CONTROL_MEM is record
    enable_read  : std_logic;
    enable_write : std_logic;
end record;
```

#### Usagem

```vhdl
constant NULL_CONTROL_MEM : WORK.CPU.t_CONTROL_MEM := (
    enable_read  => '0',
    enable_write => '0'
);
```

---

### Controles do WB

Pontos de controle do estágio Escrite de Retorno. Sendo:

| Atributo             | Descrição                                                |
| :------------------- | :------------------------------------------------------- |
| `enable_destination` | Habilita a escrita no Arquivo de Registradores           |
| `select_destination` | Seleciona a fonte da escrita no Arquivo de Registradores |

#### Interface

```vhdl
type t_CONTROL_WB is record
    enable_destination : std_logic;
    select_destination : std_logic;
end record;
```

#### Usagem

```vhdl
constant NULL_CONTROL_WB : WORK.CPU.t_CONTROL_WB := (
    enable_destination => '0',
    select_destination => '0'
);
```

---

### Dados do IF/ID

Este é o registro dos sinais do estágio Decodifica instrução, que recebe os
sinais do Busca Instrução e os registra no pipeline. Sendo:

| Atributo           | Descrição                     |
| :----------------- | :---------------------------- |
| `address_program`  | Vetor do Contador de Programa |
| `data_instruction` | Valor de instrução            |

#### Interface

```vhdl
type t_SIGNALS_IF_ID is record
    address_program  : t_DATA;
    data_instruction : t_DATA;
end record;
```

#### Usagem

```vhdl
constant NULL_SIGNALS_IF_ID : WORK.CPU.t_SIGNALS_IF_ID := (
    address_program  => (others => '0'),
    data_instruction => WORK.RV32I.NULL_INSTRUCTION
);
```

---

### Dados do ID/EX

Este é o registro dos sinais do estágio Executa, que recebe os sinais do
Decodifica instrução e os registra no pipeline. Sendo:

| Atributo             | Descrição                                        |
| :------------------- | :----------------------------------------------- |
| `control_ex`         | Pontos de controle do estágio Executa            |
| `control_mem`        | Pontos de controle do estágio Acessa a memória   |
| `control_wb`         | Pontos de controle do estágio Escrita de Retorno |
| `address_program`    | Vetor do Contador de Programa                    |
| `data_source_1`      | Vetor `source_1` do arquivo de registradores     |
| `data_source_2`      | Vetor `source_2` do arquivo de registradores     |
| `data_immediate`     | Vetor do Imediato                                |
| `funct_7`            | Vetor do `funct_7`                               |
| `funct_3`            | Vetor do `funct_3`                               |
| `opcode`             | Vetor do `opcode`                                |
| `select_destination` | Vetor do seletor do `destination`                |
| `select_source_1`    | Vetor do seletor do `source_1`                   |
| `select_source_2`    | Vetor do seletor do `source_2`                   |

#### Interface

```vhdl
type t_SIGNALS_ID_EX is record
    control_ex         : t_CONTROL_EX;
    control_mem        : t_CONTROL_MEM;
    control_wb         : t_CONTROL_WB;
    address_program    : t_DATA;
    data_source_1      : t_DATA;
    data_source_2      : t_DATA;
    data_immediate     : t_DATA;
    funct_7            : WORK.RV32I.t_FUNCT7;
    funct_3            : WORK.RV32I.t_FUNCT3;
    opcode             : WORK.RV32I.t_OPCODE;
    select_destination : t_REGISTER;
    select_source_1    : t_REGISTER;
    select_source_2    : t_REGISTER;
end record;
```

#### Usagem

```vhdl
constant NULL_SIGNALS_ID_EX : WORK.CPU.t_SIGNALS_ID_EX := (
    control_ex         => WORK.CPU.NULL_CONTROL_EX,
    control_mem        => WORK.CPU.NULL_CONTROL_MEM,
    control_wb         => WORK.CPU.NULL_CONTROL_WB,
    address_program    => (others => '0'),
    data_source_1      => (others => '0'),
    data_source_2      => (others => '0'),
    data_immediate     => (others => '0'),
    funct_7            => WORK.RV32I.FUNCT7_ADD,
    funct_3            => WORK.RV32I.FUNCT3_ADDI,
    opcode             => WORK.RV32I.OPCODE_OP_IMM,
    select_source_1    => (others => '0'),
    select_source_2    => (others => '0'),
    select_destination => (others => '0')
);
```

---

### Dados do EX/MEM

Este é o registro dos sinais do estágio Acesso a Memória, que recebe os sinais
do Executa e os registra no pipeline. Sendo:

| Atributo             | Descrição                                        |
| :------------------- | :----------------------------------------------- |
| `control_mem`        | Pontos de controle do estágio Acessa a memória   |
| `control_wb`         | Pontos de controle do estágio Escrita de Retorno |
| `data_destination`   | Vetor `destination` do Executa                   |
| `data_source_2`      | Vetor do seletor do `source_2`                   |
| `select_destination` | Vetor do seletor do `destination`                |
| `funct_3`            | Vetor do `funct_3`                               |

#### Interface

```vhdl
type t_SIGNALS_EX_MEM is record
    control_mem        : t_CONTROL_MEM;
    control_wb         : t_CONTROL_WB;
    data_destination   : t_DATA;
    data_source_2      : t_DATA;
    select_destination : t_REGISTER;
    funct_3            : WORK.RV32I.t_FUNCT3;
end record;
```

#### Usagem

```vhdl
constant NULL_SIGNALS_EX_MEM : WORK.CPU.t_SIGNALS_EX_MEM := (
    control_mem        => WORK.CPU.NULL_CONTROL_MEM,
    control_wb         => WORK.CPU.NULL_CONTROL_WB,
    data_destination   => (others => '0'),
    data_source_2      => (others => '0'),
    select_destination => (others => '0'),
    funct_3            => WORK.RV32I.FUNCT3_ADDI
);
```

---

### Dados do MEM/WB

Este é o registro dos sinais do estágio Escrita de Retorno, que recebe os sinais
do Acesso a Memória e os registra no pipeline. Sendo:

| Atributo             | Descrição                                        |
| :------------------- | :----------------------------------------------- |
| `control_wb`         | Pontos de controle do estágio Escrita de Retorno |
| `data_memory`        | Vetor `destination` da Memória                   |
| `data_destination`   | Vetor `destination` do Executa                   |
| `select_destination` | Vetor do seletor do `destination`                |

#### Interface

```vhdl
type t_SIGNALS_MEM_WB is record
    control_wb         : t_CONTROL_WB;
    data_memory        : t_DATA;
    data_destination   : t_DATA;
    select_destination : t_REGISTER;
end record;
```

#### Usagem

```vhdl
constant NULL_SIGNALS_MEM_WB : WORK.CPU.t_SIGNALS_MEM_WB := (
    control_wb         => WORK.CPU.NULL_CONTROL_WB,
    data_memory        => (others => '0'),
    data_destination   => (others => '0'),
    select_destination => (others => '0')
);
```

---

### Forward de desvio

Este é o registro dos controles e sinais de forwarding do comparador de desvio
no estágio Decodifica Instrução. Sendo:

| Atributo          | Descrição                                       |
| :---------------- | :---------------------------------------------- |
| `select_source_1` | Vetor do seletor de forwarding do `source_1`    |
| `select_source_2` | Vetor do seletor de forwarding do `source_2`    |
| `source_mem`      | Vetor `destination` do estágio Acessa a Memória |

#### Interface

```vhdl
type t_FORWARD_BRANCH is record
    select_source_1 : std_logic_vector(1 downto 0);
    select_source_2 : std_logic_vector(1 downto 0);
    source_mem      : WORK.RV32I.t_DATA;
end record;
```

---

### Forward de execução

Este é o registro dos controles e sinais de forwarding da unidade lógica e
aritmética no estágio Executa. Sendo:

| Atributo          | Descrição                                         |
| :---------------- | :------------------------------------------------ |
| `select_source_1` | Vetor do seletor de forwarding do `source_1`      |
| `select_source_2` | Vetor do seletor de forwarding do `source_2`      |
| `source_mem`      | Vetor `destination` do estágio Acessa a Memória   |
| `source_wb`       | Vetor `destination` do estágio Escrita de Retorno |

#### Interface

```vhdl
type t_FORWARD_EXECUTION is record
    select_source_1 : std_logic_vector(1 downto 0);
    select_source_2 : std_logic_vector(1 downto 0);
    source_mem      : WORK.RV32I.t_DATA;
    source_wb       : WORK.RV32I.t_DATA;
end record;
```

## Relação entre os registros

<pan-container>

![](/images/reference/packages/cpu_records_er.mermaid.drawio.svg){class="dark-invert"}

</pan-container>
