 
import React, { useContext } from 'react';
import RadioGroup, { Radio } from 'react-native-radio-input/Components/main';
import { FormContext } from '../context/FormContext';




export default RadioGroupComponent1 = ()=>{

  const {sortBy, setSortBy} = useContext(FormContext);

  getChecked = (value) => {
    setSortBy(value);
    console.log("sortby :", value)
  }
    return(
      <RadioGroup getChecked={this.getChecked}
      >
      <Radio iconName={"lens"} label={"Modified"} value={"Modified"} />
      <Radio iconName={"lens"} label={"Name"} value={"Name"}/>
      <Radio iconName={"lens"} label={"NameDue Date Reminder"} value={"NameDueDateReminde"}/>
      <Radio iconName={"lens"} label={"Created Date"} value={"CreatedDate"}/>
     </RadioGroup>
    )
}


