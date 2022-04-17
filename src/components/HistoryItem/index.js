import * as S from './styles';

export const HistoryItem = () => {
  return (
    <S.Container>
      <S.WinningPlayer>
        <S.PlayerName>Vencedor</S.PlayerName>
        <S.Position>Primeiro Quadrado</S.Position>
      </S.WinningPlayer>
      <S.SceneryTitle>Cenário</S.SceneryTitle>
      <S.Scenery>
        <S.Field>O</S.Field>
        <S.Field>O</S.Field>
        <S.Field>X</S.Field>
        <S.Field>O</S.Field>
        <S.Field>X</S.Field>
        <S.Field>X</S.Field>
        <S.Field></S.Field>
        <S.Field>O</S.Field>
        <S.Field>X</S.Field>
      </S.Scenery>
    </S.Container>
  );
};
