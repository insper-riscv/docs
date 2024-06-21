## Constantes Globais - Pacote WORK.GENERICS {style="font-size: 2em;"}

Para facilitar o desenvolvimento, algumas constantes globais foram definidas.

### Matriz de vetores <Badge type="success" text="type"/>

Para facilitar a criação de um banco de registradores, foi criado um tipo de variável
que seria uma matriz de vetores.

```vhdl
type t_std_logic_array is array(natural range <>) of std_logic_vector;
```