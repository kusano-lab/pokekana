import React from 'react'
import {getRandomInt, hira2kata, kata2hira, shuffle, createAnswerWords} from '../utils/index'
import { v4 as uuid } from 'uuid'


const ModalA = (props) => {
    const {zukan, charCode, randomNum, pokemon, n} = props.props;

    let correctWord = kata2hira([...pokemon.name][n]);
    console.log('correctWord1', correctWord)
    // 特定の文字を除外する
    while(correctWord == 'ー'){
        n = getRandomInt([...pokemon.name].length)
        console.log('correctWord2', correctWord)
        correctWord= kata2hira([...pokemon.name][n])
    }

    let answerWords = shuffle(createAnswerWords(correctWord));


    const answerHandler = (elem) => {
        let modal = document.getElementById('modal');
        let answerState = parseInt(elem.target.getAttribute('data-a'), 10)
        if(answerState == 1){
            // sound.play()
            modal.classList.add('correct')
            modal.classList.remove('wrong')
        }else{
            // 不正解から別の不正解を選択した場合に、値が変更されたことがわかりやすいようにする
            let isWrong = modal.classList.contains('wrong');
            if(isWrong){
                modal.classList.remove('wrong')
                setTimeout(() => {
                    modal.classList.add('wrong')
                }, 200)
            }else{
                modal.classList.add('wrong')
                modal.classList.remove('correct')
            }
        }
    }


    return (
        <div id="modal-a">
            <p id="word-a">
                {
                    [...pokemon.name].map((char, i) => {
                        return (
                            <span data-a={(n == i) ? 1: 0} key={uuid()}>
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
                            setWord = (char == correctWord) ? char: kata2hira(char)
                        }
                        let checkCorrect = (char == correctWord) ? 1: 0
                        return (
                            <li key={uuid()}>
                                <input type="radio" value={setWord} id={`word-choise-${i}`} name="word-choise-radio" />
                                <label data-a={checkCorrect} htmlFor={`word-choise-${i}`} onClick={(elem) => {answerHandler(elem)}}>{setWord}</label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ModalA
