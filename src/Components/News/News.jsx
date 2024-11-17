import NavTitle from '../../UI/NavTitle/NavTitle'
import ListItem from '../../UI/ListItem/ListItem'

const news = [
    {text :"Путин упростил получение автомобильных номеров", icon:""}
]

export default function News(){
    //Компонет отвечающий за новостные сводки
    return <div>
        <NavTitle text={'Сейчас в СМИ'} />
        <div className='newsList'>
            {news.map((item, index) =>{
                return <ListItem key={index} {...item} />
            })}
        </div>
    </div>
}