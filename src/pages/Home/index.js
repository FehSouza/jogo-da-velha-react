import { useState } from 'react';
import { Board, Button, History, Input, MatchType, PlayHistory, Scoreboard, Switch } from '../../components';
import * as S from './styles';

export const Home = () => {
  const [disablePlayer, setDisablePlayer] = useState(true);
  const [disablePlay, setDisablePlay] = useState(true);
  const [valuePlayer1, setValuePlayer1] = useState('');
  const [valuePlayer2, setValuePlayer2] = useState('');

  const handleTogglePlayer = () => {
    setDisablePlayer(!disablePlayer);
    setValuePlayer2('');
  };

  const handleTogglePlay = () => {
    setDisablePlay(!disablePlay);
    console.log(disablePlay)

  }

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
        <Button disabled={!disablePlay} marginTop="40px" toPlay={1} onClick={handleTogglePlay}>
          Jogar
        </Button>
        <History />
        <Button disabled={!!disablePlay} marginTop="10px" onClick={handleTogglePlay}>Reiniciar</Button>
      </S.ContentLeft>

      <S.ContentCenter>
        <Scoreboard namePlayer1={valuePlayer1} namePlayer2={valuePlayer2} />
        <Board disabled={!!disablePlay} />
      </S.ContentCenter>

      <S.ContentRight>
        <PlayHistory />
      </S.ContentRight>
    </S.Container>
  );
};
