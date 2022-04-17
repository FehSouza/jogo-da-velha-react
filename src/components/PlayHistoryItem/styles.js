import styled from 'styled-components';

export const Container = styled.li`
  width: 85%;
  min-height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  list-style: none;
  margin-left: calc((100% - 85%) / 2);
  margin-top: 20px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const PositionIcon = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textGrey};
  margin-left: 16px;
`;

export const PlayHistoryPlayer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  left: 70px;
`;

export const PlayerName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textGrey};
`;

export const Position = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textBlue};
`;
