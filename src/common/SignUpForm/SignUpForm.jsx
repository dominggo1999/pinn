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
  username: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Min 3 characters')
    .max(20, 'Max 20 characters')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(8, 'must be longer than 8')
    .required('Required'),
});

const SignUpForm = () => {
  const handleSubmit = (e) => {
    console.log('Registering you in');
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
            <Label htmlFor="username">Username</Label>
            <Field
              type="text"
              required
              placeholder="your username"
              name="username"
              autoComplete="off"
              spellCheck="false"
            />
            <ErrorWrapper>
              <ErrorMessage
                name="username"
              />
            </ErrorWrapper>
          </FieldWrapper>

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

          <FormButton type="submit">Sign up</FormButton>
        </FormWrapper>

        <FormMessage>
          Already have an account?
          <Link to="/auth">
            {' '}
            Sign in
          </Link>
        </FormMessage>
      </Form>

    </Formik>
  );
};

export default SignUpForm;
