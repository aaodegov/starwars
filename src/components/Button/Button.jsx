import style from './Button.module.css'

export const Button = (props) => {
    const { type } = props;

    return <button type={type} className={style.button} > Отправить </button>
}
