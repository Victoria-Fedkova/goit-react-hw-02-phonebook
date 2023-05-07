import styled from "styled-components";

export const Table = styled.table`
/* width:320px; */
/* max-width:100%; */
margin:auto;
margin-top: 1.5rem;
margin-bottom: 1rem;
border-collapse: collapse;
`;

export const  TableHead = styled.th`
/* vertical-align: bottom; */
padding: 0.75rem;
border-bottom: 2px solid #dee2e6;
border-top: 1px solid #dee2e6;
`;

export const DelBtn = styled.button`
  border:none;
  background-color: transparent; 
  transition: all .15s ease-in-out;

  &:hover{
    transform: scale(1.1);
  } 
  & svg {
    fill:#007bff;

  }
`;