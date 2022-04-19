import { lighten } from 'polished';
import styled, { css } from 'styled-components';

const marginTopStyle = css`
  margin-top: ${({ marginTop }) => marginTop};
`;

const toPlayStyle = css`
  background-color: ${({ theme }) => theme.colors.green};
  border: 2px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.textWhite};
  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.colors.green)};
    border-color: ${({ theme }) => lighten(0.1, theme.colors.green)};
  }
`;

export const Container = styled.button`
  width: 85%;
  height: 54px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textBlue};
  box-shadow: 0 4px 4px ${({ theme }) => theme.colors.shadow};
  ${({ marginTop }) => marginTop && marginTopStyle}
  &:hover {
    cursor: pointer;
    transition-duration: 250ms;
    background-color: ${({ theme }) => lighten(0.4, theme.colors.textGrey)};
    border-color: ${({ theme }) => lighten(0.4, theme.colors.textGrey)};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.disabled};
    border-color: ${({ theme }) => theme.colors.disabled};
    &:hover {
      background-color: ${({ theme }) => theme.colors.disabled};
      border-color: ${({ theme }) => theme.colors.disabled};
    }
  }
  ${({ toPlay }) => toPlay && toPlayStyle}
`;
