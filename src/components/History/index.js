import { useState } from 'react';
import { HistoryItem } from '../HistoryItem';
import * as S from './styles';

export const History = () => {
  const [matchPositions] = useState([])

  return (
    <S.Container>
      <S.HistoryTitle>Histórico de Partidas</S.HistoryTitle>
      <S.HistoryList>
        {!matchPositions.length && <S.NoHasHistoryItem>Ainda não há histórico de partidas.</S.NoHasHistoryItem>}
        {matchPositions.map((positions) => (
        <HistoryItem playerWinner="Vencedor" positionWinner="Primeiro Quadrado" positions={positions} /> 
      ))}

      </S.HistoryList>
    </S.Container>
  );
};
