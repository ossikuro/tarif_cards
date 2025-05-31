import { useState } from 'react'
import tarifs from '../../data/tarifData.js'
import TarifCard from '../tarifCard/tarifCard.jsx'
import styles from '../../styles/tarifCard.module.css'

export default function TarifList() {
    const [selectedId, setSelectedId] = useState(null)
    const [hoverId, setHoverId] = useState(null)

    return (
        <div className={styles.cardsAlignment}>
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
    )
}
