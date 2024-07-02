import React, { useState } from 'react';
import {
  Form,
  Title,
  Subtitle,
  InputWrapper,
  IconWrapper,
  Input,
  Button,
  ForgotPassword,
  Divider,
  SocialIcons,
  SocialIcon,
} from './styled-components';
import { FaEnvelope, FaApple, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { RiLockFill } from 'react-icons/ri';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form>
      <FaArrowCircleLeft style={{ color: 'grey', fontSize: '2em' }} />
      <Title>Login</Title>
      <Subtitle>
        Welcome back!
        <br /> Please login to continue
      </Subtitle>

      <InputWrapper>
        <IconWrapper>
          <FaEnvelope />
        </IconWrapper>
        <div style={{ position: 'relative' }}>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            style={{ marginBottom: '20px' }}
            required
          />
          <span
            style={{
              position: 'absolute',
              top: '32px',
              left: 6,
              color: '#aaa',
              fontSize: '0.8em',
              pointerEvents: 'none',
            }}
          >
            Your email address
          </span>
        </div>
      </InputWrapper>

      <InputWrapper>
        <IconWrapper>
          <RiLockFill />
        </IconWrapper>

        <div style={{ position: 'relative' }}>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{ marginBottom: '20px' }}
            required
          />
          <div
            style={{
              position: 'absolute',
              right: '-10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <VscEyeClosed /> : <VscEye />}
          </div> 
          <span
            style={{
              position: 'absolute',
              top: '32px',
              left: 6,
              color: '#aaa',
              fontSize: '0.8em',
              pointerEvents: 'none',
            }}
          >
            Enter your password
          </span>
        </div>
      </InputWrapper>

      <Button>Login</Button>
      <ForgotPassword>Forgot Password</ForgotPassword>
      <Divider>Or Continue with Social Accounts</Divider>

      <SocialIcons>
        <SocialIcon className="google">
          <FcGoogle />
        </SocialIcon>
        <SocialIcon className="facebook">
          <BiLogoFacebookCircle />
        </SocialIcon>
        <SocialIcon className="apple">
          <FaApple />
        </SocialIcon>
        <SocialIcon className="twitter">
          <FaTwitter />
        </SocialIcon>
      </SocialIcons>
    </Form>
  );
};

export default LoginForm;
