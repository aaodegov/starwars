import style from './From.module.css'
import Button from "../Button/Button";
import {useState} from "react";

const Form = (props) => {
    const { from, updateData, updateShowForm } = props
    const [ state, setState ] = useState(1)

    let url = `https://swapi.dev/api/${from}/${state}/`
    console.log(url)

    const getData = (event) => {
        event.preventDefault()
        fetch(url)
            .then(response => response.json())
            .then(data => {
                updateData(data)
                updateShowForm(true)
                console.log(data)
            })
    }

    return (
        <form onSubmit={getData} className={style.form}>
            <label>Введите id:
                <input value={state} onChange={(e) => setState(e.target.value)} placeholder='id' type='number' name='id' required />
            </label>
            <Button type='submit' />
        </form>
    )
}

export default Form