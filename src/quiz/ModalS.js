import React from 'react'
import {getRandomInt, kata2hira} from '../utils/index'

const ModalS = (props) => {
    const {zukan, charCode, randomNum, pokemon, n} = props.props;

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



    return (
        <div id="modal-s">
            <ul>
                <li><img data-id="item001" src="/img/pokemon/item001.png" alt="フシキダネ" /></li>
                <li><img data-id="item005" src="/img/pokemon/item005.png" alt="リザード" /></li>
                <li><img data-id="item010" src="/img/pokemon/item010.png" alt="キャタピー" /></li>
                <li><img data-id="item016" src="/img/pokemon/item016.png" alt="ポッポ" /></li>
                <li><img data-id="item020" src="/img/pokemon/item020.png" alt="ラッタ" /></li>
                <li><img data-id="item020" src="/img/pokemon/item020.png" alt="ラッタ" /></li>
            </ul>
        </div>
    )
}

export default ModalS
