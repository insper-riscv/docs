---
outline: 2
---

# ROM

<a href="https://github.com/insper-riscv/core/blob/main/src/GENERIC_ROM.vhd" target="blank"><Badge type="tip" text="GENERIC_ROM.vhd &boxbox;" /></a>

Memória de apenas leitura.

## Topologia

<pan-container>

![alt text](/images/reference/entities/generic_rom_topology.mermaid.drawio.svg){.w-full .dark-invert}

</pan-container>

## Interface

```vhdl
entity GENERIC_ROM is

    generic (
        DATA_WIDTH        : natural := 8;
        ADDRESS_WIDTH     : natural := 8;
        ADDRESSABLE_WIDTH : natural := 7;
        INIT_FILE         : string  := "../data/mif/generic_rom_dummy.mif"
    );

    port (
        clock       : in  std_logic := '1';
        address     : in  std_logic_vector((ADDRESS_WIDTH - 1) downto 0);
        destination : out std_logic_vector((DATA_WIDTH - 1) downto 0)
    );

end entity;
```

- `DATA_WIDTH`: Largura dos vetores de dados.
- `ADDRESS_WIDTH`: Largura do vetore de endereço.
- `ADDRESSABLE_WIDTH`: Largura do vetor de endereço mapeado na memória.
- `INIT_FILE`: Arquivo `.mif` de inicialização da memória.
- `clock`: Sinal de clock.
- `address`: Vetor de endereço.
- `destination`: Vetor de dados endereçado.

::: warning ATENÇÃO!

`ADDRESSABLE_WIDTH` deve ser menor ou igual a `ADDRESS_WIDTH`.

:::

## Usagem

### ROM Genérica

Implementação a partir de componentes genéricos e lógica a nível de registradores e portas lógicas.

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

Para utilizar o IP é preciso incluir o arquivo `GENERIC_ROM_QUARTUS.vhd` ao invés do `GENERIC_ROM.vhd`. Esta usagem da entidade só está disponível para síntese dentro da plataforma de desenvolvimento para placas FPGA Intel® Quartus® Prime Lite

:::

## Diagrama RTL

<pan-container>

![Diagrama de RTL da ROM](/images/reference/entities/generic_rom_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

<a href="https://github.com/insper-riscv/core/blob/main/test/test_GENERIC_ROM.py" target="blank"><Badge type="tip" text="test_GENERIC_ROM.py &boxbox;" /></a>

### Caso 1 <Badge type="info" text="tb_GENERIC_ROM_case_1" />

<pan-container :grid="false">

![Forma de onda do caso de teste 1 da ROM](/images/reference/entities/tb_generic_rom_case_1.svg){.w-full .dark-invert}

</pan-container>
