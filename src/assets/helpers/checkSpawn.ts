

import {Piece} from '../pieces/index'
import { buildAttachables } from './buildAttachables'
import { CELL } from '../../constants/CELL'

export const checkSpawn = (Pc: Piece, board: number[][]) => {

    const spawnLocations = buildAttachables(Pc);

    let canSpawn = true;
    spawnLocations.forEach(([spawnY, spawnX]) => {
        if (board[spawnY][spawnX] === CELL.STATIC) {
            canSpawn = false
        }
    });

    return canSpawn;
}