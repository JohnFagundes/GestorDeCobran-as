## BACKEND

## Visão Geral

Esta API fornece recursos para lidar com informações de usuários e clientes, bem como consultas de CEP. Abaixo estão os principais endpoints disponíveis nesta API.

## Endpoints

### Consulta de Endereço por CEP

- **URL**: `/queries/cep`
- **Método HTTP**: GET
- **Descrição**: Este endpoint permite consultar informações de endereço com base no CEP fornecido.
- **Requisitos de Autenticação**: Nenhum
- **Corpo da Solicitação (JSON)**: Deve seguir o esquema `cepSchema`.

### Verificação de Existência de E-mail de Usuário

- **URL**: `/users/email`
- **Método HTTP**: POST
- **Descrição**: Este endpoint verifica se um endereço de e-mail já está em uso.
- **Requisitos de Autenticação**: Nenhum
- **Corpo da Solicitação (JSON)**: Deve seguir o esquema `userEmailExistsSchema`.

### Registro de Usuário

- **URL**: `/users`
- **Método HTTP**: POST
- **Descrição**: Este endpoint permite registrar um novo usuário.
- **Requisitos de Autenticação**: Nenhum
- **Corpo da Solicitação (JSON)**: Deve seguir o esquema `userSchema`.


### Login de Usuário

- **URL**: `/users/login`
- **Método HTTP**: POST
- **Descrição**: Este endpoint permite que os usuários façam login na aplicação.
- **Requisitos de Autenticação**: Nenhum
- **Corpo da Solicitação (JSON)**: Deve seguir o esquema `loginSchema`.

### Edição de Informações de Usuário

- **URL**: `/users`
- **Método HTTP**: PATCH
- **Descrição**: Este endpoint permite que os usuários editem suas informações.
- **Requisitos de Autenticação**: Autenticação é necessária.
- **Corpo da Solicitação (JSON)**: Deve seguir o esquema `editUserSchema`.


### Registro de Cliente

- **URL**: `/clients`
- **Método HTTP**: POST
- **Descrição**: Este endpoint permite registrar informações de clientes.
- **Requisitos de Autenticação**: Autenticação é necessária.
- **Corpo da Solicitação (JSON)**: Deve seguir o esquema `clientSchema`.

---
