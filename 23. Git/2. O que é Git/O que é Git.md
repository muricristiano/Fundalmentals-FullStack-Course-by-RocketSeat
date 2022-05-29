# 1. Controle de versão

- Controle de versões
- Lembrar versões específicas mais tarde
- Reverter para estado anterior determinados arquivos ou um projeto inteiro
- Compare as mudanças ao longo do tempo
- Veja quem modificiou pela última vez algo que pode estar causando um problema
- Quem introduzinho um problema ou quando
- Se você estregar tudo ou perder arquivos, você pode facilmente recuperar
- E muito mais

VCS - Version Control System

# 2. Tipos de controles de versão

- Sistemas Locais
- Sistemas Centralizados
- Sistemas Distribuidos


- Sistema local (O normal, em um diretório comum)
    Copia arquivo de um diretório para outro
    Muito comum e muito simples
    Incrivelmente propensa a erros
    Fácil de sobreescrever arquivos, caso haja feito uma cópia errada


- Sistemas Centralizados
    Fica em um único servidor

    Vantagens sobre o VCSs locais:
        Controle sobre atividades dos colaboradores no projeto.
        Os administradores têm controle refinado sobre quem pode fazer o que.
        Mais fácil de adminstrar um CVCs do que lidar com bancos de dados locais em cada cliente

    Desvantagens:
        Se esse servidor der problema por uma hora, durante essa hora ninguém pode colaborar ou salvar as alterações de versão para o que quer que eles estejam trabalhando.
        Se o disco rídido do banco de dados central for corrompido, você perde absolutamente tudo
        Sistemas VCS locais sofrem com esse mesmo problema.

- Sistemas Distribuidos
Exemplos: Git, Mercurial, Bazaar e Darcs

Utilizaremos o Git nesse curso.

    Vantagens:
    - Duplicar (clonar) localmente o repositório completo.
    - Se qualquer servidor morrer, e esses sistemas estiverem colaborando por meio dele, qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor
    - Cada clone é de fato um backup completo de todos os dados.
    - Clientes usam o estado mais recente dos arquivos.



# 3. O que é o git

    Sistema de controle de versão Distribuído

    - Open-sourse
    - Pontos na história: commit (viagem no tempo)
        - Histórico de alterações no código
        - Voltar para qualquer ponto na história
    - Controlar o fluxo de novas funcionalidades
        - Ramificações: branch (universos paralelos)
        - Vários devs no mesmo projeto
        - Análise e resolução de conflitos
