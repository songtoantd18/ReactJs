const InputText =({inputClass,label,placeholder,name,value,onchange,})=> {
    return
    (
    <div className={`inputText ${inputClass}`}>
        <label htmlFor={name}>{label}</label>
        <input
        name={name}
        placeholder={placeholder}
        value={value}
        onchange={onchange}
        />
    </div>
    );
};
export default InputText