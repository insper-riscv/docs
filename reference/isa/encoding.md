# Codificação

As instruções são vetores binários de 32 _bits_, podendo ser classificadas de
duas formas: segundo sua sintaxe, ou de acordo com sua função. No que se refere
à sintaxe, as instruções podem ser do tipo R, I, S, B, U ou J, como demonstrado
na Tabela Sintaxe.

<table class="compact">
    <thead>
        <td align="center">Tipo</td>
        <td align="center">31</td>
        <td align="center">30-25</td>
        <td align="center">24-21</td>
        <td align="center">20</td>
        <td align="center">19-15</td>
        <td align="center">14-12</td>
        <td align="center">11-8</td>
        <td align="center">7</td>
        <td align="center">6-0</td>
    </thead>
    <tbody>
        <tr>
            <td align="center">R</td>
            <td align="center" colspan="2">funct7</td>
            <td align="center" colspan="2">rs2</td>
            <td align="center">rs1</td>
            <td align="center">funct3</td>
            <td align="center" colspan="2">rd</td>
            <td align="center">opcode</td>
        </tr>
        <tr>
            <td align="center">I</td>
            <td align="center">imm[31:11]</td>
            <td align="center" colspan="3">imm[10:0]</td>
            <td align="center">rs1</td>
            <td align="center">funct3</td>
            <td align="center" colspan="2">rd</td>
            <td align="center">opcode</td>
        </tr>
        <tr>
            <td align="center">S</td>
            <td align="center">imm[31:11]</td>
            <td align="center">imm[10:5]</td>
            <td align="center" colspan="2">rs2</td>
            <td align="center">rs1</td>
            <td align="center">funct3</td>
            <td align="center" colspan="2">imm[4:0]</td>
            <td align="center">opcode</td>
        </tr>
        <tr>
            <td align="center">B</td>
            <td align="center">imm[31:12]</td>
            <td align="center">imm[10:5]</td>
            <td align="center" colspan="2">rs2</td>
            <td align="center">rs1</td>
            <td align="center">funct3</td>
            <td align="center">imm[4:1]</td>
            <td align="center">imm[11]</td>
            <td align="center">opcode</td>
        </tr>
        <tr>
            <td align="center">U</td>
            <td align="center" colspan="6">imm[31:12]</td>
            <td align="center" colspan="2">rd</td>
            <td align="center">opcode</td>
        </tr>
        <tr>
            <td align="center">J</td>
            <td align="center">imm[31:20]</td>
            <td align="center" colspan="2">imm[10:1]</td>
            <td align="center">imm[11]</td>
            <td align="center" colspan="2">imm[19:12]</td>
            <td align="center" colspan="2">rd</td>
            <td align="center">opcode</td>
        </tr>
    </tbody>
    <caption>
        <strong>Tabela Sintaxe</strong> - Tabela de Sintaxe dos tipos de instrução.
    </caption>
</table>

Sobre cada tipo de instrução:
- Instruções do **tipo R** são usadas para realizar operações entre registradores.
- Instruções do **tipo I** são utilizadas para realizar operações em registradores com uso de valores imediatos.
- Instruções do **tipo S** armazenam valores na memória.
- Instruções do **tipo B** realizam desvios no programa dependendo do resultado da comparação de valores em dois registradores.
- Instruções do **tipo U** são empregadas em operações que usam os 20 _bits_ mais significativos da instrução como imediato, com os _bits_ remanescentes sendo 0.
- Apenas a instrução `JAL` é do **tipo J**.

Sendo, para cada segmento da instrução:

- `opcode`: Codifica o tipo de instrução ou uma instrução específica;
- `funct3`: Codifica a operacionalização da instrução;
- `funct7`: Codifica uma variação da operacionalização;
- `rs1`: Endereça registrador de recurso primário;
- `rs2`: Endereça registrador de recurso secundário;
- `rd`: Endereça registrador de destinação;
- `imm`: Vetor do imediato.

## Opcode

Opcodes são segmentos de 7 _bits_ do vetor de instrução. Cada tipo de instrução
possui um opcode ou uma instrução possui um opcode exclusivo. Para alguns tipos
de instrução, são codificados com mais de um opcode, estando estes
exemplificados na Tabela Opcode.

|    Nome    |   valor   |
| :--------: | :-------: |
|     OP     | `0110011` |
|   OP-IMM   | `0010011` |
|   STORE    | `0100011` |
|    LOAD    | `0000011` |
|   BRANCH   | `1100011` |
| **Outros** | `XXXXX11` |

Table: **Tabela Opcode** - Tabela com exemplos de opcodes comuns.

## Imediato

Os imediatos são vetores binários de 32 _bits_. Cada tipo de instrução com
imediato possui uma sintaxe de imediato demonstrada na Tabela Imediato.

<table>
    <caption>
        <b>Tabela Imediato</b> - Tabela com a sintaxe dos imediatos de acordo com seu tipo de instrução.
    </caption>
    <thead>
        <tr>
            <th style="text-align: center;\f">Tipo</th>
            <th style="text-align: center; white-space: nowrap;">31</th>
            <th style="text-align: center; white-space: nowrap;">30 - 20</th>
            <th style="text-align: center; white-space: nowrap;">19 - 12</th>
            <th style="text-align: center; white-space: nowrap;">11</th>
            <th style="text-align: center; white-space: nowrap;">10 - 5</th>
            <th style="text-align: center; white-space: nowrap;">4 - 1</th>
            <th style="text-align: center; white-space: nowrap;">0</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;">I</td>
            <td style="text-align: center;" colspan="4">inst[31]</td>
            <td style="text-align: center;" colspan="3">inst[30:20]</td>
        </tr>
        <tr>
            <td style="text-align: center;">S</td>
            <td style="text-align: center;" colspan="4">inst[31]</td>
            <td style="text-align: center;">inst[30:25]</td>
            <td style="text-align: center;" colspan="2">inst[11:7]</td>
        </tr>
        <tr>
            <td style="text-align: center;">B</td>
            <td style="text-align: center;" colspan="3">inst[31]</td>
            <td style="text-align: center;">inst[7]</td>
            <td style="text-align: center;">inst[30:25]</td>
            <td style="text-align: center;">inst[11:8]</td>
            <td style="text-align: center;"><code>0</code></td>
        </tr>
        <tr>
            <td style="text-align: center;">U</td>
            <td style="text-align: center;" colspan="3">inst[31:12]</td>
            <td style="text-align: center;" colspan="4"><code>000000000000</code></td>
        </tr>
        <tr>
            <td style="text-align: center;">J</td>
            <td style="text-align: center;" colspan="2">inst[31]</td>
            <td style="text-align: center;">inst[19:12]</td>
            <td style="text-align: center;">inst[20]</td>
            <td style="text-align: center;" colspan="2">inst[30:21]</td>
            <td style="text-align: center;"><code>0</code></td>
        </tr>
    </tbody>
</table>

Sendo, para cada segmento, `inst` o vetor da instrução.

---

Por sua vez, a classificação das instruções segundo sua funcionalidade divide-as
em grupos independentemente de sua estrutura. Esses grupos incluem:

- As instruções de construção, que criam valores em registradores;
- As instruções de deslocamento, que realizam operações de deslocamento de
  _bits_ nos valores armazenados nos registradores;
- As instruções aritméticas, que efetuam operações matemáticas;
- As instruções lógicas, que são responsáveis por operações lógicas;
- As instruções de desvio, que alteram o fluxo de execução do programa com base
  em condições;
- As instruções de salto, que permitem saltos para outras partes do programa;
- As instruções de carregar, que carregam valores da memória para os
  registradores;
- As instruções de armazenar, que guardam valores dos registradores na memória.

Nas instruções que se seguem, RV32I Base significa que elas pertencem ao
conjunto base de instruções para inteiros de 32 _bits_, e “M” _Standard
Extension_ significa que elas pertencem à extensão de Multiplicação:

<style scoped>

table.compact {
    white-space: nowrap;

    td {
        padding: 8px 8px;
        font-size: .8rem;
    }
}

</style>
