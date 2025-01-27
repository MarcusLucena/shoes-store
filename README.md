# shoes-store

## Projeto de Lista de Favoritos

Este é um projeto de lista de favoritos, no qual os usuários podem visualizar uma lista de produtos e adicionar itens à sua lista de favoritos.

### Funcionalidades
- **Página de Produtos:**  
  Exibe uma lista de produtos disponíveis, permitindo que o usuário adicione itens à lista de favoritos.
- **Página de Favoritos:**  
  Apresenta os produtos adicionados à lista de favoritos, com a opção de removê-los.

### Tecnologias Utilizadas
- **Frontend:**
    - Vue 3
    - TypeScript
    - Vue Router
- **Gerenciamento de Estado:**
    - Pinia
- **Comunicação com API:**
    - GraphQL
    - Apollo Client
- **Ferramentas de Desenvolvimento:**
    - Vite
    - ESLint
    - Prettier
    - Vitest


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
   npm install
```

### Compile and Hot-Reload for Development

```sh
   npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
   npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
   npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
   npm run lint
```

### Coverage with [Covarage](https://www.npmjs.com/package/covarage)

```sh
   npm run covarage

```

# Requisitos Funcionais (RF)

## Páginas
- **RF01**: O sistema deve exibir uma página para listar os produtos disponíveis.
    - Deve permitir a exibição de informações como nome, imagem e preço do produto.

- **RF02**: O sistema deve exibir uma página para listar os produtos favoritos.
    - Deve mostrar apenas os produtos marcados como favoritos.
    - Deve atualizar automaticamente ao adicionar ou remover itens favoritos.

## Componentes
- **RF03**: O sistema deve possuir um componente de layout padrão.
    - O componente deve incluir slots para o header e conteúdo principal.
    - Deve garantir consistência no layout entre todas as páginas.

- **RF04**: O sistema deve exibir um header com os seguintes elementos:
    - **RF04.1**: Uma logo clicável que redirecione para a página principal.
    - **RF04.2**: Um botão dropdown de usuários com opções sugeridas no documento de requisitos.
    - **RF04.3**: Um botão para redirecionar à página dos produtos favoritos com um indicador da quantidade de itens favoritos (opcional).

- **RF05**: O sistema deve possuir um componente de card para exibir os produtos.
    - O card deve mostrar informações como nome, imagem e preço do produto.
    - Deve incluir um botão ou ícone para marcar/desmarcar produtos como favoritos.

## Gerenciamento de Estado
- **RF06**: O sistema deve gerenciar a lista de favoritos utilizando uma store.
    - Deve permitir adicionar, remover e listar produtos favoritos.
    - Os dados devem ser persistidos no Local Storage para garantir que a lista seja mantida após o recarregamento da página.

# Requisitos Não Funcionais (RNF)

- **RNF01**: A aplicação deve ser responsiva, garantindo boa usabilidade em dispositivos móveis e desktops.

- **RNF02**: O layout deve ser consistente entre todas as páginas e componentes, seguindo um padrão visual.

- **RNF03**: O sistema deve utilizar o Local Storage para garantir a persistência de dados dos favoritos de forma eficiente.

- **RNF04**: O tempo de carregamento da aplicação não deve exceder 2 segundos em conexões padrão.

- **RNF05**: Os componentes devem ser reutilizáveis sempre que possível, seguindo boas práticas de desenvolvimento.

- **RNF06**: O sistema deve ser compatível com os navegadores mais recentes (Chrome, Firefox, Edge e Safari).
