import styles from './tarifCard.module.css'

export default function tarifCard({
    name,
    price,
    description,
    speed,
    popular,
}) {
    const cardClass = `${styles.card} ${popular ? styles.popular : ''}`

    return (
        <>
            <div className={cardClass}>
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
        </>
    )
}
