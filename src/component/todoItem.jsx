
const TodoItem =({ title,creator,status,description})=> {
    return (
        <div className="containerItem">
            <p className="containerItem__title"> title: {title}</p>
            <p className="containerItem__creator"> creator: {creator}</p>
            <p className={`containerItem__status containerItem__status--${status.toLowerCase()}`} > status: {status}</p>
            <hr className="containerItem__lineBreak"/>
            <div style={{ textTransform: 'uppercase'}} className="containerItem__description">
                <p> description</p>
                <p> {description}</p>


            </div>
        </div>
    )
}
export default TodoItem;