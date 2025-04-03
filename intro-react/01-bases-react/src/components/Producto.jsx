import { useState } from 'react'
import { LikeIcon } from '../icons/LikeIcon'
import '../styles/producto.css'

//recibiendo props
export const Producto = ({ title, image, description, price }) => {
    // children -> Prop especial de React equivalente a "slot"

    //el estado es a nivel de componente
    const [isLike, setIsLike] = useState(false) // un estado para el componente

    //? Las props deben ser Inmutables
    // const newPrice = `HNL ${price}`
    return (
        <>
            <article className='card'>
                <header>
                    <img className="img-avatar" src={image} alt="" />
                    <h2 className="title">{title}</h2>
                </header>
                <div>
                    <p>{description}</p>
                    <p>HNL {price}</p>
                </div>

                <div>
                    <button
                        onClick={() => {
                            // hacer una petición al servidor

                            //actualizar el estado y la UI
                            setIsLike(!isLike)
                        }}
                        className="btn">
                        <span className="">
                            <LikeIcon isLiked={isLike} />
                        </span>
                        Agregar a favoritos</button>
                </div>

            </article>
        </>
    )
}