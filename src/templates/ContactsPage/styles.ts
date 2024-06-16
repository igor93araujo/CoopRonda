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

export const AddressWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;

 .map {
    width: 500px;
    height: 500px;

    @media (max-width: 600px) {
      width: 100%;
      height: 300px;
    }
  }

 .adressInfo {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
