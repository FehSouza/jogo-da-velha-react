import styled from 'styled-components';

export const Container = styled.button`
  width: 80%;
  height: 54px;
  background-color: ${({ theme }) => theme.colors.green};
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 10px;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textWhite};
  box-shadow: 0 4px 4px ${({ theme }) => theme.colors.shadow};
  &:hover {
    cursor: pointer;
    transition-duration: 250ms;
    background-color: ${({ theme }) => theme.colors.greenA};
    border-color: ${({ theme }) => theme.colors.greenA};
  }
`;
