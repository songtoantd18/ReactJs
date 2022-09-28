const SmallMedal =(props)=> {
    console.log('props:',props);
    return <div></div>
}
const Medal =(props)=> {
    const{boder,title,groupAvartar,numberMember,project,text,logoTask,colorIndex}=props;
    return (
        <div style={{backgroundColor : colorIndex}} >
            <p>border : {boder} vien</p>
            <p>title : {title} group name</p>
            <p>groupAvartar : {groupAvartar} avatar</p>
            <p>numberMember : {numberMember} numberMember</p>
            <p>project : {project} project</p>
            <p>text : {text} thuw ngay thang nam</p>
            <p>logoTask : {logoTask} thuw ngay thang nam</p>
            <SmallMedal
            {...props}
            logoTask ={'retagle'}/>
        </div>
    )
}
export default Medal;

// const toan ={numberMember:15,logoTask:'weqewqeqw',numberMember:34}