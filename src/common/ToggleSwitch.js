import * as React from 'react';
import Switch from 'react-switch';
import { nightMan } from '../utils/randomColorGenerator';

const ToggleSwitch = (props) => {
    return (
        <Switch 
            onChange={props.handleToggler} 
            checked={props.onToggle} 
            checkedIcon={false} 
            uncheckedIcon={false} 
            checkedHandleIcon={nightMan} 
            uncheckedHandleIcon={nightMan}
            height={35} 
            width={72}  
            borderRadius={100} 
            onColor={props.onColor} 
            offColor={props.onColor} 
            boxShadow={`0 0 0.5rem ${props.onColor}, inset 0 0 0.5rem ${props.onColor}, 0 0 2rem ${props.onColor}`}
        />
    );
}

export default ToggleSwitch;
