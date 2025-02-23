---
outline: 2
---

# Testes de lógica

Para este projeto, os testes lógicos contemplam as definições padrão dos
componentes (por exemplo com largura de dados de 31-bits), para validações
rápidas e com baixa cobertura de casos, mas que permitam o desenvolvimento
orientado a testes. Segue abaixo a declaração um caso de teste para a síntese e
elaboração da entidade `GENERIC_COMPONENT` definida na
[página anterior](dispositivo-sob-teste).

```py
import pytest


@pytest.mark.testcases
def test_GENERIC_COMPONENT_testcases():
    GENERIC_COMPONENT.test_with(tb_GENERIC_COMPONENT_case_1)
    GENERIC_COMPONENT.test_with(tb_GENERIC_COMPONENT_case_2)
    GENERIC_COMPONENT.test_with(tb_GENERIC_COMPONENT_case_3)
```

::: info DICA

É fortemente recomendado que casos de teste desse tipo sejam marcados como
`testcases`, para facilitar o teste em massa.

:::

Casos de testes são definidos por meio de
[funções geradoras assíncronas](https://peps.python.org/pep-0525/). Estas
funções recebem o dispositivo sob teste no parâmetro `dut`, do mesmo tipo de
entidade em teste e o objeto `trace` para acessar ferramentas do _testbech_.
Dessa forma, `await` é utilizado para a pausa do _testbench_ para a propagação
de sinais lógicos ou a contagem de ciclos de clock por meio do método
`trace.cycle()`, e o `yield`indica uma passagem de uma checagem para o
_testbench_ por meoio do método `trace.check()`.

## Lógica combinacional

Entidades que não possuem porta de `clock`, são componentes de lógica
combinacional. E para este caso, após a atribuição dos binários nos pinos de
entrada, e a espera da propagação com `trace.cycle()`, é esperado que o
comportamento da entidade esteja estabilizado para ser verificado com o método
`trace.check()`, com o atributo representando a porta a serverificada, o binário
esperado, e uma mensagem de erro.

### Exemplo

```py
from cocotb.binary import BinaryValue


@GENERIC_COMPONENT.testcase
async def tb_GENERIC_COMPONENT_case_1(dut: GENERIC_COMPONENT, trace: lib.Waveform):
    dut.input_1.value = BinaryValue("00000000")
    dut.input_2.value = BinaryValue("00000000")

    await trace.cycle()
    yield trace.check(dut.output_1, "00000000", "A saída não foi como o esperado!")
```

## Lógica sequencial

Entidades que possiem porta de `clock`, são componentesde lógica sequencial. E
para esse caso, após a atribuição dos binários nos pinos deentrada, o método
`trace.cycle(n)` pausa o _testbench_ por `n` ciclos de `clock`, e que, da mesma
forma como os testes de lógica sequencial, é esperado que o comportamento da
entidade esteja estabilizado para ser verificado com o método `trace.check()`.

### Exemplo

```py
from cocotb.binary import BinaryValue


@GENERIC_COMPONENT.testcase
async def tb_GENERIC_COMPONENT_case_1(dut: GENERIC_COMPONENT, trace: lib.Waveform):
    dut.input_1.value = BinaryValue("00000000")
    dut.input_2.value = BinaryValue("00000000")

    await trace.cycle(2)
    yield trace.check(dut.output_1, "00000000", "A saída não foi como o esperado!")
```
