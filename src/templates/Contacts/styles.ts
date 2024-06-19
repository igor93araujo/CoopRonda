import { Box } from '@mui/material';
import styled from 'styled-components';

export const PageWrapper = styled.section`
  width: 100%;
  max-width: 1800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow: auto;
`;

export const ContactsWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }

 .map {
    width: 500px;
    height: 500px;
    z-index: -1;
    
    @media (max-width: 600px) {
      width: 100%;
      height: 300px;
    }
  }

 .adressInfo {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 600px) {
      align-items: center;
      width: 100%;
    }
  }


  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 600px) {
      width: 100%;
      align-items: center;

      h6 {
        text-align: center;
      }
    }
  }

`;
