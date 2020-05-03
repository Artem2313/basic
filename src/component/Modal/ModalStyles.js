import styled from 'styled-components';

export const BackDropCss = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalCss = styled.div`
  padding: 16px;
  max-width: 480px;
  width: 100%;
  min-height: 320px;
  background-color: #05a9c5;
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

export const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  min-width: 10%;
  border: none;
  border-radius: 5%;
  background: rgba(86, 61, 124);
  color: white;
  margin-left: 10px;

  :active {
    color: black;
    background: yellow;
  }
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
