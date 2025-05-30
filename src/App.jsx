import { useState } from 'react'
import tarifs from './data/tarifData.js'
import TarifCard from './components/tarifCard'
import './App.css'
import './components/reset.css'
import './components/normalize.css'

function App() {
    const [selectedId, setSelectedId] = useState(null)
    const [hoverId, setHoverId] = useState(null)

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
                    <TarifCard
                        key={tarif.id}
                        {...tarif}
                        selected={tarif.id === selectedId}
                        hover={tarif.id === hoverId}
                        onSelect={() => setSelectedId(tarif.id)}
                        onHoverEnter={() => setHoverId(tarif.id)}
                        onHoverLeave={() => setHoverId(null)}
                    />
                ))}
            </div>
        </>
    )
}

export default App
