import NavItem from '../../UI/NavItem/NavItem'


export default function Search() {
    //Компонент отвечающий за поиск
    return <div className="searchContainer">
        <div className="searchContainer__nav">
            <ul className='nav__list'>
                <NavItem text={'Видео'} />
                <NavItem text={'Картинки'} />
                <NavItem text={'Новости'} />
                <NavItem text={'Карты'} />
                <NavItem text={'Маркет'} />
                <NavItem text={'Переводчик'} />
                <NavItem text={'Эфир'} />
                <NavItem text={'Еще'} />
            </ul>
        </div>
        <input type="search" className="searchContainer__input" />
        <button className='btn'>Найти</button>
    </div>
}