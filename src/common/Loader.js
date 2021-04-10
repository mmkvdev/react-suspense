import * as React from 'react';
import Loader from "react-loader-spinner";


const ToggleLoader = () => {
    return (
        <Loader
            type="ThreeDots"
            color="white"
            height={100}
            width={100}
        />
    );
}

export default ToggleLoader;
