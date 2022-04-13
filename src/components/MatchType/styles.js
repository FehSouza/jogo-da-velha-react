import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textGreen};
  margin: 0;
`;

export const WrapperType = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const Type = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textWhite};
  margin: 0;
  user-select: none;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1250px) {
    width: 60px;
  }
`;
