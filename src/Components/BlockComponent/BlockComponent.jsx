import NavTitle from "../../UI/NavTitle/NavTitle";
import '../../App.css'

export default function BlockComponent({title, children}){
    //Компонент отвечающий за виджеты находщиеся под панелью поиска
    return <div className="BlockComponent">
        <NavTitle text={title} />
        <div className="content">
            {children}
        </div>
    </div>
}