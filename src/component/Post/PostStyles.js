import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #3aafab;
  background: #05a9c5;
  border-radius: 2%;
  margin-top: 20px;
  color: white;
`;

export const Button = styled.button`
  min-width: 10%;
  border: none;
  margin-left: 10px;
  border-radius: 5%;
  background: rgba(86, 61, 124);
  align-self: flex-end;
  color: white;

  :active {
    color: black;
    background: yellow;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
