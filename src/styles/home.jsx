import styled from "styled-components";

const colorType = type => {
    if (type === "grass") return "#9bcc50";
    if (type === "fire") return "#fd7d24";
    if (type === "water") return "#4592c4";
    if (type === "normal") return "#a4acaf";
    if (type === "fighting") return "#d56723";
    if (type === "flying") return "#3dc7ef";
    if (type === "poison") return "#b97fc9";
    if (type === "ground") return "#f7de3f";
    if (type === "rock") return "#a38c21";
    if (type === "bug") return "#729f3f";
    if (type === "ghost") return "#7b62a3";
    if (type === "steel") return "#9eb7b8";
    if (type === "electric") return "#eed535";
    if (type === "psychic") return "#f366b9";
    if (type === "ice") return "#51c4e7";
    if (type === "dragon") return "#53a4cf";
    if (type === "dark") return "#707070";
    if (type === "fairy") return "#fdb9e9";
}

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

export const PokeType = styled.p`
    color: ${props => colorType(props.type)};
    font-weight: bold;
    cursor: pointer;
    margin: 10px 0;
`;