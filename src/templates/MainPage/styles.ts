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

 .regions {
//    height: 100%;
    //max-height: 800px;
    //overflow-y: auto;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    padding: 0 20px;
  }
`;