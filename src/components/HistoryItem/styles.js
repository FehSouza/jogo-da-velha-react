import styled from 'styled-components';

export const Container = styled.li`
  width: 85%;
  height: 51px;
  border-radius: 8px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: calc(15% / 2);
`;

export const WinningPlayer = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const PlayerName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textGreen};
`;

export const Position = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textGrey};
`;

export const SceneryTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const Scenery = styled.div`
  height: 100%;
  width: 51px;
  display: flex;
  flex-wrap: wrap;
`;

export const Field = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textGrey};
`;
