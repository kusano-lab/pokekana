import React, {useState, useEffect, useRef, createContext} from 'react'
import './index.css'
import ModalQ from './ModalQ'
import ModalA from './ModalA'
import ModalS from './ModalS'
import {getRandomInt, kata2hira, shuffle, createAnswerWords} from '../utils/index'

export const PokemonContext = createContext({})

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

    //クイズの答えの選択肢に使用する文字
    let correctWord = kata2hira([...pokemon.name][n]);
    // 特定の文字を除外する
    while(correctWord === 'ー'){
        n = getRandomInt([...pokemon.name].length)
        correctWord= kata2hira([...pokemon.name][n])
    }
    let answerWords = shuffle(createAnswerWords(correctWord));


    //次のクイズに使用するポケモンを取得する
    let nextQuizBtns = []
    while(nextQuizBtns.length < 5){
        let getPokemon = zukan[getRandomInt(zukan.length)]
        //ポケモンの重複なく取得する
        if( !nextQuizBtns.some(addedPokemon => (addedPokemon.name === getPokemon.name)) ){
            nextQuizBtns.push(getPokemon)
        }
    }

    let props = {
        zukan: zukan, //ポケモンデータの配列
        charCode: charCode, //クイズの切り替え（カタカナ or ひらがな）
        randomNum: randomNum, //ランダムな数（ポケモンの総数）
        pokemon: pokemon, //ポケモンデータ
        n: n, //ポケモンの名前から1文字取得する位置
        quizState: '', //クイズの正解状況（'', correct, wrong）
        correctWord: correctWord, //正解の1文字
        answerWords: answerWords, //クイズの答えの選択肢に使用する文字
        nextQuizBtns: nextQuizBtns, //次のクイズに使用するポケモンを取得する
        setNextQuiz: false //クイズの初期化、再描写フラグ
    }


    const [useData, setData] = useState(props)
    const isFirstRender = useRef(false);

    useEffect(()=>{
        isFirstRender.current = true;
    }, [])

    useEffect(()=>{
        if(isFirstRender.current){
            //初回のレンダー処理
            isFirstRender.current = false;
        }else{
            if(useData.setNextQuiz){
                let n = getRandomInt([...useData.pokemon.name].length)
                //クイズの答えの選択肢に使用する文字
                let correctWord = kata2hira([...useData.pokemon.name][n]);
                // 特定の文字を除外する
                while(correctWord === 'ー'){
                    n = getRandomInt([...useData.pokemon.name].length)
                    correctWord= kata2hira([...useData.pokemon.name][n])
                }
                let answerWords = shuffle(createAnswerWords(correctWord))
                let nextQuizBtns = []
                while(nextQuizBtns.length < 5){
                    let getPokemon = useData.zukan[getRandomInt(useData.zukan.length)]
                    //ポケモンの重複なく取得する
                    if( !nextQuizBtns.some(addedPokemon => (addedPokemon.name === getPokemon.name)) ){
                        nextQuizBtns.push(getPokemon)
                    }
                }

                setData({
                    ...useData,
                    n: n,
                    correctWord: correctWord,
                    answerWords: answerWords,
                    nextQuizBtns: nextQuizBtns,
                    setNextQuiz: false
                })
            }
        }
    }, [useData])

    return (
        <PokemonContext.Provider value={[useData, setData]}>
        <div
            id="modal"
            className={useData.quizState}>
            <div id="modal-inner">
                {/* quiz area */}
                <ModalQ />
                {/* quiz answer */}
                <ModalA />
                {/* next quiz */}
                <ModalS />
            </div>
            <button id="sound">sound btn</button>
        </div>
        </PokemonContext.Provider>
    )
}

export default Quiz
