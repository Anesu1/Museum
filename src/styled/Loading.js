import styled from 'styled-components';

const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    img{
        height: 50px;
        width:auto;
    }
`

function Loading() {
    return (
        <LoadingWrapper>
            <img src="./images/loading.gif" alt="" />
        </LoadingWrapper>
    )
}

export default Loading
