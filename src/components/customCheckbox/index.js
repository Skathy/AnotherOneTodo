import { React } from 'react';
import { Checkbox } from 'antd';
import './style.scss'

const CustomCheckbox = ({checked, onChange}) => {
    return (
        <div className='checkbox-wrapper'>
            <Checkbox
                checked={checked}
                onChange={onChange} 
            />
        </div>
    )
}

export default CustomCheckbox