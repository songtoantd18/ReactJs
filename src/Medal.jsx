const Medal =({
    boder,
    title,
    groupAvartar,
    numberMember,
    project,
    text,
    logoTask,
    colorIndex
})=> {
    return (
        <div style={{backgroundColor : colorIndex}} >
            <p>border : {boder} vien</p>
            <p>title : {title} group name</p>
            <p>groupAvartar : {groupAvartar} avatar</p>
            <p>numberMember : {numberMember} numberMember</p>
            <p>project : {project} project</p>
            <p>text : {text} thuw ngay thang nam</p>
            <p>logoTask : {logoTask} thuw ngay thang nam</p>
        </div>
    )
}
export default Medal;