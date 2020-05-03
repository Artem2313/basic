import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #3aafab;
  background: #05a9c5;
  border-radius: 5%;
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.input`
  margin-bottom: 1rem;
`;

export const Body = styled.textarea`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  color: white;
`;

export const Submit = styled.input`
  min-width: 10%;
  border: none;
  border-radius: 5%;
  background: rgba(86, 61, 124);
  align-self: flex-end;
  color: white;

  :active {
    color: black;
    background: yellow;
  }
`;
