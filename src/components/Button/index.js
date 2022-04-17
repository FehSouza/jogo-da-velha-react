import * as S from './styles';

export const Button = ({ children, marginTop, toPlay }) => {
  return (
    <S.Container marginTop={marginTop} toPlay={toPlay}>
      {children}
    </S.Container>
  );
};
