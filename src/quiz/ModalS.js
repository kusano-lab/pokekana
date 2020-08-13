import React, {useContext} from 'react'
import {PokemonContext} from './index'
import {getRandomInt} from '../utils/index'
import { v4 as uuid } from 'uuid'

const ModalS = () => {
    let props = useContext(PokemonContext)
    let {zukan} = props;
    let nextQuizBtns = []
    while(nextQuizBtns.length < 5){
        let getPokemon = zukan[getRandomInt(zukan.length)]
        //ポケモンの重複なく取得する
        if( !nextQuizBtns.some(addedPokemon => (addedPokemon.name === getPokemon.name)) ){
            nextQuizBtns.push(getPokemon)
        }
    }

    // const setNextBtnHandler = () => {
    //     let nextQuizBtns = nextQuizBtnWrap.querySelectorAll('li img[data-id^="item"]');
    //     nextQuizBtns.forEach((btn) => {
    //         let id = btn.getAttribute('data-id');
    //         btn.addEventListener('click', (e) => {
    //             // 選択したポケモンのidを取得して、再描写する
    //             zukan.some((x, i) => {
    //                 if(x.id == id){
    //                     modal.classList = '' // 答えの状態を初期化
    //                     quizSetting(i) // 画面の再描写
    //                     return true
    //                 }
    //             });
                
    //         })
    //     })
    // }

    const nextQuizHandler = (elem) => {
        console.log(elem.target) // <img data-id="item013" src="/img/pokemon/item013.png" alt="ビードール">

        //再描写の処理を追加する
        // modal.classList = '' // 答えの状態を初期化
        // quizSetting(i) // 画面の再描写
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
