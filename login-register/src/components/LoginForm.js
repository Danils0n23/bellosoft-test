import React from 'react';
import { Form, Title, Subtitle, InputWrapper, IconWrapper, Input, Button, ForgotPassword, Divider,SocialIcons,SocialIcon,EyeIcon} from './styled-components';
import { FaEnvelope, FaApple, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { FaArrowCircleLeft } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { RiLockFill } from 'react-icons/ri';
const LoginForm = () => (
  <Form>
  <div><FaArrowCircleLeft /></div>  
    <Title>Login</Title>
    <Subtitle>Welcome back!<br /> Please login to continue</Subtitle>
    <InputWrapper>
      <IconWrapper><FaEnvelope /></IconWrapper>
      <Input id="email" type="email" placeholder="Your email address" required />
    </InputWrapper>
    <InputWrapper>
      <IconWrapper><RiLockFill /></IconWrapper>
      <Input type="password" placeholder="Enter your password" required />
      <IconWrapper><EyeIcon /></IconWrapper>
    </InputWrapper>
    <Button>Login</Button>
    <ForgotPassword>Forgot Password</ForgotPassword>
    <Divider>Or Continue with Social Accounts</Divider>
    <SocialIcons>
      <SocialIcon className="google"><FcGoogle  /></SocialIcon>
      <SocialIcon className="facebook"><BiLogoFacebookCircle/></SocialIcon>
      <SocialIcon className="apple"><FaApple /></SocialIcon>
      <SocialIcon className="twitter"><FaTwitter /></SocialIcon>
    </SocialIcons>
  </Form>
);

export default LoginForm;
