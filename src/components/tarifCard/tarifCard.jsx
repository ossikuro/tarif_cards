import styles from '../../styles/tarifCard.module.css'

export default function TarifCard({
    name,
    price,
    description,
    speed,
    popular,
    selected,
    hover,
    onSelect,
    onHoverEnter,
    onHoverLeave,
}) {
    const cardClass = [
        styles.card,
        popular ? styles.popular : '',
        selected ? styles.selected : '',
        hover ? styles.hover : '',
    ].join(' ')

    return (
        <div
            className={cardClass}
            onClick={onSelect}
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
        >
            <div className={styles.nameWrapper}>
                <div className={styles.priceWrapper}>
                    <div className={styles.priceNumber}>{price} ₽</div>
                    <div className={styles.verticalDivider}></div>
                    <div className={styles.priceMonth}>в месяц</div>
                </div>
                <div className={styles.tarifName}>{name}</div>
            </div>
            <div className={styles.horrizontalDivider}></div>
            <div className={styles.speedWrapper}>
                <div className={styles.speedValue}>{speed}</div>
                <div className={styles.speedDescription}>{description}</div>
            </div>
        </div>
    )
}
