import React from 'react';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
import Responsive from '../components/common/Responsive';

const MyPage = () => {
    return(
        <Responsive>
            <Editor />
            <TagBox/>
        </Responsive>
    )
}

export default MyPage;