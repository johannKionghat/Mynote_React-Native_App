import React, { useContext } from 'react';
import RadioGroup, { Radio } from 'react-native-radio-input/Components/main';
import { FormContext } from '../context/FormContext';




export default RadioGroupComponent2 = ()=>{

  const {range, setRange} = useContext(FormContext);

  getChecked = (value)=>{
    setRange(value);
    console.log("range :", value)
  }

 return(
      <RadioGroup getChecked={this.getChecked}
        
      >
      <Radio iconName={"lens"} label={"Ascending"} value={"Ascending"}/>
      <Radio iconName={"lens"} label={"Decending"} value={"Decending"}/>
     </RadioGroup>
    )
}

