import { useState } from 'react';
import { Board, Button, History, Input, MatchType, Scoreboard, Switch } from '../../components';
import * as S from './styles';

export const Home = () => {
  const [disablePlayer, setDisablePlayer] = useState(true);
  const [valuePlayer1, setValuePlayer1] = useState('');
  const [valuePlayer2, setValuePlayer2] = useState('');

  const handleTogglePlayer = () => {
    setDisablePlayer(!disablePlayer);
    setValuePlayer2('');
  };

  return (
    <S.Container>
      <S.ContentLeft>
        <S.WrapperPlayers>
          <Input placeholder="Jogador 1" value={valuePlayer1} onChange={(e) => setValuePlayer1(e.target.value)} />
          <S.WrapperPlayer2>
            <Input
              placeholder="Jogador 2"
              value={valuePlayer2}
              onChange={(e) => setValuePlayer2(e.target.value)}
              disabled={disablePlayer}
            />
            <Switch outlined toggleSwitch={handleTogglePlayer} status={disablePlayer} />
          </S.WrapperPlayer2>
        </S.WrapperPlayers>
        <MatchType />
        <Button marginTop="40px" toPlay={1}>
          Jogar
        </Button>
        <History />
        <Button marginTop="10px">Reiniciar</Button>
      </S.ContentLeft>

      <S.ContentCenter>
        <Scoreboard />
        <Board />
      </S.ContentCenter>

      <S.ContentRight></S.ContentRight>
    </S.Container>
  );
};
