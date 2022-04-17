import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ScoreboardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textBlue};
`;

export const ScoreboardWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ScorePlayer1 = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textBlue};
  line-height: 36px;
`;

export const PlayerWinning = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textGrey};
`;

export const ScorePlayer2 = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textBlue};
  line-height: 36px;
`;
