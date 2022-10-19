import style from './DataDisplay.module.css'

const PeopleDataDisplay = (props) => {
    const {data, showForm} = props

    //
    // я так чувствую, что тут не правильно(
    // компонент должен отрисовывать свое текущее состояние,
    // но почему-то при использовании useState(data)
    // в качестве начального состояния устанавливался пустой объект
    // в 2 часа ночи разбираться почему же - я не стал)
    //

    if (!showForm) return null

    return (
        <div className={style.displayFrame}>
            <h3>Информация о персонаже:</h3>
            <p>Имя персонажа: {data.name}</p>
            <p>Год рождения: {data.birth_year}</p>
            <p>Цвет глаз: {data.eye_color}</p>
            <p>Пол: {data.gender}</p>
            <p>Цвет волос: {data.hair_color}</p>
            <p>Вес: {data.mass}</p>

        </div>
    )
}

export default PeopleDataDisplay