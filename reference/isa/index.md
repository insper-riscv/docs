---
outline: [2, 3]
---

# Conjunto de Instruções

## Carrega Constante

### `LUI` <Badge type="neutral" text="Especificação: Base RV32I" />

_Load Upper Immediate_ (Carregar Superior Imediato).

Carrega registradores com valores constantes de 32 _bits_. `LUI` guarda o valor
imediato dos 20 _bits_ mais significativos da instrução nos 20 _bits_ mais
significativos do registrador de destino `rd`, preenchendo os 12 _bits_ menos
significativos com zero.

#### Formato

```asm
lui rd, imm
```

#### Implementação

```c
x[rd] = imm[31:12] << 12
```
#### Sintaxe

| Tipo |   31-12    | 11-7 |    6-0    |
| :--: | :--------: | :--: | :-------: |
|  U   | imm[31:12] |  rd  | `0110111` |

Table: **Tabela LUI** - sintaxe da instrução `LUI`.


---

### `AUIPC` <Badge type="neutral" text="Especificação: Base RV32I" />

_Add Upper Immediate_ (Adiciona Superior Imediato).

Desloca o valor do imediato da instrução, que consiste nos 20 _bits_ mais
significativos, 12 _bits_ à esquerda, preenchendo os 12 _bits_ menos
significativos com zero, e o adiciona ao PC. O resultado é então escrito no
registrador de destino `rd`.

#### Formato

```asm
auipc rd, imm
```

#### Implementação

```c
x[rd] = pc + sext(imm[31:12] << 12)
```
#### Sintaxe

| Tipo |   31-12    | 11-7 |    6-0    |
| :--: | :--------: | :--: | :-------: |
|  U   | imm[31:12] |  rd  | `0010111` |

Table: **Tabela AUIPC** - Tabela com sintaxe da instrução `AUIPC`.


## Lógica Aritmética

### `ADD` <Badge type="neutral" text="Especificação: Base RV32I" />

_Add_ (Soma).

Soma o valor armazenado no registrador `rs1` com o valor armazenado no
registrador `rs2` e armazena o resultado no registrador de destino `rd`. Em caso
de overflow, ele é ignorado.

#### Formato

```asm
add rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] + x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000000` |  rs2  |  rs1  | `000` |  rd  | OP  |

Table: **Tabela ADD** - Tabela com sintaxe da instrução `ADD`.


---

### `ADDI` <Badge type="neutral" text="Especificação: Base RV32I" />

_Add Immediate_ (Soma Imediato).

Soma o valor armazenado no registrador `rs1` com o sinal estendido do imediato e
armazena o resultado no registrador de destino `rd`. Em caso de overflow, ele é
ignorado.

#### Formato

```asm
addi rd, rs1, immediate
```

#### Implementação

```c
x[rd] = x[rs1] + sext(immediate)
```
#### Sintaxe

| Tipo |   31-20   | 19-15 | 14-12 | 11-7 |  6-0   |
| :--: | :-------: | :---: | :---: | :--: | :----: |
|  I   | imm[11:0] |  rs1  | `000` |  rd  | OP-IMM |

Table: **Tabela ADDI** - Tabela com sintaxe da instrução `ADDI`.


---

### `SUB` <Badge type="neutral" text="Especificação: Base RV32I" />

_Subtract_ (Subtrai).

Subtrai o valor armazenado no registrador `rs2` do valor armazenado no
registrador `rs1` e armazena o resultado no registrador de destino `rd`. Em caso
de overflow, ele é ignorado.

#### Formato

```asm
sub rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] - x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0100000` |  rs2  |  rs1  | `000` |  rd  | OP  |

Table: **Tabela SUB** - Tabela com sintaxe da instrução `SUB`.


---

### `MUL` <Badge type="neutral" text="Especificação: extensão “M” RISC-V" />

_Multiply_ (Multiplica).

Multiplica o valor armazenado no registrador `rs1` pelo valor armazenado no
registrador `rs2` e armazena o resultado no registrador de destino `rd`. Em caso
de overflow, ele é ignorado.

#### Formato

```asm
mul rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] × x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000001` |  rs2  |  rs1  | `000` |  rd  | OP  |

Table: **Tabela MUL** - Tabela com sintaxe da instrução `MUL`.


---

### `MULH` <Badge type="neutral" text="Especificação: extensão “M” RISC-V" />

_Multiply High_ (Multiplica Superior).

Multiplica o valor armazenado no registrador `rs1` pelo valor armazenado no
registrador `rs2` considerando que são números de complemento de dois e armazena
a metade superior do produto no registrador de destino `rd`.

#### Formato

```asm
mulh rd, rs1, rs2
```

#### Implementação

```c
x[rd] = (x[rs1] × x[rs2]) >> XLEN
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000001` |  rs2  |  rs1  | `001` |  rd  | OP  |

Table: **Tabela MULH** - Tabela com sintaxe da instrução `MULH`.


---

### `MULHSU` <Badge type="neutral" text="Especificação: extensão “M” RISC-V" />

_Multiply High Signed and Unsigned_ (Multiplica Superior com Sinal e Sem
Sinal).

Multiplica o valor armazenado no registrador `rs1` pelo valor armazenado no
registrador `rs2`, considerando que o valor em rs1 é de complemento de dois e
que o valor em rs2 é um número sem sinal, armazenando a metade superior do
produto no registrador de destino `rd`.

#### Formato

```asm
mulhsu rd, rs1, rs2
```

#### Implementação

```c
x[rd] = (x[rs1] * x[rs2]) >> XLEN
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000001` |  rs2  |  rs1  | `010` |  rd  | OP  |

Table: **Tabela MULHSU** - Tabela com sintaxe da instrução `MULHSU`.


---

### `MULHU` <Badge type="neutral" text="Especificação: extensão “M” RISC-V" />

_Multiply High Unsigned_ (Multiplica Superior Sem Sinal).

Multiplica o valor armazenado no registrador `rs1` pelo valor armazenado no
registrador `rs2`, considerando que ambos são números sem sinal, e armazena a
metade superior do produto no registrador de destino `rd`.

#### Formato

```asm
mulhu rd, rs1, rs2
```

#### Implementação

```c
x[rd] = (x[rs1] × x[rs2]) >> XLEN
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000001` |  rs2  |  rs1  | `011` |  rd  | OP  |

Table: **Tabela MULHU** - Tabela com sintaxe da instrução `MULHU`.


---

### `DIV` <Badge type="neutral" text="Especificação: extensão “M” RISC-V" />

_Divide_ (Divide).

Divide o valor armazenado no registrador `rs1` pelo valor armazenado no
registrador `rs2`, considerando que ambos são números de complemento de dois,
arredondando para zero, e armazena o quociente no registrador de destino `rd`.

#### Formato

```asm
div rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] ÷ x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000001` |  rs2  |  rs1  | `100` |  rd  | OP  |

Table: **Tabela DIV** - Tabela com sintaxe da instrução `DIV`.


---

### `DIVU` <Badge type="neutral" text="Especificação: extensão “M” RISC-V" />

_Divide Unsigned_ (Divide Sem Sinal).

Divide o valor armazenado no registrador `rs1` pelo valor armazenado no
registrador `rs2`, considerando que são números sem sinal, arredondando para
zero, e armazena o quociente no registrador de destino `rd`.

#### Formato

```asm
div rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] ÷ x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000001` |  rs2  |  rs1  | `101` |  rd  | OP  |

Table: **Tabela DIVU** - Tabela com sintaxe da instrução `DIVU`.


---

### `REM` <Badge type="neutral" text="Especificação: extensão “M” RISC-V" />

_Remainder_ (Resto).

Divide o valor armazenado no registrador `rs1` pelo valor armazenado no
registrador `rs2`, considerando que são números de complemento de dois,
arredondando para zero, e armazena o resto no registrador de destino `rd`.

#### Formato

```asm
rem rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] % x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000001` |  rs2  |  rs1  | `110` |  rd  | OP  |

Table: **Tabela REM** - Tabela com sintaxe da instrução `REM`.


---

### `REMU` <Badge type="neutral" text="Especificação: extensão “M” RISC-V" />

_Remainder Unsigned_ (Resto Sem Sinal).

Divide o valor armazenado no registrador `rs1` pelo valor armazenado no
registrador `rs2`, considerando que são números sem sinal, arredondando para
zero, e armazena o resto no registrador de destino `rd`.

#### Formato

```asm
rem rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] % x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000001` |  rs2  |  rs1  | `111` |  rd  | OP  |

Table: **Tabela REMU** - Tabela com sintaxe da instrução `REMU`.


## Lógicas Booleana

### `XOR` <Badge type="neutral" text="Especificação: Base RV32I" />

_Exclusive OR_ (OU Exclusivo).

Realiza a operação lógica XOR,_bit_ a_bit_, entre os valores armazenados nos
registradores `rs1` e `rs2` e armazena o resultado no registrador de destino
`rd`.

#### Formato

```asm
xor rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] ˆ x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000000` |  rs2  |  rs1  | `100` |  rd  | OP  |

Table: **Tabela XOR** - Tabela com sintaxe da instrução `XOR`.


---

### `XORI` <Badge type="neutral" text="Especificação: Base RV32I" />

_Exclusive OR Immediate_ (OU Exclusivo Imediato).

Realiza a operação lógica XOR,_bit_ a_bit_, entre o valor armazenado no
registrador `rs1` e o imediato com sinal estendido e armazena o resultado no
registrador de destino `rd`.

#### Formato

```asm
xori rd, rs1, immediate
```

#### Implementação

```c
x[rd] = x[rs1] ˆ sext(immediate)
```
#### Sintaxe

| Tipo |   31-20   | 19-15 | 14-12 | 11-7 |  6-0   |
| :--: | :-------: | :---: | :---: | :--: | :----: |
|  I   | imm[11:0] |  rs1  | `100` |  rd  | OP-IMM |

Table: **Tabela XORI** - Tabela com sintaxe da instrução `XORI`.


---

### `OR` <Badge type="neutral" text="Especificação: Base RV32I" />

_OR_ (OU).

Realiza a operação lógica OR,_bit_ a_bit_, entre os valores armazenados nos
registradores `rs1` e `rs2` e armazena o resultado no registrador de destino
`rd`.

#### Formato

```asm
or rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] | x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000000` |  rs2  |  rs1  | `110` |  rd  | OP  |

Table: **Tabela OR** - Tabela com sintaxe da instrução `OR`.


---

### `ORI` <Badge type="neutral" text="Especificação: Base RV32I" />

_OR Immediate_ (OU Imediato).

Realiza a operação lógica OR,_bit_ a_bit_, entre o valor armazenado no
registrador `rs1` e o imediato com sinal estendido e armazena o resultado no
registrador de destino `rd`.

#### Formato

```asm
ori rd, rs1, immediate
```

#### Implementação

```c
x[rd] = x[rs1] | sext(immediate)
```
#### Sintaxe

| Tipo |   31-20   | 19-15 | 14-12 | 11-7 |  6-0   |
| :--: | :-------: | :---: | :---: | :--: | :----: |
|  I   | imm[11:0] |  rs1  | `110` |  rd  | OP-IMM |

Table: **Tabela ORI** - Tabela com sintaxe da instrução `ORI`.


---

### `AND` <Badge type="neutral" text="Especificação: Base RV32I" />

_AND_ (E).

Realiza a operação lógica AND,_bit_ a_bit_, entre os valores armazenados nos
registradores `rs1` e `rs2` e armazena o resultado no registrador de destino
`rd`.

#### Formato

```asm
and rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] & x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000000` |  rs2  |  rs1  | `111` |  rd  | OP  |

Table: **Tabela AND** - Tabela com sintaxe da instrução `AND`.


---

### `ANDI` <Badge type="neutral" text="Especificação: Base RV32I" />

_AND Immediate_ (E Imediato).

Realiza a operação lógica OR,_bit_ a_bit_, entre o valor armazenado no
registrador `rs1` e o imediato com sinal estendido e armazena o resultado no
registrador de destino `rd`.

#### Formato

```asm
andi rd, rs1, immediate
```

#### Implementação

```c
x[rd] = x[rs1] & sext(immediate)
```
#### Sintaxe

| Tipo |   31-20   | 19-15 | 14-12 | 11-7 |  6-0   |
| :--: | :-------: | :---: | :---: | :--: | :----: |
|  I   | imm[11:0] |  rs1  | `111` |  rd  | OP-IMM |

Table: **Tabela ANDI** - Tabela com sintaxe da instrução `ANDI`.


## Operação de Deslocamento

### `SLL` <Badge type="neutral" text="Especificação: Base RV32I" />

_Shift Left Logical_ (Desloca à Esquerda Lógico).

Desloca o valor armazenado no registrador `rs1` à esquerda pelo número de
posições indicado pelos 5 _bits_ menos significativos do valor armazenado no
registrador `rs2`. Os _bits_ remanescentes de `rs2` são ignorados. Os _bits_
vazios de `rs1` são preenchidos com zeros. O resultado é escrito no registrador
de destino `rd`.

#### Formato

```asm
sll rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] << x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000000` |  rs2  |  rs1  | `001` |  rd  | OP  |

Table: **Tabela SLL** - Tabela com sintaxe da instrução `SLL`.


---

### `SLLI` <Badge type="neutral" text="Especificação: Base RV32I" />

_Shift Left Logical Immediate_ (Desloca à Esquerda Lógico Imediato).

Desloca o valor armazenado no registrador `rs1` à esquerda pelo número de
posições indicado pelo `shamt`. Os _bits_ vazios de `rs1` são preenchidos com
zeros. O resultado é escrito no registrador de destino `rd`. Caso se decida
atualizar o processador para uma arquitetura de 64 bits, esta instrução terá sua
sintaxe alterada (o shamt e o funct7 passam a ter 6 bits cada).

#### Formato

```asm
slli rd, rs1, shamt
```

#### Implementação

```c
x[rd] = x[rs1] << shamt
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 |  6-0   |
| :--: | :-------: | :---: | :---: | :---: | :--: | :----: |
|  I   | `0000000` | shamt |  rs1  | `001` |  rd  | OP-IMM |

Table: **Tabela SLLI** - Tabela com sintaxe da instrução `SLLI`.


---

### `SRL` <Badge type="neutral" text="Especificação: Base RV32I" />

_Shift Right Logical_ (Desloca à Direita Lógico).

Desloca o valor armazenado no registrador `rs1` à direita pelo número de
posições indicado pelos 5 _bits_ menos significativos do valor armazenado no
registrador `rs2`. Os _bits_ remanescentes de `rs2` são ignorados. Os _bits_
vazios de `rs1` são preenchidos com zeros. O resultado é escrito no registrador
de destino `rd`.

#### Formato

```asm
srl rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] >> x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000000` |  rs2  |  rs1  | `101` |  rd  | OP  |

Table: **Tabela SRL** - Tabela com sintaxe da instrução `SRL`.


---

### `SRLI` <Badge type="neutral" text="Especificação: Base RV32I" />

_Shift Right Logical Immediate_ (Desloca à Direita Lógico Imediato).

Desloca o valor armazenado no registrador `rs1` à direita pelo número de
posições indicado pelo `shamt`. Os _bits_ vazios de `rs1` são preenchidos com
zeros. O resultado é escrito no registrador de destino `rd`. Caso se decida
atualizar o processador para uma arquitetura de 64 bits, esta instrução terá sua
sintaxe alterada (o shamt e o funct7 passam a ter 6 bits cada).

#### Formato

```asm
srli rd, rs1, shamt
```

#### Implementação

```c
x[rd] = x[rs1] >>shamt
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 |  6-0   |
| :--: | :-------: | :---: | :---: | :---: | :--: | :----: |
|  I   | `0000000` | shamt |  rs1  | `101` |  rd  | OP-IMM |

Table: **Tabela SRLI** - Tabela com sintaxe da instrução `SRLI`.


---

### `SRA` <Badge type="neutral" text="Especificação: Base RV32I" />

_Shift Right Arithmetic_ (Desloca à Direita Aritmético).

Desloca o valor armazenado no registrador `rs1` à direita pelo número de
posições indicado pelos 5 _bits_ menos significativos do valor armazenado no
registrador `rs2`. Os _bits_ remanescentes de `rs2` são ignorados. Os _bits_
vazios de `rs1` são preenchidos com cópias do_bit_ mais significativo de `rs1`.
O resultado é escrito no registrador de destino `rd`.

#### Formato

```asm
sra rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] >> x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0100000` |  rs2  |  rs1  | `101` |  rd  | OP  |

Table: **Tabela SRA** - Tabela com sintaxe da instrução `SRA`.


---

### `SRAI` <Badge type="neutral" text="Especificação: Base RV32I" />

_Shift Right Arithmetic Immediate_ (Desloca à Direita Aritmético Imediato).

Desloca o valor armazenado no registrador `rs1` à direita pelo número de
posições indicado pelo `shamt`. Os _bits_ vazios de `rs1` são preenchidos com
cópias do_bit_ mais significativo de `rs1`. O resultado é escrito no registrador
de destino `rd`. Caso se decida atualizar o processador para uma arquitetura de
64 bits, esta instrução terá sua sintaxe alterada (o shamt e o funct7 passam a
ter 6 bits cada).

#### Formato

```asm
srai rd, rs1, shamt
```

#### Implementação

```c
x[rd] = x[rs1] >> shamt
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 |  6-0   |
| :--: | :-------: | :---: | :---: | :---: | :--: | :----: |
|  I   | `0100000` | shamt |  rs1  | `101` |  rd  | OP-IMM |

Table: **Tabela SRAI** - Tabela com sintaxe da instrução `SRAI`.


## Comparação

### `SLT` <Badge type="neutral" text="Especificação: Base RV32I" />

_Set if Less Than_ (Defina se Menor que).

Verifica se o valor armazenado no registrador `rs1` é menor que o valor
armazenado no registrador `rs2`, considerandoque são complemento de dois, em
caso positivo, armazena 1 no registrador de destino `rd`, caso contrário,
armazena 0.

#### Formato

```asm
slt rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] < x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000000` |  rs2  |  rs1  | `010` |  rd  | OP  |

Table: **Tabela SLT** - Tabela com sintaxe da instrução `SLT`.


---

### `SLTI` <Badge type="neutral" text="Especificação: Base RV32I" />

_Set if Less Than Immediate_ (Defina se Menor que Imediato).

Verifica se o valor armazenado no registrador `rs1` é menor que o imediato com
extensão de sinal, considerando que são complemento de dois, em caso positivo,
armazena 1 no registrador de destino `rd`, caso contrário, armazena 0.

#### Formato

```asm
slti rd, rs1, immediate
```

#### Implementação

```c
x[rd] = x[rs1] < sext(immediate)
```
#### Sintaxe

| Tipo |   31-20   | 19-15 | 14-12 | 11-7 |  6-0   |
| :--: | :-------: | :---: | :---: | :--: | :----: |
|  I   | imm[11:0] |  rs1  | `010` |  rd  | OP-IMM |

Table: **Tabela SLTI** - Tabela com sintaxe da instrução `SLTI`.


---

### `SLTIU` <Badge type="neutral" text="Especificação: Base RV32I" />

_Set if Less Than Immediate Unisgned_ (Defina se Menor que Imediato Sem Sinal).

Verifica se o valor armazenado no registrador `rs1` é menor que o imediato com
extensão de sinal, considerando que são sem sinal, em caso positivo, armazena 1
no registrador de destino `rd`, caso contrário, armazena 0.

#### Formato

```asm
slti rd, rs1, immediate
```

#### Implementação

```c
x[rd] = x[rs1] < sext(immediate)
```
#### Sintaxe

| Tipo |   31-20   | 19-15 | 14-12 | 11-7 |  6-0   |
| :--: | :-------: | :---: | :---: | :--: | :----: |
|  I   | imm[11:0] |  rs1  | `011` |  rd  | OP-IMM |

Table: **Tabela SLTIU** - Tabela com sintaxe da instrução `SLTIU`.


---

### `SLTU` <Badge type="neutral" text="Especificação: Base RV32I" />

_Set if Less Than Unsigned_ (Defina se Menor que Sem Sinal).

Verifica se o valor armazenado no registrador `rs1` é menor que o valor
armazenado no registrador `rs2`, considerando que são valores sem sinal, em caso
positivo, armazena 1 no registrador de destino `rd`, caso contrário, armazena 0.

#### Formato

```asm
sltu rd, rs1, rs2
```

#### Implementação

```c
x[rd] = x[rs1] < x[rs2]
```
#### Sintaxe

| Tipo |   31-25   | 24-20 | 19-15 | 14-12 | 11-7 | 6-0 |
| :--: | :-------: | :---: | :---: | :---: | :--: | :-: |
|  R   | `0000000` |  rs2  |  rs1  | `011` |  rd  | OP  |

Table: **Tabela SLTU** - Tabela com sintaxe da instrução `SLTU`.


## Desvio Incondicional

### `JAL` <Badge type="neutral" text="Especificação: Base RV32I" />

_Jump and Link_ (Salta e Vìncula).

Escreve o endereço da próxima instrução (PC+4) no registrador de destino `rd` e
modifica o PC para o valor atual somado ao offset com extensão de sinal. Se `rd`
for omitido, o valor de retorno é armazenado em `x1`.

#### Formato

```asm
jal rd, offset
```

#### Implementação

```c
x[rd] = pc+4; pc += sext(offset)
```
#### Sintaxe

| Tipo |         31 - 12          | 11 - 7 |   6 - 0   |
| :--: | :----------------------: | :----: | :-------: |
|  J   | offset[20,10:1,11,19:12] |   rd   | `1101111` |

Table: **Tabela JAL** - Tabela com sintaxe da instrução `JAL`.


---

### `JALR` <Badge type="neutral" text="Especificação: Base RV32I" />

_Jump and Link Register_ (Salta e Vìncula Registrador).

Realiza um cópia do PC para `rs1 + sext(offset)`, mascara_bit_ menos
significativo do endereço resultante e armazena o endereço anterior de PC+4 no
registrador de destino `rd`. Se `rd` for omitido, o valor é armazenado em `x1`.

#### Formato

```asm
jalr rd, offset(rs1)
```

#### Implementação

```c
t =pc+4; pc=(x[rs1]+sext(offset))&∼1; x[rd]=t
```
#### Sintaxe

| Tipo |    31-20     | 19-15 | 14-12 | 11-7 |    6-0    |
| :--: | :----------: | :---: | :---: | :--: | :-------: |
|  I   | offset[11:0] |  rs1  | `000` |  rd  | `1100111` |

Table: **Tabela JALR** - Tabela com sintaxe da instrução `JALR`.


## Desvio Condicional

### `BEQ` <Badge type="neutral" text="Especificação: Base RV32I" />

_Branch if Equal_ (Desvia se Igual)

Verifica se o valor armazenado no registrador `rs1` é igual ao valor armazenado
no registrador `rs2`, em caso positivo, modifica o PC para o valor atual somado
ao offset com extensão de sinal.

#### Formato

```asm
beq rs1, rs2, offset
```

#### Implementação

```c
if (rs1 == rs2) pc += sext(offset)
```
#### Sintaxe

| Tipo |     31 - 25     | 24 - 20 | 19 - 15 | 14 - 12 |     11 - 7     | 6 - 0  |
| :--: | :-------------: | :-----: | :-----: | :-----: | :------------: | :----: |
|  B   | offset[12,10:5] |   rs2   |   rs1   |  `000`  | offset[4:1,11] | BRANCH |

Table: **Tabela BEQ** - Tabela com sintaxe da instrução `BEQ`.


---

### `BNE` <Badge type="neutral" text="Especificação: Base RV32I" />

_Branch if Not Equal_ (Desvia se Não Igual)

Verifica se o valor armazenado no registrador `rs1` é diferente do valor
armazenado no registrador `rs2`, em caso positivo, modifica o PC para o valor
atual somado ao offset com extensão de sinal.

#### Formato

```asm
bnq rs1, rs2, offset
```

#### Implementação

```c
if (rs1 != rs2) pc += sext(offset)
```
#### Sintaxe

| Tipo |     31 - 25     | 24 - 20 | 19 - 15 | 14 - 12 |     11 - 7     | 6 - 0  |
| :--: | :-------------: | :-----: | :-----: | :-----: | :------------: | :----: |
|  B   | offset[12,10:5] |   rs2   |   rs1   |  `001`  | offset[4:1,11] | BRANCH |

Table: **Tabela BNE** - Tabela com sintaxe da instrução `BNE`.


---

### `BLT` <Badge type="neutral" text="Especificação: Base RV32I" />

_Branch if Less Than_ (Desvia se Menor que)

Verifica se o valor armazenado no registrador `rs1` é menor que o valor
armazenado no registrador `rs2`, considerando que são números em complemento de
dois, em caso positivo, modifica o PC para o valor atual somado ao offset com
extensão de sinal.

#### Formato

```asm
blt rs1, rs2, offset
```

#### Implementação

```c
if (rs1 < rs2) pc += sext(offset)
```
#### Sintaxe

| Tipo |     31 - 25     | 24 - 20 | 19 - 15 | 14 - 12 |     11 - 7     | 6 - 0  |
| :--: | :-------------: | :-----: | :-----: | :-----: | :------------: | :----: |
|  B   | offset[12,10:5] |   rs2   |   rs1   |  `100`  | offset[4:1,11] | BRANCH |

Table: **Tabela BLT** - Tabela com sintaxe da instrução `BLT`.


---

### `BGE` <Badge type="neutral" text="Especificação: Base RV32I" />

_Branch if Greater Than or Equal_ (Desvia se Maior ou Igual que)

Verifica se o valor armazenado no registrador `rs1` é maior ou igual ao valor
armazenado no registrador `rs2`, considerando que são números em complemento de
dois, em caso positivo, modifica o PC para o valor atual somado ao offset com
extensão de sinal.

#### Formato

```asm
bge rs1, rs2, offset
```

#### Implementação

```c
if (rs1 >= rs2) pc += sext(offset)
```
#### Sintaxe

| Tipo |     31 - 25     | 24 - 20 | 19 - 15 | 14 - 12 |     11 - 7     | 6 - 0  |
| :--: | :-------------: | :-----: | :-----: | :-----: | :------------: | :----: |
|  B   | offset[12,10:5] |   rs2   |   rs1   |  `101`  | offset[4:1,11] | BRANCH |

Table: **Tabela BGE** - Tabela com sintaxe da instrução `BGE`.


---

### `BLTU` <Badge type="neutral" text="Especificação: Base RV32I" />

_Branch if Less Than Unsigned_ (Desvia se Menor que Sem Sinal)

Verifica se o valor armazenado no registrador `rs1` é menor ao valor armazenado
no registrador `rs2`, considerando que são números sem sinal, em caso positivo,
modifica o PC para o valor atual somado ao offset com extensão de sinal.

#### Formato

```asm
bltu rs1, rs2, offset
```

#### Implementação

```c
if (rs1 < rs2) pc += sext(offset)
```
#### Sintaxe

| Tipo |     31 - 25     | 24 - 20 | 19 - 15 | 14 - 12 |     11 - 7     | 6 - 0  |
| :--: | :-------------: | :-----: | :-----: | :-----: | :------------: | :----: |
|  B   | offset[12,10:5] |   rs2   |   rs1   |  `110`  | offset[4:1,11] | BRANCH |

Table: **Tabela BLTU** - Tabela com sintaxe da instrução `BLTU`.


---

### `BGEU` <Badge type="neutral" text="Especificação: Base RV32I" />

_Branch if Greater or Equal Than Unsigned_ (Desvia se Maior ou Igual que Sem Sinal)

Verifica se o valor armazenado no registrador `rs1` é maior ou igual ao valor
armazenado no registrador `rs2`, considerando que são números sem sinal, em caso
positivo, modifica o PC para o valor atual somado ao offset com extensão de
sinal.

#### Formato

```asm
bgeu rs1, rs2, offset
```

#### Implementação

```c
if (rs1 >= rs2) pc += sext(offset)
```
#### Sintaxe

| Tipo |     31 - 25     | 24 - 20 | 19 - 15 | 14 - 12 |     11 - 7     | 6 - 0  |
| :--: | :-------------: | :-----: | :-----: | :-----: | :------------: | :----: |
|  B   | offset[12,10:5] |   rs2   |   rs1   |  `111`  | offset[4:1,11] | BRANCH |

Table: **Tabela BGEU** - Tabela com sintaxe da instrução `BGEU`.


## Busca na Memória

### `LB` <Badge type="neutral" text="Especificação: Base RV32I" />

_Load Byte_ (Carrega Byte).

Carrega um byte da memória no endereço `rs1 + sext(offset)` e armazena o valor
no registrador de destino `rd`, com extensão de sinal.

#### Formato

```asm
lb rd, offset(rs1)
```

#### Implementação

```c
x[rd] = sext(M[x[rs1] + sext(offset)][7:0])
```
#### Sintaxe

| Tipo |    31-20     | 19-15 | 14-12 | 11-7 | 6-0  |
| :--: | :----------: | :---: | :---: | :--: | :--: |
|  I   | offset[11:0] |  rs1  | `000` |  rd  | LOAD |

Table: **Tabela LB** - Tabela com sintaxe da instrução `LB`.


---

### `LH` <Badge type="neutral" text="Especificação: Base RV32I" />

_Load Halfword_ (Carrega Halfword).

Carrega dois bytes da memória no endereço `rs1 + sext(offset)` e armazena o
valor no registrador de destino `rd`, com extensão de sinal.

#### Formato

```asm
lh rd, offset(rs1)
```

#### Implementação

```c
x[rd] = sext(M[x[rs1] + sext(offset)][15:0])
```
#### Sintaxe

| Tipo |    31-20     | 19-15 | 14-12 | 11-7 | 6-0  |
| :--: | :----------: | :---: | :---: | :--: | :--: |
|  I   | offset[11:0] |  rs1  | `001` |  rd  | LOAD |

Table: **Tabela LH** - Tabela com sintaxe da instrução `LH`.


---

### `LBU` <Badge type="neutral" text="Especificação: Base RV32I" />

_Load Byte Unsigned_ (Carrega Byte Sem Sinal).

Carrega um byte da memória no endereço `rs1 + sext(offset)` e armazena o valor
no registrador de destino `rd`, com extensão de zero.

#### Formato

```asm
lbu rd, offset(rs1)
```

#### Implementação

```c
x[rd] = M[x[rs1] + sext(offset)][7:0]
```
#### Sintaxe

| Tipo |    31-20     | 19-15 | 14-12 | 11-7 | 6-0  |
| :--: | :----------: | :---: | :---: | :--: | :--: |
|  I   | offset[11:0] |  rs1  | `100` |  rd  | LOAD |

Table: **Tabela LBU** - Tabela com sintaxe da instrução `LBU`.


---

### `LHU` <Badge type="neutral" text="Especificação: Base RV32I" />

_Load Halfword Unsigned_ (Carrega Halfword Sem Sinal).

Carrega dois bytes da memória no endereço `rs1 + sext(offset)` e armazena o
valor no registrador de destino `rd`, com extensão de zero.

#### Formato

```asm
lhu rd, offset(rs1)
```

#### Implementação

```c
x[rd] = M[x[rs1] + sext(offset)][15:0]
```
#### Sintaxe

| Tipo |    31-20     | 19-15 | 14-12 | 11-7 | 6-0  |
| :--: | :----------: | :---: | :---: | :--: | :--: |
|  I   | offset[11:0] |  rs1  | `101` |  rd  | LOAD |

Table: **Tabela LHU** - Tabela com sintaxe da instrução `LHU`.


---

### `LW` <Badge type="neutral" text="Especificação: Base RV32I" />

_Load Word_ (Carrega Word).

Carrega quatro bytes da memória no endereço `rs1 + sext(offset)` e armazena o
valor no registrador de destino `rd`.

#### Formato

```asm
lw rd, offset(rs1)
```

#### Implementação

```c
x[rd] = sext(M[x[rs1] + sext(offset)][31:0])
```
#### Sintaxe

| Tipo |    31-20     | 19-15 | 14-12 | 11-7 | 6-0  |
| :--: | :----------: | :---: | :---: | :--: | :--: |
|  I   | offset[11:0] |  rs1  | `010` |  rd  | LOAD |

Table: **Tabela LW** - Tabela com sintaxe da instrução `LW`.


## Escrita na Memória

### `SB` <Badge type="neutral" text="Especificação: Base RV32I" />

_Store Byte_ (Armazena Byte).

Armazena o byte menos significativo do valor armazenado no registrador `rs2` na
memória no endereço `rs1 + sext(offset)`.

#### Formato

```asm
sb rs2, offset(rs1)
```

#### Implementação

```c
M[x[rs1] + sext(offset)] = x[rs2][7:0]
```
#### Sintaxe

| Tipo |    31-25     | 24-20 | 19-15 | 14-12 |    11-7     |  6-0  |
| :--: | :----------: | :---: | :---: | :---: | :---------: | :---: |
|  S   | offset[11:5] |  rs2  |  rs1  | `000` | offset[4:0] | STORE |

Table: **Tabela SB** - Tabela com sintaxe da instrução `SB`.


---

### `SH` <Badge type="neutral" text="Especificação: Base RV32I" />

_Store Halfword_ (Armazena Halfword).

Armazena os dois bytes menos significativo do valor armazenado no registrador
`rs2` na memória no endereço `rs1 + sext(offset)`.

#### Formato

```asm
sh rs2, offset(rs1)
```

#### Implementação

```c
M[x[rs1] + sext(offset)] = x[rs2][15:0]
```
#### Sintaxe

| Tipo |    31-25     | 24-20 | 19-15 | 14-12 |    11-7     |  6-0  |
| :--: | :----------: | :---: | :---: | :---: | :---------: | :---: |
|  S   | offset[11:5] |  rs2  |  rs1  | `001` | offset[4:0] | STORE |

Table: **Tabela SH** - Tabela com sintaxe da instrução `SH`.


---

### `SW` <Badge type="neutral" text="Especificação: Base RV32I" />

_Store Word_ (Armazena Word).

Armazena os quatro bytes menos significativo do valor armazenado no registrador
`rs2` na memória no endereço `rs1 + sext(offset)`.

#### Formato

```asm
sw rs2, offset(rs1)
```

#### Implementação

```c
M[x[rs1] + sext(offset)] = x[rs2][31:0]
```
#### Sintaxe

| Tipo |    31-25     | 24-20 | 19-15 | 14-12 |    11-7     |  6-0  |
| :--: | :----------: | :---: | :---: | :---: | :---------: | :---: |
|  S   | offset[11:5] |  rs2  |  rs1  | `010` | offset[4:0] | STORE |

Table: **Tabela SW** - Tabela com sintaxe da instrução `SW`.
