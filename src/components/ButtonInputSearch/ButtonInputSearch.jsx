import { SearchOutlined } from '@ant-design/icons'
import React from 'react'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    const { 
        size, placeholder, textbutton, bordered, 
        backgroundColorInput = '#fff', 
        backgroundColorButton = 'rgb(13, 92, 182)',
        colorButton = '#fff'
    } = props
  return (
    <div style={{display:'flex'}}>
        <InputComponent //inputcomponent sẽ dùng nhìu nơi khác nhau
            size={size} 
            placeholder={placeholder} 
            bordered={bordered} 
            style={{backgroundColor: backgroundColorInput }}     
            {...props} 
        />
        <ButtonComponent 
            size={size} 
            icon={<SearchOutlined color={colorButton} style={{ color:'#fff' }} />} 
            styleButton={{background : backgroundColorButton, border: !bordered && 'none' }}
            textbutton={textbutton}
            styletextbutton={{color:colorButton}}
        />
    </div>
  )
}

export default ButtonInputSearch
