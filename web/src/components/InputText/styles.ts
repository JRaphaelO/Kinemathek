import styled from 'styled-components';

interface InputContainerProps {
  isPrimary: boolean;
  inLine: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  height: ${(props): string => (props.inLine ? '30px' : '90px')};

  /* background: #000; */
  display: flex;
  flex-direction: ${(props): string => (props.inLine ? 'row' : 'column')};
  align-items: flex-start;
  text-align: left;
  margin: 10px 0;

  color: ${(props): string => (props.isPrimary ? '#000' : '#fff')};
`;

export const InputLabel = styled.p`
  margin-right: 10px;

  font-size: 1.2rem;
  margin-bottom: 10px;

  @media (max-width: 400px) {
    font-size: 0.9em;
  }
`;

export const Input = styled.input`
  margin-right: 10px;
  width: 95%;
  height: 40px;

  border: none;
  outline: none;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  display: flex;
  flex-direction: row;
  padding-left: 1rem;
`;
