import styled from 'styled-components';

export const PageWrapper = styled.section`
 width: 100%;
 max-width: 1800px;
 display: flex;
 flex-direction: column;
 gap: 20px;
 padding: 20px;
 overflow: auto;

 ::-webkit-scrollbar {
  width: 0.5em;
 }

 ::-webkit-scrollbar-track {
  background-color: transparent;
 }

 ::-webkit-scrollbar-thumb {
  background-color: transparent;
 }

 p {
   font-size: 18px;
   text-align: justify;
   font-weight: 400;
 }

 .regionsSearch {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 10px;
  margin-bottom: 20px;
 }

 .regions {
    padding: 0 20px;
  }
`;