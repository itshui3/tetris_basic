
import { Piece } from '../pieces/index'

export const buildAttachables = (pc: Piece) => {
    const attachables = [pc.pivot]

    const curFormPcs = pc.forms[pc.form].map(([offsetY, offsetX]) => {
        return [pc.pivot[0] + offsetY, pc.pivot[1] + offsetX]
    })

    return [...attachables, ...curFormPcs]
}