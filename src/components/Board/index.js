import * as S from './styles';

export const Board = () => {
  return (
    <S.Container>
      <S.Field>X</S.Field>
      <S.Field disabled>O</S.Field>
      <S.Field></S.Field>
      <S.Field disabled></S.Field>
      <S.Field></S.Field>
      <S.Field></S.Field>
      <S.Field></S.Field>
      <S.Field></S.Field>
      <S.Field disabled></S.Field>
    </S.Container>
  );
};
