import React, { useState, Fragment } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import {
  GlobalStyle,
  Container,
  FormWrapper,
  ToggleLink,
} from "../src/components/styled-components";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const getToggleTextParts = () => {
    return isLogin
      ? ["Don't have an account?", " Create Now"]
      : ["Already have an account?", " Login Now"];
  };

  const [questionPart, actionPart] = getToggleTextParts();

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <FormWrapper>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <ToggleLink onClick={() => setIsLogin(!isLogin)}>
            <span className="gray-text">{questionPart}</span>
            {actionPart}
          </ToggleLink>
        </FormWrapper>
      </Container>
    </Fragment>
  );
};

export default App;
