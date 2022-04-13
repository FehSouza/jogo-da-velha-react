import styled, { css } from 'styled-components';

const outlinedStyle = css`
  position: absolute;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  width: 56px;
  height: 32px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1.5px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
  z-index: 5;
  right: calc((100% - 80%) / 2);
  top: 8px;
  padding: 4px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  ${({ outlined }) => outlined && outlinedStyle}
`;

export const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 100%;
  margin-left: ${({ active }) => (active ? 21 : 0)}px;
  transition-duration: 250ms;
`;
