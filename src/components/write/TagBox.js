import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled.div`
    width : 100%;
    border-top : 1px solid ${palette.gray[2]};
    padding-top : 2rem;
    h4 {
        color : ${palette.gray[8]};
        margin-top : 0;
        margin-bottom : 0.5rem;
    }
`;

const TagForm = styled.form`
    text-align : center;
    border-radius : 4px;
    overflow : hidden;
    display : flex;
    width : 512px;
    border 1px solid ${palette.gray[9]};
    
`;

const Input = styled.input`
    padding : 0.5rem;
    flex : 1;
    min-width : 0;
    outline : none;
    border : none;
    font-size : 1rem;
`;
const Button = styled.button` 
    text-align : center;
    color : white;
    outline : none;
    border : none;
    font-size : 1rem;
    cursor : pointer;
    padding-left : 1rem;
    border : none;
    background : ${palette.gray[8]};
    color : white;
    font-weight : bold;
    &:hover{
        background : ${palette.gray[6]};
    }
    border-radius : 0px;
`;

const Tag = styled.div`
    margin-right : 0.5rem;
    color : ${palette.gray[6]};
    cursor : pointer;
    &:hover{
        opacity : 0.5rem;
    }
`;

const TagListBlock = styled.div`
    display : flex;
    margin-top : 0.5rem;
`;

const TagItem = React.memo(({tag}) => <Tag>#{tag}</Tag>);

const TagList = React.memo(({tags}) => (
    <TagListBlock>
        {tags.map(tag =>(
            <TagItem key = {tag} tag = {tag} />
        ))}
    </TagListBlock>
))

const TagBox = () => {
    return(
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm>
                <Input placeholder = "파랑이 바보"/>
                <Button type = "submit">추가</Button>
            </TagForm>
            <TagList tags = {['땅콩', '지영', '파랑이', '호두과자', '방세준', '엔슈타', '냐코', '꼬빈']}/>
        </TagBoxBlock>
    )
}

export default TagBox;