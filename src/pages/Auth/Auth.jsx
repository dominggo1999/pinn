import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  LoginWrapper,
  VideoWrapper,
  FormSection,
  Overlay,
  Title,
  Description,
} from './Auth.style';

import SignInForm from '../../common/SignInForm/SignInForm';
import SignUpForm from '../../common/SignUpForm/SignUpForm';
import ResetPassword from '../../common/ResetPasswordForm/ResetPassword';

const Auth = () => {
  return (
    <LoginWrapper>
      <VideoWrapper>
        <video
          src="./login-video.mp4"
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
        />
        <Overlay />
      </VideoWrapper>
      <FormSection>
        <Title>PINN</Title>
        <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi maxime velit sed sunt.</Description>

        <Routes>
          <Route
            path="/"
            element={
              <SignInForm />
          }
          />
          <Route
            path="/sign-up"
            element={
              <SignUpForm />
          }
          />
          <Route
            path="/forgot-password"
            element={
              <ResetPassword />
          }
          />
        </Routes>
      </FormSection>
    </LoginWrapper>
  );
};

export default Auth;
