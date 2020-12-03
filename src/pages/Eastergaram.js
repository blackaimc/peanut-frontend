import React from 'react';
import Button from '../components/common/Button'

const Easter = ['사람님은 변태 오징어입니다', '손님은 씹덕입니다', '가람님은 여자입니다', '아카는 게이입니다', '고자콘은 4년 뒤에 대통령이 될겁니다', '슼사는 탈모입니다.', '함멘은 여자입니다', '어비스는 죽었습니다', '메이커집(맥심)은 커피입니다', '카나미는 고양이입니다', '키뮤는 수능보는 중입니다', '정륜은 잘생겼습니다', '정륜은 최대 7천명을 사망시켰습니다', '호두과자 못생김'];
function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const EasterGaram = () => {
    return (
        <div onClick = {() => alert(Easter[random(0, 14)])}>
            <Button>눌러보세요</Button>
        </div>
    )
}

export default EasterGaram;