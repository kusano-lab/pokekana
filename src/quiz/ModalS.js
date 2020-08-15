import React, {useContext} from 'react'
import {PokemonContext} from './index'
import { v4 as uuid } from 'uuid'

const ModalS = () => {
    let [useData, setData] = useContext(PokemonContext)
    let {zukan, nextQuizBtns} = useData;
    const nextQuizHandler = (elem) => {
        let getPokemonID = elem.target.getAttribute('data-id')
        let getPokemonIndex = zukan.findIndex(x => x.id === getPokemonID)
        
        setData({
            ...useData,
            randomNum: getPokemonIndex,
            pokemon: zukan[getPokemonIndex],
            quizState: '',
            setNextQuiz: true
        })
    }


    return (
        <div id="modal-s">
            <ul>
                {
                    nextQuizBtns.map(pokemon => {
                        return(
                            <li key={uuid()}>
                                <img
                                    data-id={pokemon.id}
                                    src={`/img/pokemon/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                    onClick={nextQuizHandler} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ModalS
