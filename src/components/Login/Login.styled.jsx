import styled from 'styled-components';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

export const WrapBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  gap: 50px;
`;

export const PasswordField = styled(TextField)`
  width: 400px;
`;

export const Field = styled(TextField)`
  width: 400px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Title = styled.h2`
  font-size: 20px;
  color: black;
`;
