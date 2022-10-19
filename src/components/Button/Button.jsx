import style from './Button.module.css'

const Button = (props) => {
    const { type } = props;

    return <button type={type} className={style.button} > Отправить </button>
}

export default Button