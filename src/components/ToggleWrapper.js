import * as React from 'react';
import { batmanSvg, randomColorGenerator } from '../utils/randomColorGenerator';
import Loader from '../common/Loader';

const AsyncToggler = React.lazy(() => import ('../common/ToggleSwitch'));

function ToggleWrapper (props) {
    const [onToggle, setOnToggle] = React.useState(false);

    const handleToggler= (onCheck) => {
        document.body.style.background = randomColorGenerator();
        return setOnToggle(onCheck);
    }

    return (
        <React.Suspense fallback={<Loader />}>
            <div className="toggle-container">
                <AsyncToggler handleToggler={handleToggler} onToggle={onToggle} onColor={randomColorGenerator()}/>
            </div>
            <div className="content-container">
                <img className="image-container" src={batmanSvg} alt="batman"/>
            </div>
        </React.Suspense>
        
    );
}

export default ToggleWrapper


        



