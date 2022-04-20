import { Button, History, Input, MatchType, Switch } from '../index';
import * as S from './styles';

export const ContentLeft = ({
  namePlayer1,
  namePlayer2,
  disableStartGame,
  disablePlayer2,
  handleToggleStartGame,
  handleTogglePlayer2,
  setNamePlayer1,
  setNamePlayer2,
}) => {
  return (
    <S.Container>
      <S.WrapperPlayers>
        <Input placeholder="Jogador 1" value={namePlayer1} onChange={(e) => setNamePlayer1(e.target.value)} />
        <S.WrapperPlayer2>
          <Input
            placeholder="Jogador 2"
            value={namePlayer2}
            onChange={(e) => setNamePlayer2(e.target.value)}
            disabled={disablePlayer2}
          />
          <Switch outlined toggleSwitch={handleTogglePlayer2} status={disablePlayer2} />
        </S.WrapperPlayer2>
      </S.WrapperPlayers>
      <MatchType />
      <Button disabled={!disableStartGame} marginTop="40px" toPlay={1} onClick={handleToggleStartGame}>
        Jogar
      </Button>
      <History />
      <Button disabled={!!disableStartGame} marginTop="10px" onClick={handleToggleStartGame}>
        Reiniciar
      </Button>
    </S.Container>
  );
};
