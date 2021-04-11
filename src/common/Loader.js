import * as React from 'react';
import Loader from "react-loader-spinner";


const ToggleLoader = () => {
    return (
        <Loader
            className="loader-container"
            type="ThreeDots"
            color="black"
            height={100}
            width={100}
            timeout={1}
        />
    );
}

export default ToggleLoader;
