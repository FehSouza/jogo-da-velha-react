import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const ContentLeft = styled.section`
  width: 25%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  box-sizing: border-box;
`;

export const ContentCenter = styled.section`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryA};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentRight = styled.section`
  width: 25%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperPlayer2 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
