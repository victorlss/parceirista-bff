# PARCEIRISTA (BFF) - HACKATHON GETNET 2020
![parceirista-logo](https://user-images.githubusercontent.com/11720000/95804671-c0fa5580-0cd9-11eb-87bb-d8f2ff0af5f0.png)

### PROPOSTA DE VALOR
O Parceirista tem como missão facilitar a vida dos microempreendedores por meio de acesso a serviços essenciais para a estruturação do seu novo negócio, com o pagamento destes serviços acontecendo gradualmente através de uma porcentagem da receita gerada pela operação do negócio. 
Gerando demanda para profissionais de diversas áreas ao mesmo tempo que garante a criação de negócios mais preparados para crescer.

### TECNOLOGIA
#### REACT NATIVE + EXPO ([Repositório do aplicativo](https://github.com/victorlss/parceirista-app))
Com React Native e EXPO garantimos a criação de uma aplição robusta, estável e de fácil manutenção,com grande suporte para expansão de funcionalidades.
#### NODE + EXPRESS
Com esta stack conseguimos garantir uma aplicação leve com capacidades elásticas, podendo ser fácilmente dockerizada e orquestrada com Kubernetes.
#### MONGODB
NoSQL mais famoso do momento, consegue suportar gigantescos fluxos de dados. Nos dá a flexibilidade de tanto ter collections com schema definido, mas caso necessário flexibilidade para adotar estruturas schemaless.
#### HEROKU + CONTINOUS INTEGRATION = ENTREGA DE VALOR CONTÍNUA
Nossa aplicação tem seu pipeline integrado ao HEROKU, possibilitando que todo Push bem sucedido vá para produção de forma totalmente automatizada, com deploys progressivos para evitar indisponibilidade do serviço.

### ARQUITETURA
![Arquitetura](https://user-images.githubusercontent.com/11720000/95804478-2732a880-0cd9-11eb-9f6e-3e2a72a963bc.png)

### HTTP ROUTES

<b>POST</b> /auth/login<br />
<b>POST</b> /auth/logout<br />
<br />
<b>POST</b> /contracts<br />
<b>GET</b> /contracts/:id<br />
<b>DELETE</b> /contracts<br />
<b>GET</b> /contracts/user/:id<br />
<br />
<b>GET</b> /health<br />
<br />
<b>POST</b> /payments<br />
<b>GET</b> /payments/:id<br />
<br />
<b>POST</b> /ratings<br />
<b>GET</b> /ratings/:id<br />
<b>DELETE</b> /ratings/:id<br />
<br />
<b>POST</b> /services<br />
<b>GET</b> /services/:id<br />
<b>GET</b> /services/professional/:id<br />
<br />
<b>POST</b> /users<br />
<b>GET</b> /users/:id<br />
<b>GET</b> /users/professional<br />
<b>GET</b> /users/business<br />
<b>DELETE</b> /users/:id<br />
