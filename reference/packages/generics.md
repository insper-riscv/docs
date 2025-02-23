---
outline: [2, 3]
---

# Pacote Genéricos

<VPButton theme="alt" text="Abrir arquivo fonte ⧉" href="https://github.com/insper-riscv/core/blob/main/src/GENERICS.vhd" style="margin: 1rem 0;" />

Funções auxiliares de lógica abstrata, genérica para todos os casos.

## Tipos

| Nome                | Tipo                                        | Descrição                                                                                                              |
| ------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `t_std_logic_array` | array(natural range <>) of std_logic_vector | Para facilitar a criação de um banco de registradores, foi criado um tipo de variável que seria uma matriz de vetores. |

## Funções

### `reverse_vector`

Recebe um vetor arbitrário e retorna o mesmo invertendo a ordem os bits. Ou
seja, para um dado vetor de tamanho `n downto 0`, seja `vector(n)` passa a ser
`vector(0)`.

```vhdl
reverse_vector (l: in std_logic_vector) return std_logic_vector
```

### `reduce_or`

Aplica lógica OU bit-a-bit em um vetor de tamanho n em estrutura de árvore de
derivação. Esta abordagem torna os diagramas RTL mais compactos em comparação a
abordagem encadeada da biblioteca padrão IEEE. Por exemplo, um vetor
`v(3 downto 0)` reduzido em lógica encadeada resultaria num circuito
equivalente:

```vhdl
( ( v(0) OR v(1) ) OR v(2) ) OR v(3)
```

O mesmo vetor reduzido em lógica em àrvore reduz a profundidade do curcuito em
`O(log n)` e facilita a vizualização de diagramas RTL:

```vhdl
( v(0) OR v(1) ) OR ( v(2) OR v(3) )
```

```vhdl
reduce_or (l : std_logic_vector) return std_logic
```

### `reduce_and`

Aplica lógica E bit-a-bit em um vetor de tamanho `N` em estrutura de árvore de
derivação. Esta abordagem torna os diagramas RTL mais compactos em comparação a
abordagem encadeada da biblioteca padrão IEEE.- is_equal (l : std_logic_vector;
r : std_logic_vector) return std_logic Função que compara um vetor de dados
dinâmico com um vetor de estático. O propósito é reduzir o vetor em lógica
booleana E bit-a-bit incluindo negações conforme o vetor estático. O retorno é
um único bit que assume valor lógico alto quando o vetor a ser comparado é igual
ao vetor estático. Este é uma especificação do is_equal_dynamic para o caso em
que um dos vetores define um valor constante. Isto gera um circuito com uso de
menos recursos.

```vhdl
reduce_and (l : std_logic_vector) return std_logic
```

### `is_equal_dynamic`

Função que compara dois vetored dinâmicos. O propósito é reduzir o vetor XOR de
ambos em lógica booleana E bit-a-bit. O retorno é um único bit que assume valor
lógico alto quando ambos os vetores forem ignais.

```vhdl
is_equal_dynamic (l : std_logic_vector; r : std_logic_vector) return std_logic
```
