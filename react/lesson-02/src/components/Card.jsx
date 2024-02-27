
import styles from "./Card.module.css"

export default function Card({ imgUrl, content }) {

    return (
        <li className={styles.Card}>

            <figure className="card-image">
                <img src={imgUrl} alt="" />
            </figure>
            <div className={styles.CardContent}>
                <p>
                    {content}
                </p>
            </div>

        </li>

    )

}