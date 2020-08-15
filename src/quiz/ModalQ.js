import React, {useContext} from 'react'
import {PokemonContext} from './index'
import {kata2hira} from '../utils/index'
import { v4 as uuid } from 'uuid'


const ModalQ = () => {
    let [useData] = useContext(PokemonContext)
    let {charCode, pokemon, n} = useData;

    return (
    <div id="modal-q">
        <img id="modal-q-img" src={`/img/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
        <p id="word-q">
            {
                [...pokemon.name].map((char, i) => {
                    return (
                        <span data-a={(n === i) ? 1: 0}  key={uuid()}>
                            {charCode ? kata2hira(char) : char}
                        </span>
                    )
                })
            }
        </p>
    </div>
    )
}

export default ModalQ
