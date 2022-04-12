import * as S from './styles';

export const Input = ({ placeholder, disabled }) => {
  return disabled ? (
    <S.Container disabled placeholder={placeholder}></S.Container>
  ) : (
    <S.Container placeholder={placeholder}></S.Container>
  );
};
