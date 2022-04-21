import * as S from './styles';

export const Board = ({ disabled, board, winnerPositions, handlePlay }) => {
  return (
    <S.Container>
      {board.map((play, index) => {
        return (
          <S.Field
            key={index}
            disabled={!!disabled}
            onClick={() => handlePlay(index)}
            winner={winnerPositions.includes(index)}
          >
            {play}
          </S.Field>
        );
      })}
    </S.Container>
  );
};
