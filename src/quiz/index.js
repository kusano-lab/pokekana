import React from 'react'
import './index.css'
import ModalQ from './ModalQ'
import ModalA from './ModalA'
import ModalS from './ModalS'
import {getRandomInt} from '../utils/index'


const Quiz = () => {

    let zukan = [
        { name: 'フシギダネ', id: 'item001' },
        { name: 'リザード', id: 'item005' },
        { name: 'キャタピー', id: 'item010' },
        { name: 'ビードル', id: 'item013' },
        { name: 'ポッポ', id: 'item016' },
        { name: 'ラッタ', id: 'item020' },
        { name: 'イーブイ', id: 'item133' }
    ]
    
    let charCode = 1 // 0: (Q: カタカナ, A: ひらがな)　1: (Q: ひらがな, A: カタカナ)
    
    let randomNum = getRandomInt(zukan.length);
    let pokemon = zukan[randomNum]
    let n = getRandomInt([...pokemon.name].length)

    let props = {
        zukan: zukan,
        charCode: charCode,
        randomNum: randomNum,
        pokemon: pokemon,
        n: n
    }

    return (
        <div id="modal">
            <div id="modal-inner">
                {/* quiz area */}
                <ModalQ props={props} />
                {/* quiz answer */}
                <ModalA props={props} />
                {/* next quiz */}
                <ModalS props={props} />
            </div>
            <button id="sound">sound btn</button>
        </div>
    )
}

export default Quiz
