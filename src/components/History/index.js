import { HistoryItem } from '../HistoryItem';
import * as S from './styles';

export const History = () => {
  return (
    <S.Container>
      <S.HistoryTitle>Histórico de Partidas</S.HistoryTitle>
      <S.HistoryList>
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </S.HistoryList>
    </S.Container>
  );
};
