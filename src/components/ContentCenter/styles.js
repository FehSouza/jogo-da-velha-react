import styled from 'styled-components';

export const Container = styled.section`
  width: 45%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryA};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  box-sizing: border-box;
`;
