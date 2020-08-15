import React, {useContext} from 'react'
import {PokemonContext} from './index'
import {hira2kata, kata2hira} from '../utils/index'
import { v4 as uuid } from 'uuid'
import {Howl} from 'howler';

const sound = new Howl({
    src: ['/mp3/correct.mp3']
});

const ModalA = () => {
    let [useData, setData] = useContext(PokemonContext)
    let {charCode, pokemon, n, correctWord, answerWords} = useData;

    const answerHandler = (elem) => {
        let answerState = parseInt(elem.target.getAttribute('data-a'), 10)
        if(answerState === 1){
            sound.play()
            setData({
                ...useData,
                quizState: 'correct'
            })
        }else{
            // 不正解から別の不正解を選択した場合に、値が変更されたことがわかりやすいようにする
            if(useData.quizState === 'wrong'){
                setData({
                    ...useData,
                    quizState: ''
                })
                setTimeout(() => {
                    setData({
                        ...useData,
                        quizState: 'wrong'
                    })
                }, 200)
            }else{
                setData({
                    ...useData,
                    quizState: 'wrong'
                })
            }
        }
    }


    return (
        <div id="modal-a">
            <p id="word-a">
                {
                    [...pokemon.name].map((char, i) => {
                        return (
                            <span data-a={(n === i) ? 1: 0} key={uuid()}>
                                {charCode ? char : kata2hira(char)}
                            </span>
                        )
                    })
                }
            </p>
            <ul id="word-choise">
                {
                    answerWords.map((char, i) => {
                        let setWord = ''
                        if(charCode){
                            // Q: ひらがな, A: カタカナ（どこかでcharCodeの切り替え処理をまとめる）
                            setWord = hira2kata(char)
                        }else {
                            // Q: カタカナ, A: ひらがな（どこかでcharCodeの切り替え処理をまとめる）
                            setWord = (char === correctWord) ? char: kata2hira(char)
                        }
                        let checkCorrect = (char === correctWord) ? 1: 0
                        return (
                            <li key={uuid()}>
                                <input
                                    type="radio"
                                    value={setWord}
                                    id={`word-choise-${i}`}
                                    name="word-choise-radio" />
                                <label
                                    data-a={checkCorrect}
                                    htmlFor={`word-choise-${i}`}
                                    onClick={(elem) => {answerHandler(elem)}} >{setWord}</label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ModalA
