---
outline: 2
---

# Testes de cobertura

Testes de cobertura visam validar uma entidade com o auxilio do _testbench_, por exemplo dado valores `A` e  `B`, é esperado do comportamento de um somador o a resposta `A + B`, e isto pode ser verificado de forma programática. Mas o caso de um somador inteiro de 32-bits, possui `pow(2, 32) * pow(2, 32) = pow(2, 64) = 18.446.744.073.709.551.616` possibilidades para uma cobetura de casos total, que é computacionalmente custoso e que escala conforme o número de portas em uma entidade. Então, é possível utilizar duas heurísticas para ter uma taxa de cobertura significante a um menor custo computacional, por meio do estresse com escopo reduzido ou por aleatorização em escopo ampliado.

## Cobertura por estresse com escopo reduzido

Testes de estresse verificam uma lógica por completo por meio de um algoritmo de força bruta. Realizar este tipo de teste é altamente custoso, e para lidar com isso, é possível reduzir o espaço de teste ao diminuir o tamanho dos vetores por meio dos genéricos de um componente, como `DATA_WIDTH`. A arquitetura parametrizada oferece esta vantagem sem que haja a perda de casos de borda. Para isto, o método `test_with` possui o argumento `parameters` que é repassado para a interface genérica durane a instanciação da entidade pelo simulador.

### Exemplo

Segue abaixo a declaração um caso de teste de cobertura da entidade `GENERIC_COMPONENT` definida na
[página anterior](dispositivo-sob-teste) mas com o valor `DATA_WIDTH` alterado para apenas 4 bits. Desta forma, suponha que ambos `input_1` e  `input_2` sejam vetores com largura `n = 4`, e portanto, o espaço de teste se torna `pow(2, 4) * pow(2, 4) = 256`.

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

::: info DICA

É fortemente recomendado que casos de teste desse tipo sejam marcados como
`coverage`, para facilitar o teste em massa.

:::

## Cobertura por aleatorização com escopo ampliado

Outra abordagem para testes de cobertura é o uso da aleatorização, pois mantém uma distribuição uniforme sem abrir mão do espaço de teste.

### Exemplo

Segue abaixo a declaração um caso de teste de cobertura da entidade `GENERIC_COMPONENT` definida na
[página anterior](dispositivo-sob-teste) mas com o valor `DATA_WIDTH` alterado para 16 bits.

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
