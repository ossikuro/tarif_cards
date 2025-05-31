import TarifList from './components/tarifList/tarifList.jsx'
import './App.css'
import './styles/reset.css'
import './styles/normalize.css'

function App() {
    return (
        <>
            <div className="pageName">
                <h1 className="pageTitle">Тарифы</h1>
                <p className="pageDescription">
                    Простой пример карточек с тарифами
                </p>
            </div>
            <TarifList />
        </>
    )
}

export default App
