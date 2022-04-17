import * as S from './styles';

export const Scoreboard = () => {
  return (
    <S.Container>
      <S.ScoreboardTitle>Placar</S.ScoreboardTitle>
      <S.ScoreboardWrapper>
        <S.ScorePlayer1>01</S.ScorePlayer1>
        <S.PlayerWinning>Jogador 1</S.PlayerWinning>
        <S.ScorePlayer2>01</S.ScorePlayer2>
      </S.ScoreboardWrapper>
    </S.Container>
  );
};
