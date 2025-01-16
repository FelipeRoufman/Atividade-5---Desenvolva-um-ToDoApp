# SpaceLog

## Sobre o Projeto

SpaceLog é uma aplicação web simples desenvolvida para gerenciar tarefas do dia a dia enquanto interage com um avatar que reage às emoções do usuário. Ele combina HTML, CSS, JavaScript e Tailwind CSS para criar uma interface amigável e responsiva.

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura do conteúdo.
- **CSS3**: Para estilização personalizada.
- **Tailwind CSS**: Para estilização rápida e responsiva.
- **JavaScript**: Para funcionalidades interativas.
- **LocalStorage**: Para persistência de dados no navegador.

## Funcionalidades Principais

1. **Interação com o Avatar**:
   - O avatar muda de expressão com base nas emoções escolhidas: Feliz, Triste ou Neutra.
   - Mensagens personalizadas acompanham cada expressão.

2. **Gerenciamento de Tarefas**:
   - Adicionar novas tarefas.
   - Marcar tarefas como completas ou voltar ao estado pendente.
   - Editar o nome de uma tarefa.
   - Excluir tarefas.

3. **Persistência de Dados**:
   - As tarefas são salvas no LocalStorage, garantindo que sejam mantidas mesmo após o recarregamento da página.

## Como Executar o Projeto

1. **Requisitos**:
   - Um navegador moderno (Google Chrome, Firefox, etc.).

2. **Passos**:
   - Baixe ou clone o repositório para sua máquina.
   - Certifique-se de que os seguintes arquivos estão na estrutura correta:
     ```
     /css/styles.css
     /js/main.js
     /componentes/images/
     ```
   - Abra o arquivo `index.html` em seu navegador.

3. **Dependências Externas**:
   - O projeto utiliza Tailwind CSS diretamente via CDN. Certifique-se de estar conectado à internet para carregar o framework corretamente.

## Estrutura do Projeto

- **HTML**:
  - Estrutura principal da interface, incluindo o avatar, os botões de emoções, e a lista de tarefas.

- **CSS**:
  - Estilização personalizada para complementar o Tailwind CSS e criar uma temática espacial.

- **JavaScript**:
  - Gerenciamento de eventos, manipulação do DOM e integração com LocalStorage.

## Estrutura de Diretórios

```
SpaceLog/
|-- index.html
|-- css/
|   |-- styles.css
|-- js/
|   |-- main.js
|-- componentes/
|   |-- images/
|       |-- Sprite-0001.png
|       |-- Sprite-0002.png
|       |-- Sprite-0003.png
|       |-- Sprite-0004.png
```

## Demonstração de Uso

1. **Interação com o Avatar**:
   - Clique em um dos botões para alterar a expressão do avatar.

2. **Adicionando Tarefas**:
   - Insira o nome de uma nova tarefa no campo de entrada e clique em "Adicionar Tarefa".

3. **Gerenciando Tarefas**:
   - Use os botões ao lado de cada tarefa para completá-la, editá-la ou excluí-la.
