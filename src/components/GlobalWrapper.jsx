import style from '../App.css'
import Header from './Header/Header'
import Content from './Content/Content'


const GlobalWrapper = () => {
    return (
        <div className={style.globalWrapper}>
            <Header />
            <Content />
        </div>
    )

}

export default GlobalWrapper