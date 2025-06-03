# Bezy - Plataforma de Serviços de Beleza

## Sobre o Projeto
O **Bezy** é uma plataforma que conecta profissionais autônomos de beleza a clientes, facilitando agendamentos, pagamentos e avaliações em um só lugar. Nosso objetivo é trazer praticidade para quem busca serviços de beleza e oferecer uma ferramenta eficiente para profissionais organizarem seus atendimentos.

## Problema e Solução
**Problema:** Profissionais autônomos de beleza enfrentam dificuldades para atrair clientes e gerenciar seus horários, enquanto clientes têm dificuldade em encontrar serviços de qualidade disponíveis a domicílio.

**Solução:** O Bezy oferece uma plataforma intuitiva onde profissionais podem exibir seus serviços, gerenciar sua agenda e receber pagamentos de forma segura, enquanto clientes encontram e contratam serviços de maneira prática e confiável.

## Equipe
- **João Eduardo Monteiro Cavalcanti**
- **Jonas de Lima Neto**
- **Leonardo Felipe Demetrio Lins Nascimento**

## Alinhamento com os ODS
Este projeto está alinhado com o **ODS 8 - Trabalho Decente e Crescimento Econômico**, pois incentiva o empreendedorismo no setor de beleza, promovendo oportunidades e facilitando a geração de renda para profissionais autônomos.

## Funcionalidades Principais
1. **Cadastro e Login** - Perfis personalizados para clientes e profissionais.  
2. **Criação e Personalização de Perfil** - Profissionais podem adicionar portfólio, preços e serviços.  
3. **Agenda Integrada e Gerenciamento de Horários** - Ferramenta para organização de atendimentos.  
4. **Sistema de Agendamento Online** - Clientes podem buscar e contratar profissionais.  
5. **Pagamento Integrado e Seguro** - Suporte para cartão, PIX e reembolsos.  
6. **Avaliações e Sistema de Reputação** - Feedbacks para aumentar a confiança na plataforma.  
7. **Geolocalização e Filtros Avançados** - Busca por distância e especialidades.  
8. **Chat e Suporte** - Comunicação direta entre clientes e profissionais.  
9. **Notificações Push e Lembretes** - Alertas automáticos sobre agendamentos.  
10. **Dashboard Analítico para Profissionais** - Estatísticas de atendimentos e feedbacks.

## 🧩 Histórias de Usuário (3Cs)

Com base nas funcionalidades implementadas, detalhamos as seguintes 11 histórias de usuário no formato 3Cs (Card, Conversation, Confirmation), com links diretos para as evidências em nosso Jira e repositório GitHub:

### 1. **Página Inicial e Fluxo de Acesso**

**Card:**
Como novo usuário, quero acessar uma página inicial convidativa que apresente os benefícios da Bezy e as opções de cadastro/login, servindo como porta de entrada para a plataforma.

**Conversation:**
- O usuário é recebido pela página inicial principal do aplicativo, destacando os diferenciais do Bezy.
- A página oferece seções com os principais serviços, benefícios e depoimentos de clientes.
- Botões claros de "Criar conta" e "Entrar" direcionam o usuário para o fluxo de autenticação.

**Confirmation:**
- [x] Página inicial (Landing Page) implementada com sucesso 
- [x] Seções de benefícios e chamadas para ação bem definidas 

---

### 2. **Cadastro e Criação de Perfil com Upload de Imagem**

**Card:**
Como usuário, quero me cadastrar e criar um perfil (seja como cliente ou profissional) para acessar os serviços do Bezy, e como profissional, quero incluir um campo para upload de imagem na tela de cadastro para personalizar meu perfil.

**Conversation:**
- O usuário é direcionado para a tela de cadastro a partir da página inicial.
- Durante o cadastro, o usuário pode selecionar se é "Cliente" ou "Profissional".
- O formulário para "Profissional" inclui campos adicionais como especialidades, endereço e descrição.
- Um campo específico permite o upload de uma foto de perfil, personalizando a experiência.

**Confirmation:**
- [x] Telas de Cadastro de Usuário e Profissional implementadas
- [x] Campo para upload de imagem no cadastro funcional
- [x] Opções de cadastro para cliente e profissional presentes

---

### 3. **Navegação Global e Acesso a Páginas**

**Card:**
Como usuário, quero navegar facilmente entre as principais seções da plataforma (Início, Serviços, Favoritos, Contato, Sobre Nós, Perfil) através de um menu de navegação global consistente, e que o roteamento de páginas reflita a URL atual para uma experiência fluida de SPA.

**Conversation:**
- Um cabeçalho de navegação (Header) é exibido consistentemente em várias páginas do aplicativo.
- Este header contém links ativos que permitem ao usuário transitar entre as principais seções sem recarregar a página.
- A URL na barra de endereço do navegador se atualiza dinamicamente conforme o usuário navega, mantendo a responsividade do aplicativo.

**Confirmation:**
- [x] Componente de Navegação Global (Header) implementado e reutilizado 
- [x] Roteamento de páginas com React Router funcional 
- [x] Navegação fluida entre todas as rotas principais do aplicativo 

---

### 4. **Visualização e Seleção de Serviços Detalhada**

**Card:**
Como cliente, quero ver uma lista clara e organizada de serviços de beleza disponíveis para escolher o que preciso, facilitando minha decisão.

**Conversation:**
- O cliente acessa a seção de "Serviços" através da navegação.
- Uma galeria de categorias de serviços é apresentada (ex: Cabeleireiro, Manicure, Maquiagem).
- Cada categoria é clicável e direciona o usuário para uma lista de profissionais especializados naquele serviço.

**Confirmation:**
- [x] Tela de seleção de serviços implementada e funcional 
- [x] Categorias de serviços claramente apresentadas e clicáveis 

---

### 5. **Listagem, Filtro e Reputação de Profissionais**

**Card:**
Como cliente, quero visualizar os profissionais de beleza disponíveis, com suas avaliações e distância, e poder filtrá-los por especialidade e ordenar por relevância (avaliação/distância), além de ver suas reputações, para encontrar o melhor serviço.

**Conversation:**
- Após selecionar um serviço, o cliente é levado à tela de listagem de profissionais.
- Cada profissional é exibido com sua foto, nome, avaliação em estrelas e o número de avaliações, além da distância aproximada.
- Um seletor permite ordenar a lista por "Avaliação" ou "Distância".

**Confirmation:**
- [x] Tela de listagem de profissionais implementada 
- [x] Exibição clara de foto, nome, avaliação e distância para cada profissional 
- [x] Funcionalidade de ordenação por Avaliação e Distância implementada 
- [x] Exibição das especialidades e pontuação de avaliação dos profissionais 

---

### 6. **Confirmação e Detalhes de Pagamento do Agendamento**

**Card:**
Como cliente, quero revisar todos os detalhes do meu agendamento e ter uma indicação do método de pagamento, para garantir que as informações estão corretas antes da finalização.

**Conversation:**
- Após selecionar um profissional e um horário, o cliente é direcionado para uma tela de resumo do agendamento.
- Esta tela detalha o serviço, data, hora, profissional, endereço, preço e o método de pagamento pré-selecionado (ex: "Cartão Mastercard final 1234").
- Um botão "Confirmar Agendamento" permite prosseguir.

**Confirmation:**
- [x] Tela de confirmação de agendamento implementada 
- [x] Exibição de todos os detalhes do agendamento, incluindo o método de pagamento 

---

### 7. **Visualização de Serviços Agendados para Profissionais**

**Card:**
Como profissional, quero visualizar meus agendamentos confirmados com detalhes do cliente, serviço, horário e endereço, como um painel inicial para gerenciar minha agenda e acompanhar os atendimentos.

**Conversation:**
- Após o login como profissional, o usuário pode acessar uma área que lista seus agendamentos.
- Cada agendamento exibe o nome do cliente, o serviço a ser prestado, o horário e o endereço completo do atendimento.
- Esta lista serve como uma visão rápida da carga de trabalho e compromissos futuros.

**Confirmation:**
- [x] Tela de visualização de serviços agendados para profissionais implementada 
- [x] Detalhes essenciais (cliente, serviço, horário, endereço) visíveis para cada agendamento 

---

### 8. **Página Institucional "Sobre Nós"**

**Card:**
Como usuário, quero acessar uma página dedicada para entender a missão, visão e valores da Bezy, e conhecer os membros da equipe por trás do projeto, criando um senso de confiança e transparência.

**Conversation:**
- O usuário navega até a seção "Sobre Nós" através do menu principal.
- A página apresenta informações institucionais sobre a Bezy, sua origem, missão, visão e valores, além de uma seção destacando os fundadores do projeto.

**Confirmation:**
- [x] Página "Sobre Nós" implementada e acessível via navegação global
- [x] Conteúdo com missão, visão, valores e informações da equipe 

---

### 9. **Página de Contato e Acesso a Suporte**

**Card:**
Como usuário, quero ter acesso fácil a informações de contato e canais de suporte da Bezy, para tirar dúvidas, fazer sugestões ou buscar ajuda em caso de problemas, garantindo um canal de comunicação direto.

**Conversation:**
- O usuário encontra um link de navegação para a seção "Contato" no header.
- A página de contato exibe diversos canais de comunicação, como e-mail, WhatsApp e links para as redes sociais oficiais da Bezy.
- Informações sobre os membros da equipe, incluindo links para seus perfis profissionais (LinkedIn), são apresentadas.

**Confirmation:**
- [x] Página de Contato implementada e acessível
- [x] Canais de comunicação (e-mail, WhatsApp, redes sociais) claramente exibidos 
- [x] Links para perfis dos membros da equipe na página 

---

### 10. **Finalização e Atualização de Protótipos (Lo-Fi)**

**Card:**
Como parte da equipe de design/desenvolvimento, quero garantir que os protótipos Lo-Fi do projeto estejam atualizados e reflitam as funcionalidades implementadas no front-end, servindo como documentação visual do que foi construído.

**Conversation:**
- Os protótipos no Figma são revisados e ajustados para corresponder às telas e fluxos desenvolvidos em React.js.
- As atualizações incluem novas telas ou modificações nas existentes, alinhando o design com a implementação.

**Confirmation:**
- [x] Protótipos Lo-Fi atualizados no Figma 
- [x] Link do Figma no README.md aponta para a versão mais recente dos protótipos 

---

### 11. **Roteamento Interno da Aplicação (Experiência SPA)**

**Card:**
Como usuário, quero que a navegação entre as diferentes seções do aplicativo seja fluida e que a URL do navegador reflita a página atual, proporcionando uma experiência de Single Page Application (SPA) e permitindo que eu compartilhe ou salve links diretamente.

**Conversation:**
- Ao interagir com os elementos de navegação (links no header, botões que direcionam para outras telas), o conteúdo da página é atualizado sem um recarregamento completo do navegador.
- A URL na barra de endereço do navegador muda dinamicamente para corresponder à seção visualizada (`/`, `/servicos`, `/profissionais`, etc.).
- Todas as rotas essenciais da aplicação estão configuradas via React Router DOM, direcionando para os componentes React corretos.

**Confirmation:**
- [x] Roteamento interno da aplicação configurado com `react-router-dom`
- [x] Navegação fluida e sem refresh entre as principais rotas
- [x] URLs amigáveis refletindo a página atual (`/`, `/servicos`, `/profissionais`, `/confirmar`, `/agendados`, `/sobre`, `/contato`)

## Backlog e Desenvolvimento

### 🔧 Jira
Para organização das tarefas e acompanhamento do desenvolvimento, utilizamos o Jira. Acesse nosso backlog e sprints:  
🔗 [https://cesar---bezy.atlassian.net/jira/software/projects/BEZY/boards/1](https://cesar---bezy.atlassian.net/jira/software/projects/BEZY/boards/1)

### 🎨 Protótipos Lo-Fi (Figma)
Os protótipos iniciais estão disponíveis no Figma para consulta e validação:  
🔗 [https://www.figma.com/proto/WtoO9gaEcyqsauhtwaG4AT/Bezy?node-id=9-627&p=f&t=4xViWbnZh93HmdGv-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A627](https://www.figma.com/proto/WtoO9gaEcyqsauhtwaG4AT/Bezy?node-id=9-627&p=f&t=4xViWbnZh93HmdGv-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A627)

### 🎥 Screencast do Projeto
Assista ao vídeo de apresentação da proposta do Bezy:  
🔗 [https://www.youtube.com/watch?v=6zeOWeKXAes](https://www.youtube.com/watch?v=6zeOWeKXAes)

Assista ao vídeo de implementação das 3 histórias de usuário que fizemos utilizando React, HTML e CSS:

🔗 https://youtu.be/ujdQANTK_rw

### 🖧 Deployment Bezy (Vercel)
Clique e visualize como está o bezy na internet:

🔗 https://wolf-sand.vercel.app

### ❗💻 ISSUE/BUG Tracker:

![image](https://github.com/user-attachments/assets/661e2eb8-996c-4ce2-a9c9-b6a4350861e6)


### 🗺️ Diagramas de Atividade: 

🔗 https://lucid.app/lucidspark/ef0e403b-cef3-43f8-865d-7d63c3344cad/edit?viewport_loc=-1280%2C-338%2C3111%2C1545%2C0_0&invitationId=inv_60bcd29a-81c1-4bcb-afbf-4f56efe682e2

### Diagrama de atividades completo: 

![image](https://github.com/user-attachments/assets/25029d26-bb5d-4eb0-b817-4dfc5b621544)


### Diagrama da tela de Cadastro e Login:

![image](https://github.com/user-attachments/assets/a9ad82d4-1725-4ffe-9b87-2c3299df168e)


### Diagrama da Tela de Agendamento:

![image](https://github.com/user-attachments/assets/3643422f-28ca-4158-b109-c25ba8569328)


## Programação em par (Justificativa)

Optamos por não utilizar a programação em par por sermos apenas em 3 integrantes, juntamente com a divergência de horários de cada um, e, por precisarmos entregar 3 telas, cada um foi designado para fazer uma tela.
  Além de fazermos reuniões mostrando como estava ficando cada tela, para assim, sabermos o que cada um estava fazendo. E com tudo alinhado, enviar o que fizemos para nosso repositório no GitHub.

## 📌 Status do Projeto
- ✅ **Kickoff** *(Concluído)*  
- ✅ **Entrega 01** *(Concluído)*  
- ✅ **Entrega 02** *(Concluído)*  
- ⏳**Entrega03 e 04** *(Em andamento)*
