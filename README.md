
# Tela de Login/Registro

## Tarefa: Construção de uma Tela de Login/Registro

### Descrição
Você deverá construir uma tela de login/registro com base no design fornecido no Figma. A página deve incluir um formulário de login e um formulário de registro, ambos acessíveis a partir de uma interface amigável.

### Requisitos

1. **Formulário de Login**:
   - Inclua campos para email e senha, e um botão de "Entrar".

2. **Formulário de Registro**:
   - Inclua campos para email, celular e senha, e um botão de "Registrar".

3. **Comportamento**:
   - O usuário deve poder alternar entre os formulários de login e registro.

4. **Validação**:
   - Adicione validações básicas nos campos (ex: verificação de email válido, validar se a senha é forte).

5. **Responsividade**:
   - A página deve ser responsiva e funcionar bem em dispositivos móveis.

6. **Interatividade**:
   - Utilize React para validar os campos e para alternar entre os formulários.

## Passos para Implementação

### 1. Configuração do Ambiente

Certifique-se de ter o Node.js e npm instalados em seu sistema.

```bash
# Verifique a versão do Node.js
node -v

# Verifique a versão do npm
npm -v
```

### 2. Inicialize o Projeto React

```bash
npx create-react-app login-register
cd login-register
```

### 3. Instale Dependências Adicionais

```bash
npm install styled-components react-icons react-app-rewired @babel/core @babel/preset-env babel-loader
```

### 4. Configuração do Babel e Webpack

#### Crie o arquivo `config-overrides.js` na raiz do projeto:

```javascript
// config-overrides.js
const { override, addBabelPreset } = require('customize-cra');

module.exports = override(
  addBabelPreset("@babel/preset-env")
);
```

#### Atualize os scripts no `package.json`:

```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
}
```

### 5. Crie os Componentes de Formulário

#### Crie um diretório `src/components` e adicione os seguintes arquivos:

##### `LoginForm.js`

```jsx
import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <div>
        <label>Email</label>
        <input type="email" required />
      </div>
      <div>
        <label>Senha</label>
        <input type="password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
```

##### `RegisterForm.js`

```jsx
import React from 'react';

const RegisterForm = () => {
  return (
    <form>
      <div>
        <label>Email</label>
        <input type="email" required />
      </div>
      <div>
        <label>Celular</label>
        <input type="tel" required />
      </div>
      <div>
        <label>Senha</label>
        <input type="password" required />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegisterForm;
```

### 6. Crie o Componente Principal

#### `App.js`

```jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const ToggleLink = styled.a`
  color: gray;
  cursor: pointer;
  display: block;
  text-align: center;
  margin-top: 10px;
  &:hover {
    color: darkgray;
  }
`;

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <FormWrapper>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <ToggleLink onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Create Now"
            : "Already have an account? Login Now"}
        </ToggleLink>
      </FormWrapper>
    </Container>
  );
}

export default App;
```

### 7. Execute o Projeto

```bash
npm start
```

### 8. Construir o Projeto

Para criar uma versão otimizada para produção do seu projeto, execute:

```bash
npm run build
```

## Conclusão

Com esses passos, você terá uma aplicação funcional de login e registro com validação básica, responsividade e interatividade utilizando React. Siga as etapas acima e adapte conforme necessário para atender aos requisitos do design fornecido.
```

Este `README.md` fornece instruções detalhadas sobre como configurar, desenvolver e executar a tela de login/registro em React, seguindo os requisitos especificados.
