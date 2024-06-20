## Pacote WORK.GENERICS {style="font-size: 2em;"}

Para simplificar as operações realizadas pelo processador, foram definidas funções
de operações comumente usadas em vetores de dados.

### Função de inversão <Badge text="reverse_vector"/>

Essa é a função que realiza a inversão de um vetor.

```vhdl
function reverse_vector (l: in std_logic_vector) return std_logic_vector is
        variable result : std_logic_vector(l'range);
        alias auxiliar  : std_logic_vector(l'reverse_range) is l;
    begin
        for i in auxiliar'range loop
            result(i) := auxiliar(i);
        end loop;
        return result;
    end function;
```

### Função de OU reduzido <Badge text="reduce_or"/>

::: danger TO DO

Explain what it does

:::

```vhdl
function reduce_or (l : std_logic_vector) return std_logic is
        constant mid : integer := (l'high + l'low) / 2;
    begin
        if l'length = 1 then
            return l(l'low);
        elsif l'length = 2 then
            return l(l'low) OR l(l'high);
        elsif l'ascending then
            return reduce_or(l((mid + 1) to l'high)) OR reduce_or(l(l'low to mid));
        else
            return reduce_or(l(l'high downto (mid + 1))) OR reduce_or(l(mid downto l'low));
        end if;
    end function;
```

### Função de E reduzido <Badge text="reduce_and"/>

::: danger TO DO

Explain what it does

:::

```vhdl
function reduce_and (l : std_logic_vector) return std_logic is
        constant mid : integer := (l'high + l'low) / 2;
    begin
        if l'length = 1 then
            return l(l'low);
        elsif l'length = 2 then
            return l(l'low) AND l(l'high);
        elsif l'ascending then
            return reduce_and(l((mid + 1) to l'high)) AND reduce_and(l(l'low to mid));
        else
            return reduce_and(l(l'high downto (mid + 1))) AND reduce_and(l(mid downto l'low));
        end if;
    end function;
```

### Função de igualdade <Badge text="is_equal"/>

Função que compara um vetor de dados dinâmico com um vetor de dados estático.

```vhdl
function is_equal (l : std_logic_vector; r : std_logic_vector) return std_logic is
        variable base : std_logic_vector(r'range) := r;
        variable result : std_logic_vector(r'range);
    begin
        if r'ascending then
            base := reverse_vector(r);
        end if;

        for i in l'reverse_range loop
            if base(base'low + l'left - i) = '1' then
                result(i) := l(i);
            else
                result(i) := NOT(l(i));
            end if;
        end loop;

        return reduce_and(result);
    end function;
```

### Função de igualdade dinâmica <Badge text="is_equal"/>

Função que compara dois vetores de dados dinâmicos.

```vhdl
function is_equal_dynamic (l : std_logic_vector; r : std_logic_vector) return std_logic is
    begin
        return reduce_and(l XNOR r);
    end function;
```