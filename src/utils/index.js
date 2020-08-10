// 範囲内でランダムな数を生成する
const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

// ひらがなかなカタカナ変換
const hira2kata = str => {
    return str.replace(/[\u3041-\u3096]/g, s =>
        String.fromCharCode(s.charCodeAt(0) + 0x60)
    );
}

// カタカナからひらがな変換
const kata2hira = str => {
    return str.replace(/[\u30A1-\u30FA]/g, s =>
        String.fromCharCode(s.charCodeAt(0) - 0x60)
    );
}

// ひらがなマップ
const aiueoMap = ['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','が','ぎ','ぐ','げ','ご','ざ','じ','ず','ぜ','ぞ','だ','ぢ','づ','で','ど','ば','び','ぶ','べ','ぼ','ぱ','ぴ','ぷ','ぺ','ぽ']

// ひらがなランダム取得
const getRandomChar = () => {
    return aiueoMap[getRandomInt(aiueoMap.length)];
}

// 配列のシャッフル (Fisher–Yates shuffle)
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 重複なく答えの選択肢を生成する
let createAnswerWords = (correctWord) => {
    const wordsLength = 4 // 生成する文字の数
    let arr = [correctWord]

    while(arr.length < wordsLength){
        arr = new Set([...arr, getRandomChar()])
        arr = Array.from(arr)
    }

    return arr
}

export {
    getRandomInt,
    hira2kata,
    kata2hira,
    aiueoMap,
    getRandomChar,
    shuffle,
    createAnswerWords
}