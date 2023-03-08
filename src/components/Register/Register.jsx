import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { register } from 'redux/auth/operations';
import {
  WrapBox,
  PasswordField,
  Field,
  Form,
  Title,
} from '../Login/Login.styled';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(email);
    console.log(password);
    console.log(name);
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };
  return (
    <WrapBox>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Field
          required
          id="outlined-required"
          label="Email"
          value={email}
          onChange={e => {
            setEmail(e.currentTarget.value);
          }}
        />
        <Field
          required
          id="outlined-required"
          label="Name"
          value={name}
          onChange={e => {
            setName(e.currentTarget.value);
          }}
        />
        <PasswordField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={e => {
            setPassword(e.currentTarget.value);
          }}
        />

        <Button
          type="submit"
          sx={{
            width: 100,
            height: 60,
            borderRadius: '5%',
            backgroundColor: ' black',
            color: 'white ',
            ':hover': {
              backgroundColor: 'white',
              color: 'black ',
            },
          }}
        >
          Submit
        </Button>
      </Form>
    </WrapBox>
  );
};

export default Register;
