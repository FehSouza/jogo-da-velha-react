import { useState } from 'react';
import { Input, Switch } from '../../components';
import * as S from './styles';

export const Home = () => {
  const [disablePlayer, setDisablePlayer] = useState(true);

  const handleTogglePlayer = () => setDisablePlayer(!disablePlayer);

  return (
    <S.Container>
      <S.ContentLeft>
        <Input placeholder="Jogador 1" />
        <S.WrapperPlayer2>
          <Input placeholder="Jogador 2" disabled={disablePlayer}></Input>
          <Switch toggleSwitch={handleTogglePlayer} status={disablePlayer}></Switch>
        </S.WrapperPlayer2>
      </S.ContentLeft>

      <S.ContentCenter></S.ContentCenter>

      <S.ContentRight></S.ContentRight>
    </S.Container>
  );
};
