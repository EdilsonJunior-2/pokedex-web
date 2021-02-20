import styled from "styled-components";

export const PokeList = styled.div`
    width: 85%;
    margin: 70px 7.5%;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    @media (max-width: 1300px){
        grid-template-columns: 25% 25% 25% 25%;
    }
    @media (max-width: 1000px){
        grid-template-columns: 33.33% 33.33% 33.33%;
    }
    @media (max-width: 767.98px){
        grid-template-columns: 50% 50%;
    }
    @media (max-width: 550px){
        grid-template-columns: 100%;
    }
`;

export const PokeBox = styled.div`
    padding: 4%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px inset black;

    div:first-child{
        cursor: pointer;
    }
`;

export const PokeName = styled.p`
    font-weight: bold;
`;

export const PokeImg = styled.img`
    width: 70px;
    height: 70px;
`;
