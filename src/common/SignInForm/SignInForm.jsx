import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import {
  FormWrapper,
  Label,
  FieldWrapper,
  ErrorWrapper,
  FormButton,
  FormMessage,
} from '../AuthForm';
import Link from '../Link';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(8, 'must be longer than 8')
    .required('Required'),
});

const SignInForm = () => {
  const handleSubmit = (e) => {
    console.log('Signing you in');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormWrapper>
          <FieldWrapper>
            <Label htmlFor="email">Email</Label>
            <Field
              type="email"
              required
              placeholder="myemail@email.com"
              name="email"
              autoComplete="off"
              spellCheck="false"
            />
            <ErrorWrapper>
              <ErrorMessage
                name="email"
              />
            </ErrorWrapper>
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="password">Password</Label>
            <Field
              type="password"
              required
              name="password"
            />
            <ErrorWrapper>
              <ErrorMessage
                name="password"
              />
            </ErrorWrapper>
          </FieldWrapper>
          <FormButton type="submit">Sign in</FormButton>
        </FormWrapper>

        <FormMessage>
          Don&apos;t have an account yet?
          {' '}
          <Link to="sign-up">
            Sign up
          </Link>
        </FormMessage>
        <FormMessage>
          <Link to="forgot-password">
            Forgot password?
          </Link>
        </FormMessage>
      </Form>

    </Formik>
  );
};

export default SignInForm;
