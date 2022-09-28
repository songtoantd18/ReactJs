const TodoItem =(props)=>{
    const {title,creator,status,description,backgroundColor,color}=props
    return (
      <div>
         <div className='containerItem' style={{backgroundColor:backgroundColor}}>
              <p className='containerItem-title'>title :{title}</p>
              <p className='containerItem-creator'>creator :{creator}</p>
              <p className='containerItem-status'>status :{status}</p>
              <hr className='containerItem-title'/>
              <p className='containerItem-description'>description :{description}</p>
          </div>
          
          {/* <div className='containerItem2'>
              <p className='containerItem2-title'>title việc cần làm : làm cv luyện code ôn tập js html css
              </p>
              <p className='containerItem2-creator'>deadline : 25/11/2021</p>
              <p className='containerItem2-status'>level task : <span className="normal"> normal</span></p>
          </div>
          <div className='containerItem3'>
              <p className='containerItem3-title'>title việc cần làm : làm cv luyện code ôn tập js html css
              </p>
              <p className='containerItem3-creator'>deadline : 25/11/2021</p>
              <p className='containerItem3-status'>level task : <span className="urgent"> urgent</span></p>
          </div> */}
      </div>
    )
}
export default TodoItem;