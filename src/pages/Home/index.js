import { useState } from 'react';
import { ContentCenter, ContentLeft, ContentRight } from '../../components';
import * as S from './styles';

export const Home = () => {
  const [disablePlayer2, setDisablePlayer2] = useState(true);
  const [disableStartGame, setDisableStartGame] = useState(true);
  const [valuePlayer1, setValuePlayer1] = useState('');
  const [valuePlayer2, setValuePlayer2] = useState('');
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);

  const handleTogglePlayer2 = () => {
    setDisablePlayer2(!disablePlayer2);
    setValuePlayer2('');
  };

  const handleToggleStartGame = () => {
    setDisableStartGame(!disableStartGame);
  };

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
        disableStartGame={disableStartGame}
        board={board}
        setBoard={setBoard}
      />
      <ContentRight />
    </S.Container>
  );
};
