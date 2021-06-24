import { React } from 'react'
import { Input } from 'antd'
import './styles.scss'

const CustomInput = ({ placeholder, onChange, value}) => {
    const { TextArea } = Input
    return (
        <div className='custom-input-wrapper'>
            <TextArea
                style={ {height: '40px'}}
                className='edit-input'
                type='text'
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                autoSize  
            />
        </div>
    )
    
}

export default CustomInput;