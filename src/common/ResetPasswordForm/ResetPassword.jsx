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
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
});

const ResetPassword = () => {
  const handleSubmit = (e) => {
    console.log('Sending reset password instruction');
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
            <FormButton type="submit">Send Link</FormButton>
          </FieldWrapper>

        </FormWrapper>

        <FormMessage>
          Back to {' '}
          <Link to="/auth">
            Sign in
          </Link>
        </FormMessage>
      </Form>

    </Formik>
  );
};

export default ResetPassword;
