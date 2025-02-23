# Síntese e Elaboração

A compilação de uma entidade por sí é uma etapa de validação da arquitetura.
Isto serve tanto para validação sintática e semântica do código por meio do
método `build_vhd` mas também gera a visualização do circuitoi lógico final por
meio do método `build_netlistsvg`.

## Exemplo

Segue abaixo a declaração um caso de teste para a síntese e elaboração da entidade `GENERIC_COMPONENT` definida na [página anterior](dispositivo-sob-teste).

```py
import pytest


@pytest.mark.synthesis
def test_GENERIC_COMPONENT_synthesis():
    GENERIC_COMPONENT.build_vhd()
    GENERIC_COMPONENT.build_netlistsvg()


if __name__ == "__main__":
    lib.run_test(__file__)
```

::: info DICA

É fortemente recomendado que casos de teste desse tipo sejam marcados como
`synthesis`, para facilitar o teste em massa.

:::
