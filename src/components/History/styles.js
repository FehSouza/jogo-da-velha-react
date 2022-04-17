import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1;
  margin-top: 40px;
  padding-bottom: 36px;
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primaryA};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
    border: 2.5px solid ${({ theme }) => theme.colors.primaryA};
  }
`;

export const HistoryTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const HistoryList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
