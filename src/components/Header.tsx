import React from 'react';

type HeaderPropsType = {
    headerTitle: string
}

export const Header = (props:HeaderPropsType) => {
    return (
        <div>
            <h1>{props.headerTitle}</h1>
        </div>
    );
};

