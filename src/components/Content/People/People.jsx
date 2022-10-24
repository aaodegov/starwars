import {RequestFormId} from "../../RequestFormId/RequestFormId";
import {PeopleDataDisplay} from "../../DataDisplay/PeopleDataDisplay";
import {Image} from "../../Image";
import {useState} from "react";

export const People = () => {
    const [data, setData] = useState({})
    const [isShowForm, setIsShowForm] = useState(false)

    const updateShowForm = (isShow) => {
        setIsShowForm(isShow)
    }

    const updateData = (obj) => {
        setData(obj)
    }

    return (<>
        <Image
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HbKUdUP2rZ_SaajJqRBT8n1EQZlANz0Lfw&usqp=CAU'}
            width={256} heigth={256} alt={'baby-yoda'}/>
        <RequestFormId launchFrom={'people'} updateData={updateData} updateShowForm={updateShowForm} />
        <PeopleDataDisplay data={data} showForm={isShowForm}/>
    </>)
}
