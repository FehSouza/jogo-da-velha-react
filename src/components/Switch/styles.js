import styled from 'styled-components';

export const Container = styled.div`
  width: 56px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 100px;
  z-index: 5;
  position: absolute;
  right: calc((100% - 80%) / 2);
  top: 28px;
  padding: 4px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 100%;
  margin-left: ${({ active }) => (active ? 24 : 0)}px;
  transition-duration: 250ms;
`;
