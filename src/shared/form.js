import { useState } from "react";
import InputText from "../component/InputText";
import Button from "../component/Button";

const AddNewForm =({
    formClass,handleSubmit
})=>{
    const [title,setTitle]=useState('');
    const [creator,setCreator]=useState('');
    const [description,setDescription]=useState('');
    return (
        <form onSubmit={handleSunmit} className={`formClassContainer ${formClass}`}>
            <InputText
            label={'Title'}
            placeholder={'type title'}
            name={'title'}
            value={title}
            onchange={(e)=> setTitle(e.target.value)}
            />
            <InputText
            label={'Creator'}
            placeholder={'name of creator'}
            name={'creator'}
            value={creator}
            onchange={(e)=> setTitle(e.target.value)}
            />
              <InputText
            label={'description'}
            placeholder={'description details'}
            name={'description'}
            value={description}
            onchange={(e)=> setTitle(e.target.value)}
            />
            <div>
                <Button title={'save'} type={'submit'}/>
            </div>
        </form>
    )
}
export default AddNewForm