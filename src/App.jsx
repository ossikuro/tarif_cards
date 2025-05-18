import { useState } from 'react'
import tarifs from './data/tarifData.js'
import TarifCard from './components/tarifCard'
import './App.css'
import './components/reset.css'
import './components/normalize.css'

function App() {
    return (
        <>
            <div className="pageName">
                <h1 className="pageTitle">Тарифы</h1>
                <p className="pageDescription">
                    Простой пример карточек с тарифами
                </p>
            </div>
            <div className="cardsAlignment">
                {tarifs.map((tarif) => (
                    <TarifCard key={tarif.id} {...tarif} />
                ))}
            </div>
        </>
    )
}

export default App
