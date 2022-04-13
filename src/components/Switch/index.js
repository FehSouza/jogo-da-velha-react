import * as S from './styles';

export const Switch = ({ toggleSwitch, status, outlined }) => {
  return (
    <S.Container outlined={outlined} onClick={toggleSwitch}>
      <S.Wrapper active={status} />
    </S.Container>
  );
};
