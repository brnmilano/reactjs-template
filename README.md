# ReactJS Template

Um template inicial para projetos React usando Vite e TypeScript.

## Tecnologias

- **React**: Biblioteca para criação de interfaces de usuário.
- **TypeScript**: Suporte a tipos estáticos para JavaScript.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
- **ESLint**: Ferramenta de linting para manter o código limpo e consistente.
- **clsx**: Ferramenta para gerenciar nomes de classe de forma mais eficiente e legível.
- **Sass**: Ferramenta de extensão do CSS que permite escrever CSS de forma mais organizada e reutilizável.
- **React Hook Form**: Ferramenda para o processo de criação e validação de formulários de forma simples.
- **React Input Mask**: Ferramenta de criação de máscaras.

## Iniciando o projeto

- Para iniciar o projeto, garanta que você possui uma versão atualizada do [npm](https://www.npmjs.com/). Após isso, instale as dependências rodando no terminal o seguinte comando:

  ```
  npm install
  ```

- Após concluir essa etapa, há alguns scripts adicionais disponíveis para você:

  Iniciar em modo de desenvolvimento:

  ```
  npm run dev
  ```

  Iniciar em modo de produção:

  ```
  npm run start
  ```

  Para compilar o projeto e verificar a integridade do build, utilize o comando:

  ```
  npm run build
  ```

  Para validar a formatação do código e garantir a conformidade com as regras definidas, execute:

  ```
  npm run lint
  ```

---

- **reactjs-template/**
  - **public/**: Contém arquivos estáticos como ícones e imagens públicas
  - **src/**: Código-fonte do aplicativo
    - **components/**: Componentes React reutilizáveis
    - **constants**: Arquivos como schemas.ts, paths.ts, messages.ts
    - **helpers**: Arquivos com funções utilitárias ou módulos que são usados para realizar tarefas específicas e reutilizáveis
    - **hooks**: Arquivos com os Contextos do projeto, como useCommon.tsx
    - **models**: Arquivos de validação de formulários ou outros campos utilizados no projeto
    - **pages**: Arquivos das páginas do projeto
    - **styles**: Arquivos de estilização para o projeto
    - **types**: Arquivos de tipagens para trechos de código específicos do projeto
    - **utils**: Arquivos com funções utilitárias amplamente utilizadas em várias partes do projeto
    - **App.tsx**: Componente principal que define a estrutura do aplicativo
    - **main.tsx**: Ponto de entrada principal para o aplicativo
  - **.eslintrc.js**: Configuração do ESLint para análise de código e regras de estilo
  - **tsconfig.json**: Configuração do TypeScript para definir opções de compilação
  - **vite.config.ts**: Configuração do Vite para gerenciamento de build e desenvolvimento
