# Dispositivo sob Teste

Da sigla em inglês DUT ou _Device Under Test_, entidades declaradas pelo objeto
`Entity` declaram a estrutura de um equivalente em VHDL. Isto permite a execução
das rotinas de síntese e elaboração de forma prática e oferece interface com as
ferramentes de testes do [Cocotb](http://cocotb.org/).

## Exemplo

Segue abaixo a declaração da classe `GENERIC_COMPONENT`, que equivale a
umasuposta entidade `WORK.GENERIC_COMPONENT` em um arquivo
`GENERIC_COMPONENT.vhd`:

```python
import lib

from test_GENERICS_package import GENERICS
from test_GENERIC_MUX_2X1 import GENERIC_MUX_2X1
from test_GENERIC_REGISTER import GENERIC_REGISTER


class GENERIC_COMPONENT(lib.Entity):
    _package = GENERICS

    input_1 = lib.Entity.Input_pin
    input_2 = lib.Entity.Input_pin
    output_1 = lib.Entity.Output_pin
    output_2 = lib.Entity.Output_pin

    child_1 = GENERIC_MUX_2X1
    child_2 = GENERIC_REGISTER
```

O atributos como o `_package`, que define um pacote ao qual a entidade pertence,
`child_1` e `child_2`, que são entidades filhas de `GENERIC_COMPONENT`, criam
uma estrutura declarativa recursiva que constroi uma árvore compilação da
hierarquia e dependências de cada entidade. Atributos definidos pelas classes
`Input_pin` e `Output_pin` oferecem _type hinting_ e destaca erros no código
antes da execução das rotinas, mas também sinalizam o tipo das portas lógicas no
diagrama de forma de onda no resultado de cada teste.
