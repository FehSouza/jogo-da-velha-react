import * as S from './styles';

export const Input = ({ placeholder, disabled, value, onChange }) => {
  return <S.Container disabled={disabled} value={value} onChange={onChange} placeholder={placeholder}></S.Container>;
};
