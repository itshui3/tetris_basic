
import produce from 'immer';
import { Piece } from '../pieces/index'

export const getRandomPc = (Pieces: Piece[]) => {
    return produce(Pieces[Math.floor(Math.random() * Pieces.length)], draft => draft) as Piece;
}