import React, {useState, useCallback} from 'react';
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
    width : 100px;
    text-align : center;
    color : white;
    outline : none;
    border : none;
    font-size : 1rem;
    cursor : pointer;
    border : none;
    background : ${palette.gray[8]};
    color : white;
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

const TagItem = React.memo(({tag, onRemove}) =>(
     <Tag onClick = {()=> onRemove(tag)}>#{tag}</Tag>
));

const TagList = React.memo(({tags, onRemove}) => (
    <TagListBlock>
        {tags.map(tag =>(
            <TagItem key = {tag} tag = {tag} onRemove = {onRemove} />
        ))}
    </TagListBlock>
))

const TagBox = () => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(
        tag => {
            if(!tag) return;
            if(localTags.includes(tag)) return;
            setLocalTags([...localTags, tag]);    
        },
        [localTags]
    );

    const onRemove = useCallback(
        tag => {
            setLocalTags(localTags.filter(t => t !== tag));
        },
        [localTags]
    );

    const onChange = useCallback(e=> {
        setInput(e.target.value)
    }, []);

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            insertTag(input.trim());
            setInput('');
        },
        [input, insertTag],
    );

    return(
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm onSubmit={onSubmit}>
                <Input placeholder = "태그를 넣으십쇼" value = {input} onChange = {onChange}/>
                <Button type = "submit">추가</Button>
            </TagForm>
            <TagList tags = {localTags} onRemove = {onRemove}/>
        </TagBoxBlock>
    )
}

export default TagBox;