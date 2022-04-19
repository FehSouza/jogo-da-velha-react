import { useState } from 'react';
import * as S from './styles';

export const Board = ({ disabled }) => {
  const [piece, setPiece] = useState('X');
  const [pieceList, setPieceList] = useState(['', '', '', '', '', '', '', '', '']);

  const togglePiece = () => (piece === 'X' ? setPiece('O') : setPiece('X'));

  const horizontal1 = [pieceList[0], pieceList[1], pieceList[2], 0, 1, 2];
  const horizontal2 = [pieceList[3], pieceList[4], pieceList[5], 3, 4, 5];
  const horizontal3 = [pieceList[6], pieceList[7], pieceList[8], 6, 7, 8];
  const vertical1 = [pieceList[0], pieceList[3], pieceList[6], 0, 3, 6];
  const vertical2 = [pieceList[1], pieceList[4], pieceList[7], 1, 4, 7];
  const vertical3 = [pieceList[2], pieceList[5], pieceList[8], 2, 5, 8];
  const diagonal1 = [pieceList[0], pieceList[4], pieceList[8], 0, 4, 8];
  const diagonal2 = [pieceList[2], pieceList[4], pieceList[6], 2, 4, 6];

  const allLists = [horizontal1, horizontal2, horizontal3, vertical1, vertical2, vertical3, diagonal1, diagonal2];

  const handlePlayPiece = ({ index }) => {
    const newPieceList = pieceList.map((pieceActual, i) => {
      if (i === index && pieceActual === '') {
        pieceActual = piece;
        togglePiece();
        return pieceActual;
      }
      return pieceActual;
    });
    setPieceList(newPieceList);
  };

  const verifyWinner = () => {
    const winner = allLists.filter((item) => {
      if (item[0] !== '' && item[0] === item[1] && item[1] === item[2]) return true;
      return false;
    });
    console.log(winner);
  };

  return (
    <S.Container>
      <S.Field
        disabled={!!disabled}
        onClick={() => {
          handlePlayPiece({ index: 0 });
          verifyWinner();
        }}
      >
        {pieceList[0]}
      </S.Field>
      <S.Field
        disabled={!!disabled}
        onClick={() => {
          handlePlayPiece({ index: 1 });
          verifyWinner();
        }}
      >
        {pieceList[1]}
      </S.Field>
      <S.Field
        disabled={!!disabled}
        onClick={() => {
          handlePlayPiece({ index: 2 });
          verifyWinner();
        }}
      >
        {pieceList[2]}
      </S.Field>
      <S.Field
        disabled={!!disabled}
        onClick={() => {
          handlePlayPiece({ index: 3 });
          verifyWinner();
        }}
      >
        {pieceList[3]}
      </S.Field>
      <S.Field
        disabled={!!disabled}
        onClick={() => {
          handlePlayPiece({ index: 4 });
          verifyWinner();
        }}
      >
        {pieceList[4]}
      </S.Field>
      <S.Field
        disabled={!!disabled}
        onClick={() => {
          handlePlayPiece({ index: 5 });
          verifyWinner();
        }}
      >
        {pieceList[5]}
      </S.Field>
      <S.Field
        disabled={!!disabled}
        onClick={() => {
          handlePlayPiece({ index: 6 });
          verifyWinner();
        }}
      >
        {pieceList[6]}
      </S.Field>
      <S.Field
        disabled={!!disabled}
        onClick={() => {
          handlePlayPiece({ index: 7 });
          verifyWinner();
        }}
      >
        {pieceList[7]}
      </S.Field>
      <S.Field
        disabled={!!disabled}
        onClick={() => {
          handlePlayPiece({ index: 8 });
          verifyWinner();
        }}
      >
        {pieceList[8]}
      </S.Field>
    </S.Container>
  );
};
