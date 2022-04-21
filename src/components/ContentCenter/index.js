import { Board, Scoreboard } from '../index';
import * as S from './styles';

export const ContentCenter = ({
  namePlayer1,
  namePlayer2,
  disableStartGame,
  board,
  setBoard,
  winnerPositions,
  handlePlay,
}) => {
  return (
    <S.Container>
      <Scoreboard namePlayer1={namePlayer1} namePlayer2={namePlayer2} />
      <Board
        disabled={!!disableStartGame}
        board={board}
        setBoard={setBoard}
        winnerPositions={winnerPositions}
        handlePlay={handlePlay}
      />
    </S.Container>
  );
};
