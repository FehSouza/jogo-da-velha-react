import * as S from './styles';

export const Scoreboard = ({namePlayer1, namePlayer2}) => {
  return (
    <S.Container>
      <S.ScoreboardTitle>Placar</S.ScoreboardTitle>
      <S.ScoreboardWrapper>
        <S.ScorePlayer1>00</S.ScorePlayer1>
        <S.PlayerWinning>{namePlayer1}</S.PlayerWinning>
        <S.ScorePlayer2>00</S.ScorePlayer2>
      </S.ScoreboardWrapper>
    </S.Container>
  );
};
