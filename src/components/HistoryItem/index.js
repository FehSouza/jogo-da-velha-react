import * as S from './styles';

export const HistoryItem = ({playerWinner, positionWinner}) => {
  return (
    <S.Container>
      <S.WinningPlayer>
        <S.PlayerName>{playerWinner}</S.PlayerName>
        <S.Position>{positionWinner}</S.Position>
      </S.WinningPlayer>
      <S.SceneryTitle>Cenário</S.SceneryTitle>
      <S.Scenery>
        <S.Field></S.Field>
        <S.Field></S.Field>
        <S.Field></S.Field>
        <S.Field></S.Field>
        <S.Field></S.Field>
        <S.Field></S.Field>
        <S.Field></S.Field>
        <S.Field></S.Field>
        <S.Field></S.Field>
      </S.Scenery>
    </S.Container>
  );
};
