import React from 'react';
import {
  Form,
  Title,
  Subtitle,
  InputWrapper,
  IconWrapper,
  Input,
  Button,
  Divider,
  SocialIcons,
  SocialIcon,
} from './styled-components'; // Importando apenas os estilos que estão sendo utilizados
import { FaEnvelope, FaApple, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsPhoneFill } from "react-icons/bs";
import { RiLockFill } from 'react-icons/ri';
import { FaArrowCircleLeft } from 'react-icons/fa';

const RegisterForm = () => (
  <Form>
     <FaArrowCircleLeft style={{ color: 'grey', fontSize: '2em' }} />
    <Title>Create Account</Title>
    <Subtitle>Enter your information below or continue with social media account</Subtitle>
    <InputWrapper>
      <IconWrapper><FaEnvelope /></IconWrapper>
      <Input type="email" placeholder="Your email address" required />
    </InputWrapper>
    <InputWrapper>
      <IconWrapper><BsPhoneFill /></IconWrapper>
      <Input type="tel" placeholder="Your mobile number" required />
    </InputWrapper>
    <InputWrapper>
      <IconWrapper><RiLockFill/></IconWrapper>
      <Input type="password" placeholder="Create password" required />
    </InputWrapper>
    <Button>Create Account</Button>
    <Divider>Or Register with Social Accounts</Divider>
    <SocialIcons>
      <SocialIcon className="google"><FcGoogle  /></SocialIcon>
      <SocialIcon className="facebook"><BiLogoFacebookCircle /></SocialIcon>
      <SocialIcon className="apple"><FaApple /></SocialIcon>
      <SocialIcon className="twitter"><FaTwitter /></SocialIcon>
    </SocialIcons>
  </Form>
);

export default RegisterForm;
