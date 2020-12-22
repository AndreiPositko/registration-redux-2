import styled from 'styled-components';

//Bg styles
const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(5px + 2vmin);
  color: white;
`;

//Form styles
const Title = styled.h1`
  border-bottom: 1px solid grey;
`;

const Form = styled.form`
  box-sizing: border-box;
  width: 380px;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 7px;
  border-radius: 5px;
`;

const BtnSubmit = styled(Input)`
  font-weight: bold;
  color: #fff;
  background-color: red;
  cursor: pointer;
`;

export default {
  Header,
  Title,
  Form,
  Input,
  BtnSubmit,
};