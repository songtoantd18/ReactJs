const Header =()=> {
    return(
        <div className="containerHeader">
            <div className="containerHeader_left">
                <button> create new task</button>
            </div>
            <div className="containerHeader_right">
                <input placeholder="Type something to search" />
                <button>search</button>
            </div>
        </div>
        



    )
}
export default Header;