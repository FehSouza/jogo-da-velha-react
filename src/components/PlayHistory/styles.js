import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textWhite};
  margin: 0;
  text-align: center;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-top: 8px;
  flex: 1;
  overflow-y: auto;
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
