import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const ContentLeft = styled.section`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 4px;
  box-sizing: border-box;
`;

export const WrapperPlayers = styled.div`
  width: 100%;
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
  margin-top: 20px;
`;

export const ContentCenter = styled.section`
  width: 45%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryA};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  box-sizing: border-box;
`;

export const ContentRight = styled.section`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding: 50px 4px;
  box-sizing: border-box;
  align-items: center;
`;
