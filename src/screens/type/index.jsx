import React, { useState, useEffect } from 'react';
import { getTypeInfo } from "../../services/api";

function Type(props) {
    const [typeData, setTypeData] = useState();
    const type = props.match.params.name;

    useEffect(() => {
        const info = getTypeInfo(type).then(info => {
            return info;
        })
        Promise.resolve(info).then((info) => {
            setTypeData(info);
        })
    }, [type]);

    console.log(typeData);

    return (
        <div>
            {typeData && (
                <div>{typeData.name}</div>
            )}
        </div>
    );
}

export default Type;