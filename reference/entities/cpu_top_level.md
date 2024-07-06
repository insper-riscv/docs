---
outline: 2
---

# Unidade Central de Processamento

<a href="https://github.com/insper-riscv/core/blob/main/src/CPU_TOP_LEVEL.vhd" target="blank"><Badge type="tip" text="CPU_TOP_LEVEL.vhd &boxbox;" /></a>

## Topologia

<pan-container>

![alt text](/images/reference/entities/cpu_top_level_topology.mermaid.drawio.svg){.w-full .dark-invert}

</pan-container>

## Fluxo do _Pipeline_

<pan-container>

![](/images/reference/entities/top_level_pipeline.drawio.svg){.w-full .dark-invert}

</pan-container>

## Fluxo de sinais

<pan-container>

![Topologia do Top Level](/images/reference/report_components/top_level.drawio.svg){.w-full .dark-invert}

</pan-container>

## Área por módulo

<pan-container>

![alt text](/public/images/reference/entities/cpu_top_level_scale.svg){.w-full .dark-invert}

</pan-container>

## Interface

```vhdl
entity CPU_TOP_LEVEL is

    port (
        clock           : in  std_logic := '0';
        clear           : in  std_logic := '0';
        enable          : in  std_logic := '1';
        memory_read     : out std_logic;
        memory_write    : out std_logic;
        data_program    : in  WORK.CPU.t_PROGRAM := WORK.RV32I.NULL_INSTRUCTION;
        data_memory_in  : in  WORK.CPU.t_DATA    := (others => '0');
        data_memory_out : out WORK.CPU.t_DATA;
        address_program : out WORK.CPU.t_DATA;
        address_memory  : out WORK.CPU.t_DATA
    );

end entity;
```

- `clock`: Sinal de clock.
- `clear`: Limpa os dados da entidade.
- `enable`: Habilita a entidade.
- `data_program`: Dados da instrução da memória de programa.
- `data_memory_in`: Dados de leitura da memória de dados.
- `memory_read`: Habilita leitura da memória de dados.
- `memory_write`: Habilita escrita na memória de dados.
- `data_memory_out`: Dados de escrita na memória de dados.
- `address_program`: Endereçamento da memória de programa.
- `address_memory`: Endereçamento da memória de dados.

## Usagem

### Especificação RV32I RTL

Implementação a partir de componentes genéricos e lógica a nível de
registradores e portas lógicas. Não amigável para FPGA, menor performance e
consome mais recursos de síntese.

```vhdl
CPU : entity WORK.CPU_TOP_LEVEL(RV32I)
    port map (
        clock           => clock,
        clear           => '0',
        enable          => '1',
        memory_read     => enable_memory_read,
        memory_write    => enable_memory_write,
        data_program    => data_program,
        data_memory_in  => data_memory_in,
        data_memory_out => data_memory_out,
        address_program => address_program,
        address_memory  => address_memory
    );
```

### Especificação RV32I Sinóptica

::: danger WORK IN PROGRES

Implementação a partir de componentes genéricos e lógica descritiva. Amigável
para FPGA.

```vhdl
CPU : entity WORK.CPU_TOP_LEVEL(RV32I_SYN)
    port map (
        clock           => clock,
        clear           => '0',
        enable          => '1',
        memory_read     => enable_memory_read,
        memory_write    => enable_memory_write,
        data_program    => data_program,
        data_memory_in  => data_memory_in,
        data_memory_out => data_memory_out,
        address_program => address_program,
        address_memory  => address_memory
    );
```

:::

### Especificação RV32IM RTL

::: danger WORK IN PROGRES

To do.

:::

### Especificação RV32IM Sinóptica

::: danger WORK IN PROGRES

To do.

:::

## Diagrama RTL

<pan-container>

![Diagrama de RTL da CPU](/images/reference/entities/cpu_top_level_netlist.svg){.w-full .dark-invert}

</pan-container>

## Casos de teste

<a href="https://github.com/insper-riscv/core/blob/main/test/test_CPU_TOP_LEVEL.py" target="blank"><Badge type="tip" text="test_CPU_TOP_LEVEL.py &boxbox;" /></a>

### Caso de instruções `ADD` <Badge type="info" text="tb_cpu_top_level_add"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_ADD.S" target="blank"><Badge type="tip" text="testcase_ADD.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções ADD da CPU](/images/reference/entities/tb_cpu_top_level_add.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `ADDI` <Badge type="info" text="tb_cpu_top_level_addi"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_ADDI.S" target="blank"><Badge type="tip" text="testcase_ADDI.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções ADDI da CPU](/images/reference/entities/tb_cpu_top_level_addi.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `AND` <Badge type="info" text="tb_cpu_top_level_and"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_AND.S" target="blank"><Badge type="tip" text="testcase_AND.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções AND da CPU](/images/reference/entities/tb_cpu_top_level_and.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `ANDI` <Badge type="info" text="tb_cpu_top_level_andi"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_ANDI.S" target="blank"><Badge type="tip" text="testcase_ANDI.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções ANDI da CPU](/images/reference/entities/tb_cpu_top_level_andi.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `AUIPC` <Badge type="info" text="tb_cpu_top_level_auipc"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_AUIPC.S" target="blank"><Badge type="tip" text="testcase_AUIPC.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções AUIPC da CPU](/images/reference/entities/tb_cpu_top_level_auipc.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `BEQ` <Badge type="info" text="tb_cpu_top_level_beq"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_BEQ.S" target="blank"><Badge type="tip" text="testcase_BEQ.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções BEQ da CPU](/images/reference/entities/tb_cpu_top_level_beq.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `BGE` <Badge type="info" text="tb_cpu_top_level_bge"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_BGE.S" target="blank"><Badge type="tip" text="testcase_BGE.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções BGE da CPU](/images/reference/entities/tb_cpu_top_level_bge.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `BGEU` <Badge type="info" text="tb_cpu_top_level_bgeu"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_BGEU.S" target="blank"><Badge type="tip" text="testcase_BGEU.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções BGEU da CPU](/images/reference/entities/tb_cpu_top_level_bgeu.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `BLT` <Badge type="info" text="tb_cpu_top_level_blt"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_BLT.S" target="blank"><Badge type="tip" text="testcase_BLT.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções BLT da CPU](/images/reference/entities/tb_cpu_top_level_blt.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `BLTU` <Badge type="info" text="tb_cpu_top_level_bltu"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_BLTU.S" target="blank"><Badge type="tip" text="testcase_BLTU.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções BLTU da CPU](/images/reference/entities/tb_cpu_top_level_bltu.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `BNE` <Badge type="info" text="tb_cpu_top_level_bne"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_BNE.S" target="blank"><Badge type="tip" text="testcase_BNE.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções BNE da CPU](/images/reference/entities/tb_cpu_top_level_bne.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `JAL` <Badge type="info" text="tb_cpu_top_level_jal"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_JAL.S" target="blank"><Badge type="tip" text="testcase_JAL.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções JAL da CPU](/images/reference/entities/tb_cpu_top_level_jal.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `JALR` <Badge type="info" text="tb_cpu_top_level_jalr"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_JALR.S" target="blank"><Badge type="tip" text="testcase_JALR.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções JALR da CPU](/images/reference/entities/tb_cpu_top_level_jalr.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `LB` <Badge type="info" text="tb_cpu_top_level_lb"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_LB.S" target="blank"><Badge type="tip" text="testcase_LB.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções LB da CPU](/images/reference/entities/tb_cpu_top_level_lb.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `LBU` <Badge type="info" text="tb_cpu_top_level_lbu"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_LBU.S" target="blank"><Badge type="tip" text="testcase_LBU.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções LBU da CPU](/images/reference/entities/tb_cpu_top_level_lbu.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `LH` <Badge type="info" text="tb_cpu_top_level_lh"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_LH.S" target="blank"><Badge type="tip" text="testcase_LH.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções LH da CPU](/images/reference/entities/tb_cpu_top_level_lh.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `LHU` <Badge type="info" text="tb_cpu_top_level_lhu"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_LHU.S" target="blank"><Badge type="tip" text="testcase_LHU.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções LHU da CPU](/images/reference/entities/tb_cpu_top_level_lhu.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `LUI` <Badge type="info" text="tb_cpu_top_level_lui"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_LUI.S" target="blank"><Badge type="tip" text="testcase_LUI.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções LUI da CPU](/images/reference/entities/tb_cpu_top_level_lui.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `LW` <Badge type="info" text="tb_cpu_top_level_lw"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_LW.S" target="blank"><Badge type="tip" text="testcase_LW.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções LW da CPU](/images/reference/entities/tb_cpu_top_level_lw.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `OR` <Badge type="info" text="tb_cpu_top_level_or"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_OR.S" target="blank"><Badge type="tip" text="testcase_OR.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções OR da CPU](/images/reference/entities/tb_cpu_top_level_or.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `ORI` <Badge type="info" text="tb_cpu_top_level_ori"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_ORI.S" target="blank"><Badge type="tip" text="testcase_ORI.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções ORI da CPU](/images/reference/entities/tb_cpu_top_level_ori.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SB` <Badge type="info" text="tb_cpu_top_level_sb"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SB.S" target="blank"><Badge type="tip" text="testcase_SB.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SB da CPU](/images/reference/entities/tb_cpu_top_level_sb.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SH` <Badge type="info" text="tb_cpu_top_level_sh"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SH.S" target="blank"><Badge type="tip" text="testcase_SH.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SH da CPU](/images/reference/entities/tb_cpu_top_level_sh.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SLL` <Badge type="info" text="tb_cpu_top_level_sll"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SLL.S" target="blank"><Badge type="tip" text="testcase_SLL.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SLL da CPU](/images/reference/entities/tb_cpu_top_level_sll.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SLLI` <Badge type="info" text="tb_cpu_top_level_slli"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SLLI.S" target="blank"><Badge type="tip" text="testcase_SLLI.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SLLI da CPU](/images/reference/entities/tb_cpu_top_level_slli.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SLT` <Badge type="info" text="tb_cpu_top_level_slt"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SLT.S" target="blank"><Badge type="tip" text="testcase_SLT.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SLT da CPU](/images/reference/entities/tb_cpu_top_level_slt.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SLTI` <Badge type="info" text="tb_cpu_top_level_slti"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SLTI.S" target="blank"><Badge type="tip" text="testcase_SLTI.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SLTI da CPU](/images/reference/entities/tb_cpu_top_level_slti.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SLTIU` <Badge type="info" text="tb_cpu_top_level_sltiu"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SLTIU.S" target="blank"><Badge type="tip" text="testcase_SLTIU.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SLTIU da CPU](/images/reference/entities/tb_cpu_top_level_sltiu.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SLTU` <Badge type="info" text="tb_cpu_top_level_sltu"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SLTU.S" target="blank"><Badge type="tip" text="testcase_SLTU.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SLTU da CPU](/images/reference/entities/tb_cpu_top_level_sltu.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SRA` <Badge type="info" text="tb_cpu_top_level_sra"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SRA.S" target="blank"><Badge type="tip" text="testcase_SRA.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SRA da CPU](/images/reference/entities/tb_cpu_top_level_sra.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SRAI` <Badge type="info" text="tb_cpu_top_level_srai"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SRAI.S" target="blank"><Badge type="tip" text="testcase_SRAI.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SRAI da CPU](/images/reference/entities/tb_cpu_top_level_srai.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SRL` <Badge type="info" text="tb_cpu_top_level_srl"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SRL.S" target="blank"><Badge type="tip" text="testcase_SRL.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SRL da CPU](/images/reference/entities/tb_cpu_top_level_srl.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SRLI` <Badge type="info" text="tb_cpu_top_level_srli"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SRLI.S" target="blank"><Badge type="tip" text="testcase_SRLI.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SRLI da CPU](/images/reference/entities/tb_cpu_top_level_srli.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SUB` <Badge type="info" text="tb_cpu_top_level_sub"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SUB.S" target="blank"><Badge type="tip" text="testcase_SUB.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SUB da CPU](/images/reference/entities/tb_cpu_top_level_sub.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `SW` <Badge type="info" text="tb_cpu_top_level_sw"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_SW.S" target="blank"><Badge type="tip" text="testcase_SW.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções SW da CPU](/images/reference/entities/tb_cpu_top_level_sw.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `XOR` <Badge type="info" text="tb_cpu_top_level_xor"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_XOR.S" target="blank"><Badge type="tip" text="testcase_XOR.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções XOR da CPU](/images/reference/entities/tb_cpu_top_level_xor.svg){.w-full .dark-invert}

</pan-container>

### Caso de instruções `XORI` <Badge type="info" text="tb_cpu_top_level_xori"/>
<a href="https://github.com/insper-riscv/core/blob/main/data/assembly/testcase_XORI.S" target="blank"><Badge type="tip" text="testcase_XORI.S &boxbox;" /></a>

<pan-container :grid="false">

![Forma de onda do caso de instruções XORI da CPU](/images/reference/entities/tb_cpu_top_level_xori.svg){.w-full .dark-invert}

</pan-container>
