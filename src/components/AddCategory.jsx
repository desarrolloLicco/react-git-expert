import { useState } from "react";


// eslint-disable-next-line react/prop-types
const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('');
    const onInputChange = ({target}) => {
        setinputValue(target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        onNewCategory(inputValue.trim())
        //setCategories(categories => [inputValue,...categories])
        setinputValue('');
    }
   

  return (
    <form onSubmit={onSubmit}>
        <input
    type="text"
    placeholder="Buscar Gift"
    value={inputValue}
    onChange={onInputChange}
    />
    </form>
    
  )
}

export default AddCategory
