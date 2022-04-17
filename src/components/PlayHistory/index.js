import { PlayHistoryItem as Item } from '../PlayHistoryItem';
import * as S from './styles';

export const PlayHistory = () => {
  return (
    <S.Container>
      <S.Title>Histórico de Jogadas</S.Title>
      <S.List>
        <Item player="Jogador 1" position="Primeiro quadrado">
          X
        </Item>
        <Item player="Jogador 2" position="Segundo quadrado">
          O
        </Item>
        <Item player="Jogador 1" position="Terceiro quadrado">
          X
        </Item>
        <Item player="Jogador 2" position="Quarto quadrado">
          O
        </Item>
        <Item player="Jogador 1" position="Quinto quadrado">
          X
        </Item>
        <Item player="Jogador 2" position="Sexto quadrado">
          O
        </Item>
        <Item player="Jogador 1" position="Sétimo quadrado">
          X
        </Item>
        <Item player="Jogador 2" position="Oitavo quadrado">
          O
        </Item>
        <Item player="Jogador 1" position="Nono quadrado">
          X
        </Item>
      </S.List>
    </S.Container>
  );
};
