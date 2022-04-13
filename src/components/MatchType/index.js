import { useState } from 'react';
import { Switch } from '../Switch';
import * as S from './styles';

export const MatchType = () => {
  const [matchType, setMatchType] = useState(true);

  const handleMatchType = () => setMatchType(!matchType);

  return (
    <S.Container>
      <S.Title>Tipo de Partida</S.Title>
      <S.WrapperType>
        <S.Type onClick={() => setMatchType(false)}>Melhor de 3</S.Type>
        <Switch toggleSwitch={handleMatchType} status={matchType}></Switch>
        <S.Type onClick={() => setMatchType(true)}>Melhor de 5</S.Type>
      </S.WrapperType>
    </S.Container>
  );
};
