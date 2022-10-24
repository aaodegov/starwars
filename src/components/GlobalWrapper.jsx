import style from '../App.css'
import {Header} from './Header/Header'
import {Content} from './Content/Content'


export const GlobalWrapper = () => {
    return (
        <div className={style.globalWrapper}>
            <Header />
            <Content />
        </div>
    )

}

