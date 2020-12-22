import styled from 'styled-components';

const Title = styled.h1`
  display: block;
  background-color: green;
  border: 1px double red;
  line-height: 1.3;
  padding: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.5s ease-in-out;
  }
`;

export default Title;