import style from './From.module.css'
import {Button} from "../Button/Button";
import {useState} from "react";

export const RequestFormId = ( { launchFrom, updateData, updateShowForm } ) => {
    const [ stateInputFromForm, setStateInputFromForm ] = useState(1)

    const url = `https://swapi.dev/api/${launchFrom}/${stateInputFromForm}/`
    console.log(url)

    // переписать на асинк эвэйт
    const getData = async (event) => {
        event.preventDefault()
        const response = await fetch(url)
        const data = await response.json()
        updateData(data)
        updateShowForm(true)
        console.log(data)
    }



    return (
        <form onSubmit={getData} className={style.form}>
            <label>
                Введите id:
                <input
                    value={stateInputFromForm}
                    onChange={(e) => setStateInputFromForm(e.target.value)}
                    placeholder='id'
                    type='number'
                    name='id' required />
            </label>
            <Button type='submit' />
        </form>
    )
}
