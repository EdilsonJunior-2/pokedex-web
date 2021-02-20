import styled from "styled-components";
import { Link } from "react-router-dom";

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


export const PokeType = styled(Link)`
    color: ${props => colorType(props.type)};
    font-weight: bold;
    margin: 10px 0;
    text-decoration: none;
`;