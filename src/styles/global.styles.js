import { css } from '@emotion/react';

export const globalStyles = () => css`
    body {
        background: '#A75F5F';
    }

    .toggle-container {
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-around;
        margin: 100px 50px;
        padding: 4px;
        float: right;
        position: relative;
    }

    .loader-container {
        flex: 1;
        flex-direction: row;
        align-items: center;
        margin-top: 300px;
        margin-right: 1000px;
        margin-left: 800px;
        justify-content: center;
        float: right;
    }

    .content-container {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 17.5rem 150px;
        margin: 10px 14px;
        width: auto;
        position: absolute;
        justify-content: space-evenly;;
    }

    .image-container {
        width: 175px;
        height: 100px;
        margin: 150px 650px;
        padding: 4px 12px;
        background: white;
        box-shadow: 0 0 0 1px #ffe383, inset 0 0 0 white, 0 0 1px white, inset 0 0 5px white, 0 0 12px white, inset 0 0 6px white;
    }

    .text-container {
        font-family: 'Press Start 2P', cursive;
        text-transform: uppercase;
    }
`;