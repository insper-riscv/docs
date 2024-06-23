---
outline: [2, 3]
---

# Pacote `WORK.GENERICS`

<a href="https://github.com/insper-riscv/core/blob/main/src/GENERICS.vhd" target="blank"><Badge type="tip" text="GENERICS.vhd &boxbox;" /></a>

Funções auxiliares de lógica abstrata, genérica para todos os casos.

## Tipos

### Array de vetores

Para facilitar a criação de um banco de registradores, foi criado um tipo de variável
que seria uma matriz de vetores.

#### Interface
```vhdl
type t_std_logic_array is array(natural range <>) of std_logic_vector;
```

#### Usagem
```vhdl
signal vec_array : t_std_logic_array(1 to n_rows)((n_bits - 1) downto 0);
```

## Funções

### Reverte vetor

Recebe um vetor arbitrário e retorna o mesmo invertendo a ordem os bits. Ou seja, para um dado vetor de tamanho `n downto 0`, seja `vector(n)` passa a ser `vector(0)`.

#### Interface
```vhdl
function reverse_vector (l: in std_logic_vector) return std_logic_vector;
```

#### Usagem
```vhdl
vector_2 <= WORK.GENERICS.reverse_vector(vector_1);
```

---

### Redução lógica booleana OU

Aplica lógica OU bit-a-bit em um vetor de tamanho `n` em estrutura de árvore de derivação. Esta abordagem torna os diagramas RTL mais compactos em comparação a abordagem encadeada da biblioteca padrão IEEE.

Por exemplo, um vetor `v(3 downto 0)` reduzido em lógica encadeada resultaria num circuito equivalente:

```vhdl
( ( v(0) OR v(1) ) OR v(2) ) OR v(3)
```

O mesmo vetor reduzido em lógica em àrvore reduz a profundidade do curcuito em `O(log n)` e facilita a vizualização de diagramas RTL:

```vhdl
( v(0) OR v(1) ) OR ( v(2) OR v(3) )
```

#### Interface
```vhdl
function reduce_or (l : std_logic_vector) return std_logic;
```

#### Usagem
```vhdl
boolean_1 <= WORK.GENERICS.reduce_or(vector_1);
```

---

### Redução lógica booleana E

Aplica lógica E bit-a-bit em um vetor de tamanho `N` em estrutura de árvore de derivação. Esta abordagem torna os diagramas RTL mais compactos em comparação a abordagem encadeada da biblioteca padrão IEEE.

#### Interface
```vhdl
function reduce_and (l : std_logic_vector) return std_logic;
```

#### Usagem
```vhdl
boolean_1 <= WORK.GENERICS.reduce_and(vector_1);
```

---

### Igualdade dinâmica

Função que compara dois vetored dinâmicos. O propósito é reduzir o vetor XOR de ambos em lógica booleana E bit-a-bit. O retorno é um único bit que assume valor lógico alto quando ambos os vetores forem ignais.

#### Interface
```vhdl
function is_equal_dynamic (l : std_logic_vector; r : std_logic_vector) return std_logic;
```

#### Usagem
```vhdl
boolean_1 <= WORK.GENERICS.is_equal_dynamic(vector_1, vector_2);
```

---

### Igualdade

Função que compara um vetor de dados dinâmico com um vetor de estático. O propósito é reduzir o vetor em lógica booleana E bit-a-bit incluindo negações conforme o vetor estático. O retorno é um único bit que assume valor lógico alto quando o vetor a ser comparado é igual ao vetor estático.

Este é uma especificação do `is_equal_dynamic` para o caso em que um dos vetores define um valor constante. Isto gera um circuito com uso de menos recursos.

#### Interface
```vhdl
function is_equal (l : std_logic_vector; r : std_logic_vector) return std_logic;
```

#### Usagem
```vhdl
boolean_1 <= WORK.GENERICS.is_equal(vector_1, "110010");
```