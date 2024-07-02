import React, { useState, Fragment } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import {
  GlobalStyle,
  Container,
  FormWrapper,
  ToggleLink,
} from "../src/components/styled-components";
import { FaArrowCircleLeft } from "react-icons/fa";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <FormWrapper>
        <FaArrowCircleLeft />
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <ToggleLink onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Don't have an account? Create Now"
              : "Already have an account? Login Now"}
          </ToggleLink>
        </FormWrapper>
      </Container>
    </Fragment>
  );
};

export default App;
