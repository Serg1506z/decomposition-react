export default function ListItem({icon, text}){
    // компонент списка с иконкой или картинкой
    return <p className="listItem">
        <img src={icon} alt="" />
        {text}
    </p>
}