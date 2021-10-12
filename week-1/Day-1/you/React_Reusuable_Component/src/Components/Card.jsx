import styles from './Card.module.css'



export const Card = ({data})=>{
    const {para1,para2,heading,img}=data

    return(
        <>
            <div className={styles.card_block}>
                <img width="250px" src={img} alt="images" />
                <div>{para1}</div>
                <h1>{heading}</h1>
                <div>{para2}</div>
            </div>
        </>
    )
}