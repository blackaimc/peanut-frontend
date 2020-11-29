import React from 'react';
import TagBox from '../components/write/TagBox';
import WriteActionButtons from '../components/write/WriteActionButtons'
import Responsive from '../components/common/Responsive';
import EditContainer from '../containers/write/EditContainer';

const MyPage = () => {
    return(
        <Responsive>
            <EditContainer />
            <TagBox/>
            <WriteActionButtons/>
        </Responsive>
    )
}

export default MyPage;