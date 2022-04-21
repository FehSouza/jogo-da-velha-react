import { useState } from 'react';
import { ContentCenter, ContentLeft, ContentRight } from '../../components';
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

export const Home = () => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [currentPlay, setCurrentPlay] = useState('X');
  const [disablePlayer2, setDisablePlayer2] = useState(true);
  const [disableStartGame, setDisableStartGame] = useState(true);
  const [valuePlayer1, setValuePlayer1] = useState('');
  const [valuePlayer2, setValuePlayer2] = useState('');

  const handleTogglePlayer2 = () => {
    setDisablePlayer2(!disablePlayer2);
    setValuePlayer2('');
  };

  const handleToggleStartGame = () => {
    setDisableStartGame(!disableStartGame);
    if (disableStartGame === false) {
      clearBoard()
    }
  };

  const clearBoard = () => {
      setTimeout(() => {

        setBoard(['', '', '', '', '', '', '', '', '']);
        setCurrentPlay('X');
      },2000)
  }

  const toggleCurrentPlay = () => setCurrentPlay(currentPlay === 'X' ? 'O' : 'X');

  const handlePlay = (place) => {
    const newBoard = [...board];
    if (newBoard[place] !== '') return;
    newBoard[place] = currentPlay;
    setBoard(newBoard);
    toggleCurrentPlay();
  };
  console.log(disableStartGame);

  const winner = allLists.filter((list) => {
    const [first, second, third] = list;
    if (board[first] === '') return false;
    return board[first] === board[second] && board[second] === board[third];
  });

  const winnerPositions = winner.reduce((acc, rows) => [...acc, ...rows], []);

  return (
    <S.Container>
      <ContentLeft
        namePlayer1={valuePlayer1}
        namePlayer2={valuePlayer2}
        disableStartGame={disableStartGame}
        disablePlayer2={disablePlayer2}
        handleToggleStartGame={handleToggleStartGame}
        handleTogglePlayer2={handleTogglePlayer2}
        setNamePlayer1={setValuePlayer1}
        setNamePlayer2={setValuePlayer2}
      />
      <ContentCenter
        namePlayer1={valuePlayer1}
        namePlayer2={valuePlayer2}
        disableStartGame={disableStartGame || winner.length}
        board={board}
        setBoard={setBoard}
        winnerPositions={winnerPositions}
        handlePlay={handlePlay}
      />
      <ContentRight />
    </S.Container>
  );
};
