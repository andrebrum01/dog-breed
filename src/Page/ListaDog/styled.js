import styled from 'styled-components';
const ListDogStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

.grid{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    justify-items: center ;
    align-items: center;
    gap: 15px;
    max-width: 100vw;
}
.dog{
    width: 300px;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 15px;
    position: relative;
    z-index: 0;
}
picture{
    position: relative;
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
    position: relative;
    z-index: 0;
    cursor: pointer;
}

picture::after{
    content: '';
    border-radius: 15px;
    z-index: 2;
    position: absolute;
    background-image: linear-gradient(0deg,rgba(12,12,12,.9),rgba(0,0,12,.35),rgba(0,0,12,0),transparent);
    top:0;
    bottom:0;
    right: 0;
    left:0;
    backdrop-filter: blur(10px);
    mask: linear-gradient(0deg,rgb(12,12,12),rgba(0,0,12,.35),rgba(0,0,12,0),rgba(0,0,12,0));
    transition: .3s ease-out;
}
picture:hover::after{
    box-shadow: inset 0px -3px #ec931d;

}

select{
    margin: 0px;
    padding:15px 10px;
    box-sizing:border-box;
    min-width: 250px;
    max-width: 50vw;
    height: 50px;
    background-color:#ec931d ;
    color:black ;
    font-weight: bold;
    text-transform:uppercase;
    cursor: pointer;
    border: solid 1px black;
    border-radius: 5px;
    margin:10px;
    text-align: center;
}
option{
    background-color:white ;
    font-weight: bold;
}
select>option:hover
    {
        color: #1B517E;
        cursor: pointer;
    }
`
const ViewImage = styled.div`
    position: fixed;
    z-index: 99;
    width:100vw ;
    height: 100vh ;
    background-color: rgba(13,13,13,.85);
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        content: url(${props => props.src}) ;
        max-width: 95%;
        height: auto;

    }

`;
export {ListDogStyle , ViewImage};