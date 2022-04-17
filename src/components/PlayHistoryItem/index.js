import * as S from './styles';

export const PlayHistoryItem = ({children, player, position}) => {
  return (
    <S.Container>
      <S.PositionIcon>{children}</S.PositionIcon>
      <S.PlayHistoryPlayer>
        <S.PlayerName>{player}</S.PlayerName>
        <S.Position>{position}</S.Position>
      </S.PlayHistoryPlayer>
    </S.Container>
  );
};
