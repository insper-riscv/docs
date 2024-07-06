# Exemplos

## Declaração da entidade

Entidades servem para declaração da estrutura de um equivalente em VHDL. Permite a execução das rotinas de síntese e elaboração de forma prática e oferece interface com as ferramentes de testes do Cocotb. O atributo `_package` define um pacote ao qual a entidade pertence, antecipando a compilação do pacote antes da entidade. Bem como entidades de outros arquivos de testes fazem a compisição de elementos filhos, para que esejam disponíveis no momento da compilação da entidade sobre teste. Atributos definidos pelas classes `Input_pin` e `Output_pin` oferecem _type hinting_ e destaca erros no código antes da execução das rotinas.

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

## Teste de Síntese e Elaboração

É fortemente recomendado o uso do marcador `synthesis` para o caso de teste de compilação `build_vhd` que chama a compilação do GHDL para a entidade e síntese `build_netlistsvg` que chama o Yosys com o GHDL para a elaboração da entidade bem como um diagrama RTL do resultado.

```py
import pytest


@pytest.mark.synthesis
def test_GENERIC_COMPONENT_synthesis():
    GENERIC_COMPONENT.build_vhd()
    GENERIC_COMPONENT.build_netlistsvg()


if __name__ == "__main__":
    lib.run_test(__file__)
```

## Teste de lógica combinacional

Para os casos de teste, há um decorador disponível na classe da entidade para a sinalização ao Cocotb. A função com a rotina deve ser assíncrona e receber o _device under test_ como a entidade e um objeto com métodos auxiliares para a orquesração do caso.

O método `trace.cycle()` espera até que os sinais do dispositivo estejam estabilizados. Isto garante que as saídas estejam disponíveis para leitura.

E o método `trace.check()` retorna a instância de execução do teste para registrar a verificação do sinal especificado. Isto permite que a simulação não escerre com a provocação de um erro e seja criado um diagrama com a forma de onda sinalizando o erro de forma mais ampla.

É fortemente recomendado o uso do marcador `testcases` para os casos de teste. O método `test_with` da entidade instancia uma rotina de testes conforme um ou mais casos.

```py
from cocotb.binary import BinaryValue


@GENERIC_COMPONENT.testcase
async def tb_GENERIC_COMPONENT_case_1(dut: GENERIC_COMPONENT, trace: lib.Waveform):
    dut.input_1.value = BinaryValue("00000000")
    dut.input_2.value = BinaryValue("00000000")

    await trace.cycle()
    yield trace.check(dut.output_1, "00000000", "A saída não foi como o esperado!")

@pytest.mark.testcases
def test_GENERIC_COMPONENT_testcases():
    GENERIC_COMPONENT.test_with(tb_GENERIC_COMPONENT_case_1)
```

## Teste de cobertura

É fortemente recomendado o uso do marcador `coverage` para os casos de teste de cobertura.

### Cobertura por estresse com escopo reduzido

O método `test_with` possui o argumento `parameters` que é repassado como argumentos da interface genérica durane a instanciação da entidade pelo simulador. Isto permite reduzir o espaço de teste e atingir uma maior cobertura.

```py
@GENERIC_MUX_2X1.testcase
async def tb_GENERIC_COMPONENT_case_coverage_4_bits(dut: GENERIC_COMPONENT, trace: lib.Waveform):
    trace.disable()

    n_bits = 4
    for i in range(2**n_bits):
        for j in range(2**n_bits):
                input_1 = "{0:0{1}b}".format(i, n_bits)
                input_2 = "{0:0{1}b}".format(j, n_bits)
                output_1 = "0"*n_bits

                dut.input_1.value = BinaryValue(input_1)
                dut.input_2.value = BinaryValue(input_2)

                message = f"source_1: {source_1}, source_2: {source_2}"

                await trace.cycle()
                yield trace.check(dut.output_1, output_1, message)

@pytest.mark.coverage
def test_GENERIC_COMPONENT_stress_4_bits():
    GENERIC_COMPONENT.test_with(tb_GENERIC_COMPONENT_case_coverage_4_bits, {
        "DATA_WIDTH": 4,
    })
```

### Cobertura por aleatorização com escopo ampiado

Outra abordagem para testes de cobertura é o uso da aleatorização.

```py
import random


@GENERIC_MUX_2X1.testcase
async def tb_GENERIC_COMPONENT_case_coverage_16_bits(dut: GENERIC_COMPONENT, trace: lib.Waveform):
    trace.disable()

    n_bits = 16
    for _ in range(1_000):
        input_1 = "{0:0{1}b}".format(random.getrandbits(n_bits), n_bits)
        input_2 = "{0:0{1}b}".format(random.getrandbits(n_bits), n_bits)
        output_1 = "0"*n_bits

        dut.input_1.value = BinaryValue(input_1)
        dut.input_2.value = BinaryValue(input_2)

        message = f"source_1: {source_1}, source_2: {source_2}"

        await trace.cycle()
        yield trace.check(dut.output_1, output_1, message)

@pytest.mark.coverage
def tb_GENERIC_COMPONENT_case_coverage_16_bits():
    GENERIC_COMPONENT.test_with(tb_GENERIC_COMPONENT_case_coverage_5_bits, {
        "DATA_WIDTH": 16,
    })
```
