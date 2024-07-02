import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url('/background.jpg') no-repeat center center fixed;
    background-size: cover;
    padding: 0;
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  top: 127px;
  left: 3px;
  gap: 0px;
  opacity: 0px;2
  font-family: Tenor Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: 28.08px;
  text-align: left;
`;

export const Subtitle = styled.p`
  opacity: 0px;
  font-family: Tenor Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.32px;
  text-align: left;
  color: rgba(139, 139, 139, 1);
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  background: #f9f9f9;
  
`;

export const IconWrapper = styled.div`
  margin-right: 0.5rem;
  color: #999;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 0.5rem;
`;

export const Button = styled.button`
  background: #a0522d;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background: #8b4513;
  }
`;

export const ForgotPassword = styled.a`
  text-align: center;
  color: #a0522d;
  cursor: pointer;
  gap: 0px;
  opacity: 0px;
  font-family: Tenor Sans;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.21px;
  text-align: center;
`;

export const Divider = styled.div`
  text-align: center;
  margin: 1rem 0; 
   padding-top: 89px;
  color: #999;
  height: 15px;
  gap: 0px;
  opacity: 0px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68.75px;
  height: 64px;
  padding: 20px 0 0 0;
  gap: 10px;
  border-radius: 8px 0 0 0;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.3s, width 0.3s, height 0.3s, opacity 0.3s;
  opacity: 1;
  border: none;
  outline: none;
  box-shadow: 
    0px 0px 1px 0px rgba(0, 0, 0, 0.04), /* Sombra 1 */
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), /* Sombra 2 */
    0px 10px 20px 0px rgba(0, 0, 0, 0.04); /* Sombra 3 */

  &.google {
    background-color: #ffffff;
    color: #db4437;
  }

  &.facebook {
    background-color: #ffffff;
    color: #3b5998;
  }

  &.apple {
    background-color: #ffffff;
    color: #000000;
  }

  &.twitter {
    background-color: #ffffff;
    color: #1da1f2;
  }

  &:hover {
    background-color: #f0f0f0; /* Cor de fundo ao passar o mouse */
  }

  svg {
    width: 23.49px; /* Largura do ícone */
    height: 24px; /* Altura do ícone */
    transition: width 0.3s, height 0.3s; /* Transição para aumento gradual */
  }
`;



export const ToggleLink = styled.span`
  font-family: Tenor Sans;
  padding-top:10px;
  color: #a0522d;
  text-align: center;
  cursor: pointer;
  gap: 0px;
  opacity: 0px;
  font-weight: 400;
  line-height: 15.21px;
  text-align: center;
  text-align: center;
  margin: 1rem 0; 
   padding-top: 89px;
  
  height: 15px;
  gap: 0px;
  opacity: 0px;
  
;
.gray-text {
  color: gray;
  text-align: center;

  }
`;