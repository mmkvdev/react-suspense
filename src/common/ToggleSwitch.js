import * as React from 'react';
import Switch from 'react-switch';

const ToggleSwitch = (props) => {
    return (
        <Switch onChange={props.handleToggler} checked={props.onToggle} checkedIcon={false} uncheckedIcon={false} height={35} width={72}  boxShadow="10px 5px 5px black" />
    );
}

export default ToggleSwitch;
