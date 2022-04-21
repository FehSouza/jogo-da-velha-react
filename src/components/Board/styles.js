import { lighten } from 'polished';
import styled from 'styled-components';
import { css } from 'styled-components';

const winnerStyle = css`
  border: 2px solid limegreen;
  color: limegreen;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Container = styled.div`
  width: 70%;
  aspect-ratio: 1/1;
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
`;

export const Field = styled.button`
  width: calc(94% / 3);
  aspect-ratio: 1/1;
  margin: 1%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 130px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textGrey};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => lighten(0.4, theme.colors.textGrey)};
    transition-duration: 250px;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.disabled};
  }
  ${({ winner }) => winner && winnerStyle};
`;
