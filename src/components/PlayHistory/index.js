import { useState } from 'react';
import { PlayHistoryItem as Item } from '../PlayHistoryItem';
import * as S from './styles';

export const PlayHistory = () => {
  const [playPosition] = useState([]);

  return (
    <S.Container>
      <S.Title>Histórico de Jogadas</S.Title>
      <S.List>
        {!playPosition.length && <S.NoHasHistoryItem>Ainda não há histórico de jogadas.</S.NoHasHistoryItem>}
        {!!playPosition.length && (
          <Item player="Jogador 1" position="Primeiro quadrado">
            X
          </Item>
        )}
      </S.List>
    </S.Container>
  );
};
