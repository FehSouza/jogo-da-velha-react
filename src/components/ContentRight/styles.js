import styled from 'styled-components';

export const Container = styled.section`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding: 50px 4px;
  box-sizing: border-box;
  align-items: center;
`;
