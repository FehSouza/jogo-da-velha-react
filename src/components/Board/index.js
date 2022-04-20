import { useState } from 'react';
import * as S from './styles';

const horizontal1 = [0, 1, 2];
const horizontal2 = [3, 4, 5];
const horizontal3 = [6, 7, 8];
const vertical1 = [0, 3, 6];
const vertical2 = [1, 4, 7];
const vertical3 = [2, 5, 8];
const diagonal1 = [0, 4, 8];
const diagonal2 = [2, 4, 6];

const allLists = [horizontal1, horizontal2, horizontal3, vertical1, vertical2, vertical3, diagonal1, diagonal2];

export const Board = ({ disabled, setBoard, board }) => {
  const [currentPlay, setCurrentPlay] = useState('X');
  

  const toggleCurrentPlay = () => setCurrentPlay(currentPlay === 'X' ? 'O' : 'X');

  const handlePlay = (place) => {
    const newBoard = [...board];
    newBoard[place] = currentPlay;
    setBoard(newBoard);
    toggleCurrentPlay();
  };

  const winner = allLists.filter((list) => {
    const [first, second, third] = list;
    if (board[first] === '') return false;
    return board[first] === board[second] && board[second] === board[third];
  });

  const winnerPositions = winner.reduce((acc, rows) => [...acc, ...rows], []);

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
