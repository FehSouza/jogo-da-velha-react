import * as S from './styles';

export const Switch = ({ toggleSwitch, status }) => {
  return (
    <S.Container onClick={toggleSwitch}>
      <S.Wrapper active={status} />
    </S.Container>
  );
};
