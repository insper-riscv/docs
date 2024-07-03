---
outline: 2
---

# Controlador de Desvio

## Topologia

![alt text](/public/images/reference/report_components/rv32i_branch_controller.drawio.svg)

## Interface de portas

### `select_function` <Badge type="success" text="INPUT" />

Entrada do vetor de seleção da operação de desvio a ser realizada.

- Tipo: `std_logic_vector`
- Largura: variável `(t_FUNCT3 - 1) downto 0`

### `flag_sign_1` <Badge type="success" text="INPUT" />

Entrada do bit mais significativo do vetor de dados primário.

- Tipo: `std_logic`

### `flag_sign_2` <Badge type="success" text="INPUT" />

Entrada do bit mais significativo do vetor de dados secundário.

- Tipo: `std_logic`

### `flag_equal` <Badge type="success" text="INPUT" />

Entrada do sinal que indica se os dois vetores de dados são iguais.

- Tipo: `std_logic`

### `flag_less` <Badge type="success" text="INPUT" />

Entrada do sinal que indica se o vetor de dados primário é menor do que o vetor secundário.

- Tipo: `std_logic`

### `flag_greather` <Badge type="success" text="INPUT" />

Entrada do sinal que indica se o vetor de dados primário é maior do que o vetor secundário.

- Tipo: `std_logic`

### `destination` <Badge type="danger" text="OUTPUT" />

Saída do sinal que ativa desvio.

- Tipo: `std_logic`

## Usagem

```vhdl
CONTROLLER: entity WORK.RV32I_BRANCH_CONTROLLER
    port map (
        select_function => select_function(2 downto 0),
        flag_sign_1     => sign_1,
        flag_sign_2     => sign_2,
        flag_equal      => flag_equal,
        flag_less       => flag_less,
        flag_greather   => flag_greather,
        destination     => flag_branch
    );
```

## Diagrama RTL

::: danger TO DO

to do

:::

## Casos de teste

::: danger TO DO

to do

:::
