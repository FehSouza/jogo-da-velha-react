import * as S from './styles';

export const Button = ({ children, marginTop, toPlay, disabled, onClick }) => {
  return (
    <S.Container marginTop={marginTop} toPlay={toPlay} disabled={disabled} onClick={onClick}>
      {children}
    </S.Container>
  );
};
