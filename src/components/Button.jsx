const Button =({
    buttonClass,title,style,onClick,type

})=>{
    return (
        <div
        className={`buttonClass ${buttonClass}`}
        style={style}
        onClick={onClick}
        type={type}
        >
            {title}
        </div>
    );
};
export default Button;