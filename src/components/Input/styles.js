import styled from 'styled-components';

export const Container = styled.input`
  width: 80%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  outline: none;
  padding: 0 0 0 16px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textGrey};
  margin-top: 20px;
  &:hover {
    cursor: text;
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.focus};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.disabled};
  }
`;
