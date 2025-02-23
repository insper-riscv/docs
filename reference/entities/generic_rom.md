---
outline: 2
---

# ROM <Badge type="info" text="WORK.GENERIC_ROM" />

[<Badge type="tip" text="Arquivo: GENERIC_ROM.vhd &boxbox;" />](https://github.com/insper-riscv/core/blob/main/src/GENERIC_ROM.vhd)

Memória de apenas leitura

## Topologia

<pan-container>

![Diagram](/images/reference/entities/GENERIC_ROM.svg){.w-full .dark-invert}

</pan-container>

## Genericos

| Nome                | Tipo    | Valor | Descrição                                               |
| ------------------- | ------- | ----- | ------------------------------------------------------- |
| `DATA_WIDTH`        | natural | 8     | Largura dos vetores de dados                            |
| `ADDRESS_WIDTH`     | natural | 8     | Largura do vetor de endereço                            |
| `ADDRESSABLE_WIDTH` | natural | 7     | Largura do vetor de endereço mapeado na memória         |
| `INIT_FILE`         | string  |       | Caminho para o arquivo .mif de inicialização da memória |

::: warning ATENÇÃO!

`ADDRESSABLE_WIDTH` deve ser menor ou igual a `ADDRESS_WIDTH`.

:::

## Portas

| Nome        | Direção | Tipo                            | Descrição                 |
| ----------- | ------- | ------------------------------- | ------------------------- |
| `clock`       | input   | std_logic                       | Sinal de clock            |
| `address`     | input   | std_logic_vector<ADDRESS_WIDTH> | Vetor de endereço         |
| `destination` | output  | std_logic_vector<DATA_WIDTH>    | Vetor de dados endereçado |

## Usagem

### ROM Genérica

Implementação a partir de componentes genéricos e lógica a nível de
registradores e portas lógicas.

```vhdl
ROM : entity WORK.GENERIC_ROM(RTL)
    generic map (
        DATA_WIDTH        => 8;
        ADDRESS_WIDTH     => 8;
        ADDRESSABLE_WIDTH => 5;
        INIT_FILE         => "path/to/init_file.mif"        
    )
    port map (
        source       => signal_source,
        destination  => signal_destination
    );
```

### Propriedade Intelectual altsyncram Intel® FPGA

[Saiba mais](https://www.intel.com/content/www/us/en/programmable/quartushelp/23.1/index.htm#hdl/mega/mega_file_altsynch_ram.htm).

```vhdl
ROM : entity WORK.GENERIC_ROM(SYN)
    generic map (
        DATA_WIDTH        => 8;
        ADDRESS_WIDTH     => 8;
        ADDRESSABLE_WIDTH => 5;
        INIT_FILE         => "path/to/init_file.mif"
    )
    port map (
        source       => signal_source,
        destination  => signal_destination
    );
```

::: warning ATENÇÃO!

Para utilizar o IP é preciso incluir o arquivo `GENERIC_ROM_QUARTUS.vhd` ao
invés do `GENERIC_ROM.vhd`. Esta usagem da entidade só está disponível para
síntese dentro da plataforma de desenvolvimento para placas FPGA Intel® Quartus®
Prime Lite

:::

## Diagrama RTL

<pan-container>

![Diagrama de RTL da ROM](/images/reference/entities/generic_rom_netlist.svg){.w-full
.dark-invert}

</pan-container>

## Casos de teste

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_ROM.py" target="blank"><Badge type="tip" text="test_GENERIC_ROM.py &boxbox;" /></a>

### Caso 1 <Badge type="info" text="tb_GENERIC_ROM_case_1" />

<pan-container :grid="false">

![Forma de onda do caso de teste 1 da ROM](/images/reference/entities/tb_generic_rom_case_1.svg){.w-full
.dark-invert}

</pan-container>
