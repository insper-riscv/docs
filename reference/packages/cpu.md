---
outline: [2, 3]
---

# Pacote CPU <Badge type="info" text="WORK.CPI" />

[<Badge type="tip" text="Arquivo: CPU.vhd &boxbox;" />](https://github.com/insper-riscv/core/blob/main/src/CPU.vhd)

Para a topologia, um conjunto de registros foi criado para definir o fluxo de
dados em alto nível. Isso possibilita simplificar a implementação de pipelining
e manter o código limpo. A partir dos seguintes registros é possível declarar
todos os pontos de controle e de dados de todo o fluxo de execução da
arquitetura. Além disso, também são especificados valores que caracterizem o
comportamento ocioso da arquitetura.

## Subtipos

| Nome                     | Tipo                                                 | Descrição                                |
| ------------------------ | ---------------------------------------------------- | ---------------------------------------- |
| `DATA_RANGE`             | natural range (DATA_WIDTH - 1) downto 0              | Faixa do vetor de dados                  |
| `INSTRUCTION_RANGE`      | natural range (INSTRUCTION_WIDTH - 1) downto 0       | Faixa do vetor de programa               |
| `OPCODE_RANGE`           | natural range (OPCODE_WIDTH - 1) downto 0            | Faixa do vetor de Opcode                 |
| `REGISTER_ADDRESS_RANGE` | natural range (REGISTER_ADDRESS_WIDTH - 1) downto 0  | Faixa do vetor de seleção de registrador |
| `FUNCTION_RANGE`         | natural range (EXECUTION_CONTROL_WIDTH - 1) downto 0 | Faixa do vetor de seleção de função      |
| `t_DATA`                 | std_logic_vector(DATA_RANGE)                         | Vetor de dados                           |
| `t_PROGRAM`              | std_logic_vector(INSTRUCTION_RANGE)                  | Vetor de programa                        |
| `t_OPCODE`               | std_logic_vector(OPCODE_RANGE)                       | Vetor de Opcode                          |
| `t_REGISTER`             | std_logic_vector(REGISTER_ADDRESS_RANGE)             | Vetor de seleção de registrador          |
| `t_FUNCTION`             | std_logic_vector(FUNCTION_RANGE)                     | Vetor de seleção de função               |

## Constantes

| Nome                      | Tipo                | Descrição                                  |
| ------------------------- | ------------------- | ------------------------------------------ |
| `DATA_WIDTH`              | natural             | Largura do vetor de dados                  |
| `INSTRUCTION_WIDTH`       | natural             | Largura do vetor de programa               |
| `OPCODE_WIDTH`            | natural             | Largura do vetor de Opcode                 |
| `REGISTER_ADDRESS_WIDTH`  | natural             | Largura do vetor de seleção de registrador |
| `EXECUTION_CONTROL_WIDTH` | natural             | Largura do vetor de seleção de função      |
| `NULL_CONTROL_IF`         | t_CONTROL_IF        | Registro nulo de `t_CONTROL_IF`            |
| `NULL_CONTROL_ID`         | t_CONTROL_ID        | Registro nulo de `NULL_CONTROL_ID`         |
| `NULL_CONTROL_EX`         | t_CONTROL_EX        | Registro nulo de `NULL_CONTROL_EX`         |
| `NULL_CONTROL_MEM`        | t_CONTROL_MEM       | Registro nulo de `NULL_CONTROL_MEM`        |
| `NULL_CONTROL_WB`         | t_CONTROL_WB        | Registro nulo de `NULL_CONTROL_WB`         |
| `NULL_SIGNALS_IF_ID`      | t_SIGNALS_IF_ID     | Registro nulo de `NULL_SIGNALS_IF_ID`      |
| `NULL_SIGNALS_ID_EX`      | t_SIGNALS_ID_EX     | Registro nulo de `NULL_SIGNALS_ID_EX`      |
| `NULL_SIGNALS_EX_MEM`     | t_SIGNALS_EX_MEM    | Registro nulo de `NULL_SIGNALS_EX_MEM`     |
| `NULL_SIGNALS_MEM_WB`     | t_SIGNALS_MEM_WB    | Registro nulo de `NULL_SIGNALS_MEM_WB`     |
| `NULL_FORWARD_BRANCH`     | t_FORWARD_BRANCH    | Registro nulo de `NULL_FORWARD_BRANCH`     |
| `NULL_FORWARD_EXECUTION`  | t_FORWARD_EXECUTION | Registro nulo de `NULL_FORWARD_EXECUTION`  |

## Registros

### `t_CONTROL_IF`

Pontos de controle do estágio Busca Instrução (Instruction Fetch)

| Nome            | Tipo      | Descrição                                  |
| --------------- | --------- | ------------------------------------------ |
| `enable_stall`  | std_logic | Trava a contagem do programa               |
| `select_source` | std_logic | Seleciona a origem do contador de programa |

### `t_CONTROL_ID`

Pontos de controle do estágio Decodifica Instrução (Instruction Decode)

| Nome            | Tipo      | Descrição                              |
| --------------- | --------- | -------------------------------------- |
| `enable_branch` | std_logic | Indica que é uma instrução do tipo `B` |
| `enable_jalr`   | std_logic | Indica que é uma instrução `JALR`      |
| `enable_jump`   | std_logic | Indica que é uma instrução do tipo `J` |
| `select_jump`   | std_logic | Seleciona um endereço de desvio        |

### `t_CONTROL_EX`

Pontos de controle do estágio Executa (Execute)

| Nome              | Tipo                | Descrição                               |
| ----------------- | ------------------- | --------------------------------------- |
| `select_source_1` | std_logic_vector<2> | Seleciona a fonte da entrada `source_1` |
| `select_source_2` | std_logic_vector<2> | Seleciona a fonte da entrada `source_2` |

### `t_CONTROL_MEM`

Pontos de controle do estágio Acessa a Memória (Memory Access)

| Nome           | Tipo      | Descrição                     |
| -------------- | --------- | ----------------------------- |
| `enable_read`  | std_logic | Habilita a leitura da memória |
| `enable_write` | std_logic | Habilita a escrina na memória |

### `t_CONTROL_WB`

Pontos de controle do estágio Escrita de Retorno (Write Back)

| Nome                 | Tipo      | Descrição                                                |
| -------------------- | --------- | -------------------------------------------------------- |
| `enable_destination` | std_logic | Habilita a escrita no Arquivo de Registradores           |
| `select_destination` | std_logic | Seleciona a fonte da escrita no Arquivo de Registradores |

### `t_SIGNALS_IF_ID`

Sinais passados do estágio Busca Instrução para o estágio Decodifica Instrução,
contendo os dados e pontos de controle registrados no pipeline

| Nome               | Type   | Descrição                     |
| ------------------ | ------ | ----------------------------- |
| `address_program`  | t_DATA | Vetor do Contador de Programa |
| `data_instruction` | t_DATA | Valor de instrução            |

### `t_SIGNALS_ID_EX`

Sinais passados do estágio Decodifica Instrução para o estágio Executa, contendo
os dados e pontos de controle registrados no pipeline

| Nome                 | Tipo                | Descrição                                        |
| -------------------- | ------------------- | ------------------------------------------------ |
| `control_ex`         | t_CONTROL_EX        | Pontos de controle do estágio Executa            |
| `control_mem`        | t_CONTROL_MEM       | Pontos de controle do estágio Acessa a memória   |
| `control_wb`         | t_CONTROL_WB        | Pontos de controle do estágio Escrita de Retorno |
| `address_program`    | t_DATA              | Vetor do Contador de Programa                    |
| `data_source_1`      | t_DATA              | Vetor `source_1` do arquivo de registradores     |
| `data_source_2`      | t_DATA              | Vetor `source_2` do arquivo de registradores     |
| `data_immediate`     | t_DATA              | Vetor do Imediato                                |
| `funct_7`            | WORK.RV32I.t_FUNCT7 | Vetor do `funct_7`                               |
| `funct_3`            | WORK.RV32I.t_FUNCT3 | Vetor do `funct_3`                               |
| `opcode`             | WORK.RV32I.t_OPCODE | Vetor do Opcode                                  |
| `select_destination` | t_REGISTER          | Vetor do seletor do `destination`                |
| `select_source_1`    | t_REGISTER          | Vetor do seletor do `source_1`                   |
| `select_source_2`    | t_REGISTER          | Vetor do seletor do `source_2`                   |

### `t_SIGNALS_EX_MEM`

Sinais passados do estágio Executa para o estágio Acessa a Memória, contendo os
dados e pontos de controle registrados no pipeline

| Nome                 | Tipo                | Descrição                                        |
| -------------------- | ------------------- | ------------------------------------------------ |
| `control_mem`        | t_CONTROL_MEM       | Pontos de controle do estágio Acessa a memória   |
| `control_wb`         | t_CONTROL_WB        | Pontos de controle do estágio Escrita de Retorno |
| `data_destination`   | t_DATA              | Vetor `destination` do Executa                   |
| `data_source_2`      | t_DATA              | Vetor do seletor do `source_2`                   |
| `select_destination` | t_REGISTER          | Vetor do seletor do `destination`                |
| `funct_3`            | WORK.RV32I.t_FUNCT3 | Vetor do `funct_3`                               |

### `t_SIGNALS_MEM_WB`

Sinais passados do estágio Acessa a Memória para o estágio Escrita de Retorno,
contendo os dados e pontos de controle registrados no pipeline

| Nome                 | Tipo         | Descrição                                        |
| -------------------- | ------------ | ------------------------------------------------ |
| `control_wb`         | t_CONTROL_WB | Pontos de controle do estágio Escrita de Retorno |
| `data_memory`        | t_DATA       | Vetor `destination` da Memória                   |
| `data_destination`   | t_DATA       | Vetor `destination` do Executa                   |
| `select_destination` | t_REGISTER   | Vetor do seletor do `destination`                |

### `t_FORWARD_BRANCH`

Dados e pontos de controle de forwarding do comparador de desvio no estágio
Decodifica Instrução

| Nome              | Tipo              | Descrição                                       |
| ----------------- | ----------------- | ----------------------------------------------- |
| `select_source_1` | std_logic         | Vetor do seletor de forwarding do `source_1`    |
| `select_source_2` | std_logic         | Vetor do seletor de forwarding do `source_2`    |
| `source_mem`      | WORK.RV32I.t_DATA | Vetor `destination` do estágio Acessa a Memória |

### `t_FORWARD_EXECUTION`

Dados e pontos de controle de forwarding da Unidade Lógica e Aritmética no
estágio Executa

| Nome              | Tipo                | Descrição                                         |
| ----------------- | ------------------- | ------------------------------------------------- |
| `select_source_1` | std_logic_vector<2> | Vetor do seletor de forwarding do `source_1`      |
| `select_source_2` | std_logic_vector<2> | Vetor do seletor de forwarding do `source_2`      |
| `source_mem`      | WORK.RV32I.t_DATA   | Vetor `destination` do estágio Acessa a Memória   |
| `source_wb`       | WORK.RV32I.t_DATA   | Vetor `destination` do estágio Escrita de Retorno |

## Relação entre os registros

<pan-container>

![](/images/reference/packages/cpu_records_er.mermaid.drawio.svg){class="dark-invert"}

</pan-container>
