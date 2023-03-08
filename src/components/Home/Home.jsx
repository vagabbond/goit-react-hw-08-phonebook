import { Box } from '@mui/material';
import { Title } from 'components/Login/Login.styled';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Title>Welcom to your contacts page!</Title>
    </Box>
  );
};
export default Home;
