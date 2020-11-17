import React from 'react';
import Button from '../components/common/Button'

const List = () => {
    return (
        <div onClick = {() => alert("그냥 버튼이라고요")}>
            <Button>버튼 입니다 </Button>
        </div>
    )
}

export default List