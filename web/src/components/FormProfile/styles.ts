import styled from 'styled-components';
interface FormComponentProps {
  display: boolean;
}
export const FormComponent = styled.div<FormComponentProps>`
  display: ${(props): string => (props.display ? '' : 'none')};

  width: 100%;
  height: 500px;

  margin-top: 10px;
  font-size: 1.5rem;
  background: #1cbbce;
`;

export const ShowDouble = styled.div`
  margin: 50px 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShowOne = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 30px;
`;

export const ButtonUpdate = styled.button`
  position: absolute;
  width: 400px;
  height: 60px;

  cursor: pointer;
  left: 40%;
  top: 80%;
  background: #1b1818;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease-out;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #1b1818;
  }
`;
