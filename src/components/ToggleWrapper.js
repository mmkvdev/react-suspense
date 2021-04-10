import * as React from 'react';
import Loader from '../common/Loader';

const AsyncToggler = React.lazy(() => import ('../common/ToggleSwitch'));

function ToggleWrapper () {
    const [onToggle, setOnToggle] = React.useState(false);

    const handleToggler= (onCheck) => {
        return setOnToggle(onCheck);
    }

    return (
        <React.Suspense fallback={<Loader />}>
            <div className="toggle-container">
                <AsyncToggler handleToggler={handleToggler} onToggle={onToggle} />
            </div>
        </React.Suspense>
        
    );
}

export default ToggleWrapper


        



